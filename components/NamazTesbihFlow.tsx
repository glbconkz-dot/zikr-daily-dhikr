import React, { useState, useCallback } from 'react';
import { FREE_NAMAZ_TESBIH } from '@/lib/tesbih-presets';
import { upsertTasbihSession } from '@/lib/tasbih-storage';
import TasbihCounter from '@/components/TasbihCounter';
import TevhidDuaScreen from '@/components/TevhidDuaScreen';

interface Props {
  onClose: () => void;
}

type FlowPhase = 'zikr' | 'tevhid';

export default function NamazTesbihFlow({ onClose }: Props) {
  const [phase, setPhase] = useState<FlowPhase>('zikr');
  const [stepIndex, setStepIndex] = useState(0);

  const handleStepComplete = useCallback(() => {
    if (stepIndex < FREE_NAMAZ_TESBIH.length - 1) {
      setStepIndex((i) => i + 1);
      return;
    }
    setPhase('tevhid');
  }, [stepIndex]);

  if (phase === 'tevhid') {
    return <TevhidDuaScreen onClose={onClose} />;
  }

  const currentTasbih = FREE_NAMAZ_TESBIH[stepIndex];

  return (
    <TasbihCounter
      key={currentTasbih.id}
      tasbih={currentTasbih}
      onClose={onClose}
      flowMode
      onTargetReached={handleStepComplete}
    />
  );
}

export async function resetNamazBuiltinSessions(): Promise<void> {
  const now = new Date().toISOString();
  for (const preset of FREE_NAMAZ_TESBIH) {
    await upsertTasbihSession({
      id: `ts_${preset.id}`,
      tasbihId: preset.id,
      currentCount: 0,
      targetCount: preset.targetCount,
      completed: false,
      startedAt: now,
      lastUpdated: now,
    });
  }
}
