import { Image, StyleSheet, Text, useWindowDimensions, View, ViewStyle } from "react-native";

import { colors, fonts, spacing } from "../styles";
import { ImageSource } from "../types";
import { ExternalPressable } from "./ExternalPressable";

type HeaderProps = {
  avatar: ImageSource;
  description: string;
  location: string;
  name: string;
  resumeUrl: string;
};

export function Header({ avatar, description, location, name, resumeUrl }: HeaderProps) {
  const { width } = useWindowDimensions();
  const isWide = width >= 980;

  const eyebrow = (
    <View style={[styles.introRow, !isWide && styles.introRowCenter]}>
      <Image
        accessibilityIgnoresInvertColors
        alt={`${name} — ${description}`}
        source={avatar}
        style={styles.avatar}
      />
      <Text style={styles.eyebrow}>Hi, I&apos;m 👋</Text>
    </View>
  );
  const nameText = (
    <Text
      accessibilityLabel={`${name}, ${description}`}
      accessibilityRole="header"
      aria-level={1}
      style={[styles.name, !isWide && styles.nameSm]}
    >
      {name}
    </Text>
  );
  const role = (
    <Text style={[styles.role, !isWide && styles.roleCenter]}>
      {description}
      <Text style={styles.location}> · {location}</Text>
    </Text>
  );
  const resume = (
    <ExternalPressable url={resumeUrl}>
      <View style={styles.resumeButton}>
        <Text style={styles.resumeButtonText}>Download my resume</Text>
      </View>
    </ExternalPressable>
  );

  if (!isWide) {
    return (
      <View style={styles.stack}>
        <View style={styles.stackText}>
          {eyebrow}
          {nameText}
          {role}
          <View style={styles.stackResume}>{resume}</View>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.hero}>
      <View pointerEvents="box-none" style={styles.textInner}>
        <View pointerEvents="none" style={styles.nameBlock}>
          {eyebrow}
          {nameText}
        </View>
        <View pointerEvents="none" style={styles.roleBlock}>
          {role}
        </View>
        <View style={styles.resumeBlock}>{resume}</View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  hero: {
    alignItems: "center",
    height: 700,
    position: "relative",
    width: "100%",
  },
  robotFill: {
    bottom: 0,
    left: 0,
    position: "absolute",
    right: 0,
    top: 0,
    zIndex: 0,
  },
  textInner: {
    alignSelf: "center",
    bottom: 0,
    maxWidth: 1120,
    paddingHorizontal: 24,
    position: "absolute",
    top: 0,
    width: "100%",
    zIndex: 2,
  },
  nameBlock: {
    left: 24,
    maxWidth: 560,
    position: "absolute",
    top: 44,
  },
  roleBlock: {
    alignItems: "flex-end",
    bottom: 128,
    maxWidth: 360,
    position: "absolute",
    right: 24,
  },
  resumeBlock: {
    bottom: 48,
    left: 24,
    position: "absolute",
  },
  introRow: {
    alignItems: "center",
    flexDirection: "row",
    gap: spacing.sm,
    marginBottom: spacing.sm,
  },
  introRowCenter: {
    justifyContent: "center",
  },
  avatar: {
    borderColor: colors.border,
    borderRadius: 999,
    borderWidth: 2,
    height: 46,
    width: 46,
  },
  eyebrow: {
    color: colors.muted,
    fontFamily: fonts.body,
    fontSize: 18,
    fontWeight: "600",
  },
  name: {
    color: colors.foreground,
    fontFamily: fonts.heading,
    fontSize: 60,
    fontWeight: "700",
    letterSpacing: -1.5,
    lineHeight: 62,
  },
  nameSm: {
    fontSize: 30,
    lineHeight: 36,
    textAlign: "center",
  },
  role: {
    color: colors.muted,
    fontFamily: fonts.body,
    fontSize: 17,
    lineHeight: 26,
    textAlign: "right",
  },
  roleCenter: {
    textAlign: "center",
  },
  location: {
    color: colors.foreground,
  },
  resumeButton: {
    alignSelf: "flex-start",
    backgroundColor: colors.blue,
    borderRadius: 999,
    boxShadow: `0 8px 30px ${colors.blue}66`,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.sm,
    transitionDuration: "160ms",
    transitionProperty: "transform, box-shadow, filter",
    transitionTimingFunction: "ease",
  } as ViewStyle,
  resumeButtonText: {
    color: colors.background,
    fontFamily: fonts.body,
    fontSize: 14,
    fontWeight: "700",
  },
  // Stacked (narrow) layout
  stack: {
    alignItems: "center",
    gap: spacing.lg,
    paddingHorizontal: 24,
    paddingTop: 12,
    width: "100%",
  },
  stackText: {
    alignItems: "center",
    gap: spacing.sm,
    maxWidth: 520,
    width: "100%",
  },
  stackResume: {
    alignItems: "center",
    marginTop: spacing.xs,
  },
  robotStack: {
    height: 360,
    width: "100%",
  } as ViewStyle,
});
