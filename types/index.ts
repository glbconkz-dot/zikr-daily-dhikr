export type Language = 'tr' | 'en' | 'ar' | 'ru' | 'kk';

export type DhikrCategory =
  | 'riziq-bereket'
  | 'sifa'
  | 'huzur-sukunet'
  | 'korunma'
  | 'salavatlar'
  | 'esmaul-husna'
  | 'kismet-ask-iliskiler'
  | 'ev-is-hayirli-kapilar';

export interface Dhikr {
  id: string;
  title: string;
  titleEn?: string;
  titleRu?: string;
  titleAr?: string;
  arabic_text: string;
  transliteration: string;
  meaningTr: string;
  explanationTr: string;
  target_count: number;
  category: DhikrCategory | string;
  premium: boolean;
  sort_order?: number;
}

export interface Program {
  id: string;
  title: string;
  description: string;
  duration_days: number;
  category: string;
  image_url?: string;
  premium: boolean;
  sort_order?: number;
}

export interface DhikrSession {
  id: string;
  dhikr_id: string;
  current_count: number;
  target_count: number;
  completed: boolean;
  started_at: string;
  last_updated: string;
  dhikr?: Dhikr;
}

export interface ProgramProgress {
  id: string;
  program_id: string;
  current_day: number;
  completed_days: number[];
  enrolled_at: string;
  last_updated: string;
  program?: Program;
}

export interface CategoryInfo {
  id: DhikrCategory | string;
  label: string;
  labelAr: string;
  icon: string;
  color: string;
  gradient: [string, string];
}

export interface DailyStats {
  date: string;
  total_count: number;
  sessions_completed: number;
}

export interface CustomTasbih {
  id: string;
  name: string;
  targetCount: number | null;
  createdAt: string;
  updatedAt: string;
  lastUsedAt?: string;
}

export interface TasbihSession {
  id: string;
  tasbihId: string;
  currentCount: number;
  targetCount: number | null;
  completed: boolean;
  startedAt: string;
  lastUpdated: string;
}

export interface TasbihDayEntry {
  count: number;
  completions: number;
}

export interface TasbihStoredStats {
  [date: string]: {
    [tasbihId: string]: TasbihDayEntry;
  };
}
