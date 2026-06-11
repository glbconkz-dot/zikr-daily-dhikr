/*
  # NIYA App - Seed Programs Content

  Seeds the programs table with spiritual programs.
*/

INSERT INTO programs (id, title, description, duration_days, category, premium, sort_order) VALUES
('a1b2c3d4-e5f6-7890-abcd-ef1234567890', '21-Day Abundance Program', 'A transformative 21-day journey of dhikr, gratitude, and tawakkul to open the doors of provision and barakah in your life.', 21, 'rizq', false, 1),
('b2c3d4e5-f6a7-8901-bcde-f12345678901', '14-Day Healing Journey', 'A gentle 14-day program combining healing duas, gratitude, and surrender to experience physical, emotional, and spiritual healing.', 14, 'healing', false, 2),
('c3d4e5f6-a7b8-9012-cdef-123456789012', '7-Day Serenity Reset', 'Seven days of focused peace-seeking dhikr to quiet the mind, calm anxiety, and reconnect with Allah''s infinite tranquility.', 7, 'peace', false, 3),
('d4e5f6a7-b8c9-0123-defa-234567890123', '30-Day Salawat Challenge', 'Build the habit of daily salawat with this 30-day program. Each day increases in depth and beauty, strengthening your connection to the Prophet ﷺ.', 30, 'salawat', true, 4);
