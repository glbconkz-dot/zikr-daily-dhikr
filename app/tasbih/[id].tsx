import { useEffect } from 'react';
import { router } from 'expo-router';

/** Legacy route — redirect to Tesbihim tab (counter is inline there). */
export default function TasbihRedirect() {
  useEffect(() => {
    router.replace('/(tabs)/tesbihim');
  }, []);
  return null;
}
