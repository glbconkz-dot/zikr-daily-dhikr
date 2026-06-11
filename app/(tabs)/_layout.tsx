import { Tabs } from 'expo-router';
import { Home, BookOpen, BarChart3, Crown, Compass, CircleDot } from 'lucide-react-native';
import { COLORS, FONTS } from '@/constants/theme';
import { Platform } from 'react-native';
import { useLanguage } from '@/context/LanguageContext';

export default function TabLayout() {
  const { t } = useLanguage();

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: COLORS.bgCard,
          borderTopColor: COLORS.border,
          borderTopWidth: 1,
          height: Platform.OS === 'ios' ? 88 : 64,
          paddingBottom: Platform.OS === 'ios' ? 28 : 8,
          paddingTop: 8,
          elevation: 0,
          shadowOpacity: 0,
        },
        tabBarActiveTintColor: COLORS.green,
        tabBarInactiveTintColor: COLORS.textMuted,
        tabBarLabelStyle: {
          fontFamily: FONTS.sansMedium,
          fontSize: 10,
          letterSpacing: 0.2,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: t('tab_home'),
          tabBarIcon: ({ size, color }) => <Home size={size} color={color} strokeWidth={1.8} />,
        }}
      />
      <Tabs.Screen
        name="tesbihim"
        options={{
          title: t('tab_tesbihim'),
          tabBarIcon: ({ size, color }) => <CircleDot size={size} color={color} strokeWidth={1.8} />,
        }}
      />
      <Tabs.Screen
        name="categories"
        options={{
          title: t('tab_dhikr'),
          tabBarIcon: ({ size, color }) => <BookOpen size={size} color={color} strokeWidth={1.8} />,
        }}
      />
      <Tabs.Screen
        name="programs"
        options={{
          title: t('tab_programs'),
          tabBarIcon: ({ size, color }) => <Compass size={size} color={color} strokeWidth={1.8} />,
        }}
      />
      <Tabs.Screen
        name="statistics"
        options={{
          title: t('tab_statistics'),
          tabBarIcon: ({ size, color }) => <BarChart3 size={size} color={color} strokeWidth={1.8} />,
        }}
      />
      <Tabs.Screen
        name="premium"
        options={{
          title: t('tab_premium'),
          tabBarIcon: ({ size, color }) => <Crown size={size} color={color} strokeWidth={1.8} />,
          tabBarActiveTintColor: COLORS.gold,
        }}
      />
    </Tabs>
  );
}
