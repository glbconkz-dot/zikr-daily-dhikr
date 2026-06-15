import { CustomTasbih } from '@/types';

const BUILTIN_DATE = '1970-01-01T00:00:00.000Z';

/** Free namaz sonu tesbihleri — no Premium required. */
export const FREE_NAMAZ_TESBIH: CustomTasbih[] = [
  {
    id: 'builtin_subhanallah',
    name: 'Sübhanallah',
    targetCount: 33,
    createdAt: BUILTIN_DATE,
    updatedAt: BUILTIN_DATE,
  },
  {
    id: 'builtin_elhamdulillah',
    name: 'Elhamdülillah',
    targetCount: 33,
    createdAt: BUILTIN_DATE,
    updatedAt: BUILTIN_DATE,
  },
  {
    id: 'builtin_allahu_ekber',
    name: 'Allahu ekber',
    targetCount: 33,
    createdAt: BUILTIN_DATE,
    updatedAt: BUILTIN_DATE,
  },
];

export function isBuiltinTasbih(id: string): boolean {
  return id.startsWith('builtin_');
}
