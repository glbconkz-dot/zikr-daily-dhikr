import AsyncStorage from '@react-native-async-storage/async-storage';
import { Platform } from 'react-native';

const memory = new Map<string, string>();

function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function persistGet(key: string): Promise<string | null> {
  if (memory.has(key)) {
    return memory.get(key)!;
  }

  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      memory.set(key, value);
    }
    return value;
  } catch {
    if (Platform.OS === 'web' && typeof localStorage !== 'undefined') {
      try {
        const value = localStorage.getItem(key);
        if (value !== null) {
          memory.set(key, value);
        }
        return value;
      } catch {
        return null;
      }
    }
    return null;
  }
}

export async function persistSet(key: string, value: string): Promise<boolean> {
  memory.set(key, value);

  for (let attempt = 0; attempt < 3; attempt++) {
    try {
      await AsyncStorage.setItem(key, value);
      return true;
    } catch {
      if (attempt < 2) await delay(40);
    }
  }

  if (Platform.OS === 'web' && typeof localStorage !== 'undefined') {
    try {
      localStorage.setItem(key, value);
      return true;
    } catch {
      // fall through — memory cache still holds the value for this session
    }
  }

  return true;
}

export async function persistRemove(key: string): Promise<void> {
  memory.delete(key);
  try {
    await AsyncStorage.removeItem(key);
  } catch {
    if (Platform.OS === 'web' && typeof localStorage !== 'undefined') {
      try {
        localStorage.removeItem(key);
      } catch {
        // ignore
      }
    }
  }
}

export async function preloadStorageKeys(keys: string[]): Promise<void> {
  await Promise.all(
    keys.map(async (key) => {
      if (!memory.has(key)) {
        await persistGet(key);
      }
    })
  );
}

export function persistGetSync(key: string): string | null {
  return memory.get(key) ?? null;
}
