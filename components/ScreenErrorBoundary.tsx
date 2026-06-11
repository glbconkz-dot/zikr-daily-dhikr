import React, { Component, ReactNode } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { COLORS, FONTS, RADIUS, SPACING } from '@/constants/theme';

interface Props {
  children: ReactNode;
  fallbackMessage: string;
  retryLabel: string;
}

interface State {
  hasError: boolean;
}

export default class ScreenErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <View style={styles.container}>
          <Text style={styles.message}>{this.props.fallbackMessage}</Text>
          <TouchableOpacity style={styles.btn} onPress={() => this.setState({ hasError: false })}>
            <Text style={styles.btnText}>{this.props.retryLabel}</Text>
          </TouchableOpacity>
        </View>
      );
    }
    return this.props.children;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.bg,
    alignItems: 'center',
    justifyContent: 'center',
    padding: SPACING.xl,
    gap: SPACING.md,
  },
  message: {
    fontFamily: FONTS.sans,
    fontSize: 16,
    color: COLORS.textPrimary,
    textAlign: 'center',
  },
  btn: {
    backgroundColor: COLORS.green,
    borderRadius: RADIUS.lg,
    paddingHorizontal: SPACING.lg,
    paddingVertical: SPACING.md,
  },
  btnText: {
    fontFamily: FONTS.sansBold,
    fontSize: 15,
    color: COLORS.cream,
  },
});
