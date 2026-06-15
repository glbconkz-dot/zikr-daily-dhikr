import React, { useState, useCallback } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Platform,
  Alert,
  ActivityIndicator,
  Modal,
} from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { router, useFocusEffect } from 'expo-router';
import { COLORS, FONTS, RADIUS, SHADOW, SPACING } from '@/constants/theme';
import { useLanguage } from '@/context/LanguageContext';
import { useApp } from '@/context/AppContext';
import { createCustomTasbih, deleteCustomTasbih } from '@/lib/tasbih-storage';
import { FREE_NAMAZ_TESBIH } from '@/lib/tesbih-presets';
import { useTabBarScrollPadding } from '@/lib/tab-bar';
import TasbihCounter from '@/components/TasbihCounter';
import ScreenErrorBoundary from '@/components/ScreenErrorBoundary';
import { CustomTasbih } from '@/types';
import { Plus, CircleDot, Trash2, Lock, Crown } from 'lucide-react-native';

export default function TesbihimScreen() {
  const { t } = useLanguage();
  const { customTasbih, tasbihSessions, premium, refreshCustomTasbih, refreshTasbihSessions } = useApp();
  const tabBarPadding = useTabBarScrollPadding();
  const [name, setName] = useState('');
  const [target, setTarget] = useState('');
  const [creating, setCreating] = useState(false);
  const [activeTasbih, setActiveTasbih] = useState<CustomTasbih | null>(null);
  const [screenError, setScreenError] = useState<string | null>(null);
  const [listLoading, setListLoading] = useState(true);

  useFocusEffect(
    useCallback(() => {
      setScreenError(null);
      setListLoading(true);
      Promise.all([refreshCustomTasbih(), refreshTasbihSessions()])
        .catch(() => setScreenError('error_load_data'))
        .finally(() => setListLoading(false));
    }, [refreshCustomTasbih, refreshTasbihSessions])
  );

  const openFreeTasbih = (preset: CustomTasbih) => {
    setActiveTasbih(preset);
  };

  const startCustomTasbih = async (tasbihName: string, targetStr?: string) => {
    if (!premium) {
      router.push('/(tabs)/premium');
      return;
    }

    const trimmed = tasbihName.trim();
    if (!trimmed) return;
    setCreating(true);
    setScreenError(null);
    try {
      const parsed = targetStr?.trim() ? parseInt(targetStr, 10) : null;
      const entry = await createCustomTasbih(trimmed, parsed && parsed > 0 ? parsed : null);
      await refreshCustomTasbih();
      setName('');
      setTarget('');
      setActiveTasbih(entry);
    } catch {
      setScreenError('error_load_data');
    } finally {
      setCreating(false);
    }
  };

  const handleDelete = (id: string) => {
    Alert.alert(t('tesbih_delete'), t('tesbih_delete_confirm'), [
      { text: 'OK', style: 'cancel' },
      {
        text: t('tesbih_delete'),
        style: 'destructive',
        onPress: async () => {
          try {
            await deleteCustomTasbih(id);
            if (activeTasbih?.id === id) setActiveTasbih(null);
            await refreshCustomTasbih();
            await refreshTasbihSessions();
          } catch {
            setScreenError('error_load_data');
          }
        },
      },
    ]);
  };

  const getSession = (id: string) => tasbihSessions.find((s) => s.tasbihId === id);

  return (
    <ScreenErrorBoundary fallbackMessage={t('error_load_data')} retryLabel={t('continue')}>
      <SafeAreaView style={styles.safe} edges={['top']}>
        {listLoading ? (
          <View style={styles.centered}>
            <ActivityIndicator size="large" color={COLORS.green} />
            <Text style={styles.loadingText}>{t('programs_loading')}</Text>
          </View>
        ) : (
          <ScrollView
            contentContainerStyle={[styles.content, { paddingBottom: tabBarPadding }]}
            showsVerticalScrollIndicator={false}
          >
            <View style={styles.header}>
              <CircleDot size={22} color={COLORS.green} strokeWidth={1.8} />
              <View>
                <Text style={styles.title}>{t('tesbihim_title')}</Text>
                <Text style={styles.subtitle}>{t('tesbihim_subtitle')}</Text>
              </View>
            </View>

            {screenError && (
              <View style={styles.errorBox}>
                <Text style={styles.errorText}>{t(screenError)}</Text>
                <TouchableOpacity
                  style={styles.retryBtn}
                  onPress={() => {
                    setScreenError(null);
                    refreshCustomTasbih();
                    refreshTasbihSessions();
                  }}
                >
                  <Text style={styles.retryText}>{t('continue')}</Text>
                </TouchableOpacity>
              </View>
            )}

            <View style={[styles.card, SHADOW.sm]}>
              <Text style={styles.cardTitle}>{t('tesbih_namaz_end')}</Text>
              <Text style={styles.cardDesc}>{t('tesbih_namaz_end_desc')}</Text>
              <View style={styles.presetRow}>
                {FREE_NAMAZ_TESBIH.map((preset) => (
                  <TouchableOpacity
                    key={preset.id}
                    style={styles.presetChip}
                    onPress={() => openFreeTasbih(preset)}
                  >
                    <Text style={styles.presetText}>{preset.name}</Text>
                    <Text style={styles.presetTarget}>×{preset.targetCount}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>

            <View style={[styles.card, SHADOW.sm, !premium && styles.cardLocked]}>
              <View style={styles.premiumCardHeader}>
                <Text style={styles.cardTitle}>{t('tesbih_premium_create')}</Text>
                {!premium && (
                  <View style={styles.premiumTag}>
                    <Crown size={12} color={COLORS.goldDark} strokeWidth={2} />
                    <Text style={styles.premiumTagText}>{t('premium_label')}</Text>
                  </View>
                )}
              </View>
              {!premium && (
                <Text style={styles.cardDesc}>{t('tesbih_premium_locked')}</Text>
              )}
              <Text style={styles.label}>{t('tesbih_name')}</Text>
              <TextInput
                style={[styles.input, !premium && styles.inputDisabled]}
                value={name}
                onChangeText={setName}
                placeholder={t('tesbih_name_placeholder')}
                placeholderTextColor={COLORS.textMuted}
                editable={premium}
              />
              <Text style={styles.label}>{t('tesbih_target')}</Text>
              <TextInput
                style={[styles.input, !premium && styles.inputDisabled]}
                value={target}
                onChangeText={setTarget}
                placeholder={t('tesbih_target_placeholder')}
                placeholderTextColor={COLORS.textMuted}
                keyboardType="number-pad"
                editable={premium}
              />
              <TouchableOpacity
                style={[
                  styles.createBtn,
                  (!premium || !name.trim() || creating) && styles.createBtnDisabled,
                ]}
                onPress={() => (premium ? startCustomTasbih(name, target) : router.push('/(tabs)/premium'))}
                disabled={creating}
              >
                {creating ? (
                  <ActivityIndicator size="small" color={COLORS.cream} />
                ) : !premium ? (
                  <Lock size={18} color={COLORS.cream} strokeWidth={2} />
                ) : (
                  <Plus size={18} color={COLORS.cream} strokeWidth={2} />
                )}
                <Text style={styles.createBtnText}>
                  {!premium ? t('premium_upgrade_btn') : t('tesbih_create')}
                </Text>
              </TouchableOpacity>
            </View>

            <Text style={styles.sectionTitle}>{t('tesbih_my_list')}</Text>
            {customTasbih.length === 0 ? (
              <View style={styles.emptyBox}>
                <Text style={styles.emptyTitle}>{t('tesbih_empty')}</Text>
                <Text style={styles.emptyDesc}>{t('tesbih_empty_desc')}</Text>
              </View>
            ) : (
              customTasbih.map((item) => {
                const session = getSession(item.id);
                const count = session?.currentCount ?? 0;
                const hasTarget = item.targetCount != null && item.targetCount > 0;
                return (
                  <TouchableOpacity
                    key={item.id}
                    style={[styles.listItem, SHADOW.sm]}
                    onPress={() => setActiveTasbih(item)}
                    onLongPress={() => handleDelete(item.id)}
                    activeOpacity={0.85}
                  >
                    <View style={styles.listLeft}>
                      <Text style={styles.listName}>{item.name}</Text>
                      <Text style={styles.listMeta}>
                        {hasTarget
                          ? `${count} / ${item.targetCount}`
                          : `${count} — ${t('tesbih_no_target')}`}
                      </Text>
                    </View>
                    <TouchableOpacity
                      onPress={() => handleDelete(item.id)}
                      hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
                    >
                      <Trash2 size={18} color={COLORS.textMuted} strokeWidth={1.8} />
                    </TouchableOpacity>
                  </TouchableOpacity>
                );
              })
            )}
          </ScrollView>
        )}

        <Modal
          visible={!!activeTasbih}
          animationType="slide"
          presentationStyle="fullScreen"
          onRequestClose={() => setActiveTasbih(null)}
        >
          <SafeAreaProvider>
            {activeTasbih && (
              <TasbihCounter
                tasbih={activeTasbih}
                onClose={() => {
                  setActiveTasbih(null);
                  refreshCustomTasbih();
                  refreshTasbihSessions();
                }}
              />
            )}
          </SafeAreaProvider>
        </Modal>
      </SafeAreaView>
    </ScreenErrorBoundary>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: COLORS.bg },
  centered: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: SPACING.md,
    backgroundColor: COLORS.bg,
  },
  loadingText: {
    fontFamily: FONTS.sans,
    fontSize: 14,
    color: COLORS.textMuted,
  },
  content: { padding: SPACING.md, flexGrow: 1 },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SPACING.md,
    paddingTop: Platform.OS === 'android' ? SPACING.lg : SPACING.sm,
    marginBottom: SPACING.lg,
  },
  title: {
    fontFamily: FONTS.serifBold,
    fontSize: 28,
    color: COLORS.textPrimary,
  },
  subtitle: {
    fontFamily: FONTS.sans,
    fontSize: 14,
    color: COLORS.textMuted,
    marginTop: 2,
  },
  errorBox: {
    backgroundColor: COLORS.error + '15',
    borderRadius: RADIUS.lg,
    padding: SPACING.md,
    marginBottom: SPACING.md,
    borderWidth: 1,
    borderColor: COLORS.error + '40',
  },
  errorText: {
    fontFamily: FONTS.sans,
    fontSize: 14,
    color: COLORS.error,
    textAlign: 'center',
  },
  retryBtn: {
    marginTop: SPACING.sm,
    alignSelf: 'center',
    paddingVertical: SPACING.xs,
    paddingHorizontal: SPACING.md,
  },
  retryText: {
    fontFamily: FONTS.sansSemiBold,
    fontSize: 14,
    color: COLORS.green,
  },
  card: {
    backgroundColor: COLORS.bgCard,
    borderRadius: RADIUS.xl,
    padding: SPACING.md,
    borderWidth: 1,
    borderColor: COLORS.border,
    marginBottom: SPACING.lg,
  },
  cardLocked: {
    borderColor: COLORS.gold + '40',
  },
  cardTitle: {
    fontFamily: FONTS.serif,
    fontSize: 18,
    color: COLORS.textPrimary,
    marginBottom: SPACING.xs,
  },
  cardDesc: {
    fontFamily: FONTS.sans,
    fontSize: 13,
    color: COLORS.textMuted,
    marginBottom: SPACING.md,
    lineHeight: 19,
  },
  premiumCardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: SPACING.xs,
  },
  premiumTag: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    backgroundColor: COLORS.gold + '20',
    borderRadius: RADIUS.full,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  premiumTagText: {
    fontFamily: FONTS.sansBold,
    fontSize: 10,
    color: COLORS.goldDark,
  },
  presetRow: { flexDirection: 'row', flexWrap: 'wrap', gap: SPACING.sm },
  presetChip: {
    backgroundColor: COLORS.green + '12',
    borderRadius: RADIUS.lg,
    paddingHorizontal: SPACING.md,
    paddingVertical: SPACING.sm,
    borderWidth: 1,
    borderColor: COLORS.green + '30',
    minWidth: '30%',
    flexGrow: 1,
  },
  presetText: {
    fontFamily: FONTS.sansSemiBold,
    fontSize: 14,
    color: COLORS.green,
    textAlign: 'center',
  },
  presetTarget: {
    fontFamily: FONTS.sans,
    fontSize: 11,
    color: COLORS.textMuted,
    textAlign: 'center',
    marginTop: 2,
  },
  label: {
    fontFamily: FONTS.sansMedium,
    fontSize: 12,
    color: COLORS.textMuted,
    marginBottom: SPACING.xs,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  input: {
    backgroundColor: COLORS.bg,
    borderRadius: RADIUS.lg,
    borderWidth: 1,
    borderColor: COLORS.border,
    padding: SPACING.md,
    fontFamily: FONTS.sans,
    fontSize: 16,
    color: COLORS.textPrimary,
    marginBottom: SPACING.md,
  },
  inputDisabled: {
    opacity: 0.55,
    backgroundColor: COLORS.bg + '80',
  },
  createBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: SPACING.sm,
    backgroundColor: COLORS.green,
    borderRadius: RADIUS.lg,
    paddingVertical: 14,
  },
  createBtnDisabled: { opacity: 0.7 },
  createBtnText: {
    fontFamily: FONTS.sansBold,
    fontSize: 15,
    color: COLORS.cream,
  },
  sectionTitle: {
    fontFamily: FONTS.serif,
    fontSize: 20,
    color: COLORS.textPrimary,
    marginBottom: SPACING.md,
  },
  emptyBox: {
    padding: SPACING.xl,
    alignItems: 'center',
    backgroundColor: COLORS.bgCard,
    borderRadius: RADIUS.lg,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  emptyTitle: {
    fontFamily: FONTS.sansSemiBold,
    fontSize: 16,
    color: COLORS.textPrimary,
  },
  emptyDesc: {
    fontFamily: FONTS.sans,
    fontSize: 13,
    color: COLORS.textMuted,
    textAlign: 'center',
    marginTop: SPACING.sm,
    lineHeight: 20,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.bgCard,
    borderRadius: RADIUS.lg,
    padding: SPACING.md,
    borderWidth: 1,
    borderColor: COLORS.border,
    marginBottom: SPACING.sm,
  },
  listLeft: { flex: 1 },
  listName: {
    fontFamily: FONTS.sansSemiBold,
    fontSize: 16,
    color: COLORS.textPrimary,
  },
  listMeta: {
    fontFamily: FONTS.sans,
    fontSize: 13,
    color: COLORS.textMuted,
    marginTop: 2,
  },
});
