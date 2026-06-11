/*
  # NIYA App - Complete Database Schema

  ## Overview
  Full schema for the NIYA spiritual companion app including dhikr library,
  programs, user progress tracking, favorites, and session management.

  ## New Tables

  1. `dhikr`
     - Core dhikr/dua content: Arabic text, transliteration, meaning, explanation
     - Categorized with premium flag and target count
  
  2. `programs`
     - Structured spiritual programs (e.g., 21-Day Abundance)
     - Contains duration, description, category
  
  3. `program_dhikr`
     - Junction table linking programs to their dhikr items with day assignments
  
  4. `user_dhikr_sessions`
     - Tracks user progress per dhikr: current count, completed, timestamps
  
  5. `user_program_progress`
     - Tracks per-day completion for each program a user is enrolled in
  
  6. `user_favorites`
     - User-saved favorite dhikr items

  ## Security
  - RLS enabled on all tables
  - Dhikr and programs are publicly readable (content library)
  - User data (sessions, progress, favorites) is private per user
*/

-- ========================
-- CONTENT TABLES
-- ========================

CREATE TABLE IF NOT EXISTS dhikr (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  title_ar text DEFAULT '',
  arabic_text text NOT NULL,
  transliteration text NOT NULL,
  meaning text NOT NULL,
  explanation text DEFAULT '',
  target_count integer NOT NULL DEFAULT 33,
  category text NOT NULL,
  premium boolean NOT NULL DEFAULT false,
  sort_order integer DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS programs (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text NOT NULL,
  duration_days integer NOT NULL DEFAULT 21,
  category text NOT NULL,
  image_url text DEFAULT '',
  premium boolean NOT NULL DEFAULT false,
  sort_order integer DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS program_dhikr (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  program_id uuid NOT NULL REFERENCES programs(id) ON DELETE CASCADE,
  dhikr_id uuid NOT NULL REFERENCES dhikr(id) ON DELETE CASCADE,
  day_number integer NOT NULL,
  sort_order integer DEFAULT 0
);

-- ========================
-- USER TABLES
-- ========================

CREATE TABLE IF NOT EXISTS user_dhikr_sessions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  dhikr_id uuid NOT NULL REFERENCES dhikr(id) ON DELETE CASCADE,
  current_count integer NOT NULL DEFAULT 0,
  target_count integer NOT NULL DEFAULT 33,
  completed boolean NOT NULL DEFAULT false,
  started_at timestamptz DEFAULT now(),
  last_updated timestamptz DEFAULT now(),
  UNIQUE(user_id, dhikr_id)
);

CREATE TABLE IF NOT EXISTS user_program_progress (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  program_id uuid NOT NULL REFERENCES programs(id) ON DELETE CASCADE,
  current_day integer NOT NULL DEFAULT 1,
  completed_days integer[] NOT NULL DEFAULT '{}',
  enrolled_at timestamptz DEFAULT now(),
  last_updated timestamptz DEFAULT now(),
  UNIQUE(user_id, program_id)
);

CREATE TABLE IF NOT EXISTS user_favorites (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  dhikr_id uuid NOT NULL REFERENCES dhikr(id) ON DELETE CASCADE,
  created_at timestamptz DEFAULT now(),
  UNIQUE(user_id, dhikr_id)
);

-- ========================
-- INDEXES
-- ========================

CREATE INDEX IF NOT EXISTS idx_dhikr_category ON dhikr(category);
CREATE INDEX IF NOT EXISTS idx_dhikr_premium ON dhikr(premium);
CREATE INDEX IF NOT EXISTS idx_program_dhikr_program ON program_dhikr(program_id);
CREATE INDEX IF NOT EXISTS idx_sessions_user ON user_dhikr_sessions(user_id);
CREATE INDEX IF NOT EXISTS idx_sessions_user_dhikr ON user_dhikr_sessions(user_id, dhikr_id);
CREATE INDEX IF NOT EXISTS idx_program_progress_user ON user_program_progress(user_id);
CREATE INDEX IF NOT EXISTS idx_favorites_user ON user_favorites(user_id);

-- ========================
-- ROW LEVEL SECURITY
-- ========================

ALTER TABLE dhikr ENABLE ROW LEVEL SECURITY;
ALTER TABLE programs ENABLE ROW LEVEL SECURITY;
ALTER TABLE program_dhikr ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_dhikr_sessions ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_program_progress ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_favorites ENABLE ROW LEVEL SECURITY;

-- Public read for content
CREATE POLICY "Anyone can read dhikr"
  ON dhikr FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Anyone can read programs"
  ON programs FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Anyone can read program dhikr"
  ON program_dhikr FOR SELECT
  TO anon, authenticated
  USING (true);

-- Sessions: private per user
CREATE POLICY "Users can view own sessions"
  ON user_dhikr_sessions FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own sessions"
  ON user_dhikr_sessions FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own sessions"
  ON user_dhikr_sessions FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can delete own sessions"
  ON user_dhikr_sessions FOR DELETE
  TO authenticated
  USING (auth.uid() = user_id);

-- Program progress: private per user
CREATE POLICY "Users can view own program progress"
  ON user_program_progress FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own program progress"
  ON user_program_progress FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own program progress"
  ON user_program_progress FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can delete own program progress"
  ON user_program_progress FOR DELETE
  TO authenticated
  USING (auth.uid() = user_id);

-- Favorites: private per user
CREATE POLICY "Users can view own favorites"
  ON user_favorites FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own favorites"
  ON user_favorites FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can delete own favorites"
  ON user_favorites FOR DELETE
  TO authenticated
  USING (auth.uid() = user_id);
