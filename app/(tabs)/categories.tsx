import React, { useState, useMemo, useCallback } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
  Platform,
} from 'react-native';
import { router, useLocalSearchParams, useFocusEffect } from 'expo-router';
import { COLORS, FONTS, RADIUS, SPACING } from '@/constants/theme';
import { useApp } from '@/context/AppContext';
import { useLanguage, getDhikrSearchText } from '@/context/LanguageContext';
import { isDhikrLocked, isPremiumDhikrContent } from '@/lib/premium';
import { CATEGORIES } from '@/data/categories';
import CategoryCard from '@/components/CategoryCard';
import DhikrCard from '@/components/DhikrCard';
import { Search, X } from 'lucide-react-native';
import { useTabBarScrollPadding } from '@/lib/tab-bar';

export default function CategoriesScreen() {
  const { dhikrList, sessions, favorites, premium, refreshPremium } = useApp();

  useFocusEffect(
    useCallback(() => {
      refreshPremium();
    }, [refreshPremium])
  );
  const { t, language } = useLanguage();
  const tabBarPadding = useTabBarScrollPadding();
  const params = useLocalSearchParams<{ cat?: string }>();
  const [selectedCat, setSelectedCat] = useState<string | null>(params.cat ?? null);
  const [query, setQuery] = useState('');

  const filteredDhikr = useMemo(() => {
    let list = dhikrList;
    if (selectedCat) list = list.filter((d) => d.category === selectedCat);
    if (query.trim()) {
      const q = query.toLowerCase();
      list = list.filter((d) => getDhikrSearchText(d, language).includes(q));
    }
    return list;
  }, [dhikrList, selectedCat, query, language]);

  const getCategoryCount = (catId: string) =>
    dhikrList.filter((d) => d.category === catId).length;

  const getSession = (dhikrId: string) => sessions.find((s) => s.dhikr_id === dhikrId);

  const getCategoryLabel = (catId: string): string => {
    const keyMap: Record<string, string> = {
      'riziq-bereket': 'cat_rizq',
      'sifa': 'cat_healing',
      'huzur-sukunet': 'cat_peace',
      'korunma': 'cat_protection',
      'salavatlar': 'cat_salawat',
      'esmaul-husna': 'cat_asma',
      'kismet-ask-iliskiler': 'cat_relationships',
      'ev-is-hayirli-kapilar': 'cat_opportunities',
    };
    return t(keyMap[catId] ?? catId);
  };

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView
        style={styles.scroll}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[styles.content, { paddingBottom: tabBarPadding }]}
        stickyHeaderIndices={[0]}
      >
        {/* Sticky Header */}
        <View style={styles.stickyHeader}>
          <Text style={styles.pageTitle}>{t('dhikr_library')}</Text>
          <View style={styles.searchBar}>
            <Search size={16} color={COLORS.textMuted} strokeWidth={1.8} />
            <TextInput
              style={styles.searchInput}
              placeholder={t('search_placeholder')}
              placeholderTextColor={COLORS.textMuted}
              value={query}
              onChangeText={setQuery}
            />
            {query.length > 0 && (
              <TouchableOpacity onPress={() => setQuery('')}>
                <X size={16} color={COLORS.textMuted} />
              </TouchableOpacity>
            )}
          </View>
        </View>

        {/* Category pills */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.pillsContainer}
        >
          <TouchableOpacity
            style={[styles.pill, !selectedCat && styles.pillActive]}
            onPress={() => setSelectedCat(null)}
          >
            <Text style={[styles.pillText, !selectedCat && styles.pillTextActive]}>{t('cat_all')}</Text>
          </TouchableOpacity>
          {CATEGORIES.map((cat) => (
            <TouchableOpacity
              key={cat.id}
              style={[styles.pill, selectedCat === cat.id && styles.pillActive]}
              onPress={() => setSelectedCat(selectedCat === cat.id ? null : cat.id)}
            >
              <Text style={[styles.pillText, selectedCat === cat.id && styles.pillTextActive]}>
                {getCategoryLabel(cat.id)}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Category grid — only when no filter */}
        {!selectedCat && !query && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>{t('browse_by_category')}</Text>
            <View style={styles.categoryGrid}>
              {CATEGORIES.map((cat) => (
                <View key={cat.id} style={styles.categoryItem}>
                  <CategoryCard
                    category={cat}
                    count={getCategoryCount(cat.id)}
                    onPress={() => setSelectedCat(cat.id)}
                  />
                </View>
              ))}
            </View>
          </View>
        )}

        {/* Dhikr list */}
        <View style={styles.section}>
          {(selectedCat || query) && (
            <View style={styles.resultsHeader}>
              <Text style={styles.sectionTitle}>
                {selectedCat
                  ? getCategoryLabel(selectedCat)
                  : `${t('results_for')} "${query}"`}
              </Text>
              <Text style={styles.resultsCount}>{filteredDhikr.length} {t('items')}</Text>
            </View>
          )}
          {!selectedCat && !query && (
            <Text style={styles.sectionTitle}>{t('all_dhikr')}</Text>
          )}
          <View style={styles.dhikrList}>
            {filteredDhikr.map((dhikr) => {
              const session = getSession(dhikr.id);
              const isLocked = isDhikrLocked(dhikr, premium);
              return (
                <DhikrCard
                  key={dhikr.id}
                  dhikr={dhikr}
                  currentCount={session?.current_count ?? 0}
                  isFavorite={favorites.includes(dhikr.id)}
                  showProgress={!!session}
                  variant={session && !session.completed ? 'resume' : 'default'}
                  locked={isLocked}
                  isPremiumContent={isPremiumDhikrContent(dhikr)}
                  onPress={() =>
                    isLocked
                      ? router.push('/(tabs)/premium')
                      : router.push(`/dhikr/${dhikr.id}`)
                  }
                />
              );
            })}
            {filteredDhikr.length === 0 && (
              <View style={styles.empty}>
                <Text style={styles.emptyTitle}>{t('no_results')}</Text>
                <Text style={styles.emptyText}>{t('no_results_desc')}</Text>
              </View>
            )}
          </View>
        </View>
        <View style={{ height: SPACING.xl }} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: COLORS.bg },
  scroll: { flex: 1 },
  content: { paddingHorizontal: SPACING.md },
  stickyHeader: {
    backgroundColor: COLORS.bg,
    paddingTop: Platform.OS === 'android' ? SPACING.xl : SPACING.md,
    paddingBottom: SPACING.sm,
  },
  pageTitle: {
    fontFamily: FONTS.serifBold,
    fontSize: 28,
    color: COLORS.textPrimary,
    marginBottom: SPACING.md,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.bgCard,
    borderRadius: RADIUS.lg,
    paddingHorizontal: SPACING.md,
    paddingVertical: 10,
    gap: SPACING.sm,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  searchInput: {
    flex: 1,
    fontFamily: FONTS.sans,
    fontSize: 14,
    color: COLORS.textPrimary,
    padding: 0,
  },
  pillsContainer: {
    paddingVertical: SPACING.md,
    paddingRight: SPACING.md,
    gap: SPACING.sm,
    flexDirection: 'row',
  },
  pill: {
    paddingHorizontal: SPACING.md,
    paddingVertical: 7,
    borderRadius: RADIUS.full,
    backgroundColor: COLORS.bgCard,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  pillActive: {
    backgroundColor: COLORS.green,
    borderColor: COLORS.green,
  },
  pillText: {
    fontFamily: FONTS.sansMedium,
    fontSize: 12,
    color: COLORS.textSecondary,
  },
  pillTextActive: {
    color: COLORS.cream,
  },
  section: { marginBottom: SPACING.lg },
  sectionTitle: {
    fontFamily: FONTS.serif,
    fontSize: 20,
    color: COLORS.textPrimary,
    marginBottom: SPACING.md,
  },
  resultsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: SPACING.md,
  },
  resultsCount: {
    fontFamily: FONTS.sansMedium,
    fontSize: 12,
    color: COLORS.textMuted,
  },
  categoryGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: SPACING.sm,
  },
  categoryItem: {
    width: '48%',
  },
  dhikrList: { gap: SPACING.sm },
  empty: {
    alignItems: 'center',
    paddingVertical: SPACING.xxl,
  },
  emptyTitle: {
    fontFamily: FONTS.serif,
    fontSize: 20,
    color: COLORS.textPrimary,
    marginBottom: SPACING.xs,
  },
  emptyText: {
    fontFamily: FONTS.sans,
    fontSize: 14,
    color: COLORS.textMuted,
  },
});
