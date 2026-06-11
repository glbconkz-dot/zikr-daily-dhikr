import { DhikrSession } from '@/types';
import { Dhikr } from '@/types';

export interface UsageItem {
  id: string;
  name: string;
  count: number;
}

export function getMostUsedDhikrFromSessions(
  sessions: DhikrSession[],
  dhikrList: Dhikr[],
  getTitle: (dhikr: Dhikr) => string
): UsageItem[] {
  const nameMap = Object.fromEntries(
    dhikrList.map((d) => [d.id, getTitle(d)])
  );

  return sessions
    .filter((s) => s.current_count > 0)
    .map((s) => ({
      id: s.dhikr_id,
      name: nameMap[s.dhikr_id] ?? s.dhikr_id,
      count: s.current_count,
    }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 5);
}

export function mergeMostUsed(items: UsageItem[]): UsageItem[] {
  const totals: Record<string, UsageItem> = {};
  for (const item of items) {
    if (totals[item.id]) {
      totals[item.id].count += item.count;
    } else {
      totals[item.id] = { ...item };
    }
  }
  return Object.values(totals).sort((a, b) => b.count - a.count).slice(0, 5);
}
