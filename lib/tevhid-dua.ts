import { TasbihSession } from '@/types';
import { FREE_NAMAZ_TESBIH } from '@/lib/tesbih-presets';

export const TEVHID_DUA_ARABIC =
  'لَا إِلَٰهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ';

export const NAMAZ_BUILTIN_IDS = FREE_NAMAZ_TESBIH.map((t) => t.id);
export const NAMAZ_TESBIH_TARGET = 33;

export function isNamazBuiltinTasbih(id: string): boolean {
  return NAMAZ_BUILTIN_IDS.includes(id);
}

export function isNamazTesbihSessionComplete(session: TasbihSession | undefined): boolean {
  if (!session) return false;
  return session.completed && session.currentCount >= NAMAZ_TESBIH_TARGET;
}

export function areAllNamazTesbihComplete(
  sessions: TasbihSession[],
  pending?: { tasbihId: string; count: number; completed: boolean }
): boolean {
  return NAMAZ_BUILTIN_IDS.every((id) => {
    if (pending?.tasbihId === id) {
      return pending.completed && pending.count >= NAMAZ_TESBIH_TARGET;
    }
    const session = sessions.find((s) => s.tasbihId === id);
    return isNamazTesbihSessionComplete(session);
  });
}
