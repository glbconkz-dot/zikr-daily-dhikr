import { Program } from '@/types';

export interface ProgramDayAssignment {
  day_number: number;
  dhikr_ids: string[];
}

export interface ProgramDefinition extends Program {
  days: ProgramDayAssignment[];
}

const RIZIK_DHIKR = [
  'rizik_001', 'rizik_002', 'rizik_003', 'rizik_004', 'rizik_005',
  'rizik_006', 'rizik_007', 'rizik_008', 'rizik_009', 'rizik_010',
];

const SIFA_DHIKR = [
  'sifa_001', 'sifa_002', 'sifa_003', 'sifa_004',
  'sifa_005', 'sifa_006', 'sifa_007', 'sifa_008',
];

const HUZUR_DHIKR = [
  'huzur_001', 'huzur_002', 'huzur_003', 'huzur_004',
  'huzur_005', 'huzur_006', 'huzur_007',
];

const ESMA_DHIKR = [
  'esma_001', 'esma_002', 'esma_003', 'esma_004', 'esma_005',
  'esma_ext_001', 'esma_ext_002', 'esma_ext_003', 'esma_ext_004', 'esma_ext_005',
];

const SALAVAT_DHIKR = [
  'salavat_001', 'salavat_002', 'salavat_003', 'salavat_004',
  'salavat_005', 'salavat_006',
];

const NIYET_DHIKR = [
  'niyet_001', 'niyet_002', 'niyet_003', 'niyet_004', 'niyet_005',
  'niyet_006', 'niyet_007', 'niyet_008', 'niyet_009', 'niyet_010',
];

function buildDays(duration: number, dhikrPool: string[]): ProgramDayAssignment[] {
  return Array.from({ length: duration }, (_, i) => {
    const day = i + 1;
    const primary = dhikrPool[i % dhikrPool.length];
    const secondary =
      dhikrPool.length > 1 ? dhikrPool[(i + 1) % dhikrPool.length] : null;
    return {
      day_number: day,
      dhikr_ids: secondary && day % 3 === 0 ? [primary, secondary] : [primary],
    };
  });
}

export const PROGRAM_LIST: ProgramDefinition[] = [
  {
    id: 'prog_serenity_7',
    title: '7-Day Serenity Reset',
    description:
      'Seven days of focused peace-seeking dhikr to quiet the mind, calm anxiety, and reconnect with tranquility.',
    duration_days: 7,
    category: 'peace',
    premium: false,
    sort_order: 1,
    days: buildDays(7, HUZUR_DHIKR),
  },
  {
    id: 'prog_healing_14',
    title: '14-Day Healing Journey',
    description:
      'A gentle 14-day program combining healing duas, gratitude, and surrender for physical, emotional, and spiritual healing.',
    duration_days: 14,
    category: 'healing',
    premium: true,
    sort_order: 2,
    days: buildDays(14, SIFA_DHIKR),
  },
  {
    id: 'prog_abundance_21',
    title: '21-Day Abundance Program',
    description:
      'A transformative 21-day journey of dhikr, gratitude, and tawakkul to open the doors of provision and barakah.',
    duration_days: 21,
    category: 'rizq',
    premium: true,
    sort_order: 3,
    days: buildDays(21, RIZIK_DHIKR),
  },
  {
    id: 'prog_gratitude_21',
    title: '21-Day Gratitude Program',
    description:
      'Twenty-one days of shukr-focused dhikr and reflection to deepen gratitude and spiritual contentment.',
    duration_days: 21,
    category: 'peace',
    premium: true,
    sort_order: 4,
    days: buildDays(21, NIYET_DHIKR),
  },
  {
    id: 'prog_asma_30',
    title: '30-Day Asma Program',
    description:
      'A month-long journey through the Beautiful Names of Allah for deep spiritual connection and growth.',
    duration_days: 30,
    category: 'salawat',
    premium: true,
    sort_order: 5,
    days: buildDays(30, ESMA_DHIKR),
  },
  {
    id: 'prog_salawat_40',
    title: '40-Day Salawat Program',
    description:
      'Forty days of salawat and blessings upon the Prophet ﷺ for barakah, love, and spiritual nearness.',
    duration_days: 40,
    category: 'salawat',
    premium: true,
    sort_order: 6,
    days: buildDays(40, SALAVAT_DHIKR),
  },
  {
    id: 'prog_discipline_40',
    title: '40-Day Spiritual Discipline Program',
    description:
      'A structured 40-day path of intention, reflection, and consistent dhikr for spiritual discipline.',
    duration_days: 40,
    category: 'healing',
    premium: true,
    sort_order: 7,
    days: buildDays(40, [...NIYET_DHIKR, ...HUZUR_DHIKR]),
  },
];

export const PROGRAM_MAP: Record<string, ProgramDefinition> = Object.fromEntries(
  PROGRAM_LIST.map((p) => [p.id, p])
);

export function getProgramDays(programId: string): ProgramDayAssignment[] {
  return PROGRAM_MAP[programId]?.days ?? [];
}

export function getDayAssignment(
  programId: string,
  dayNumber: number
): ProgramDayAssignment | undefined {
  return getProgramDays(programId).find((d) => d.day_number === dayNumber);
}
