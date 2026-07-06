import { StyleSheet, Text, useWindowDimensions, View, ViewStyle } from "react-native";

import { colors, fonts, spacing } from "../styles";
import { ExternalPressable } from "./ExternalPressable";
import { SplineAvatar } from "./SplineAvatar";

type HeaderProps = {
  description: string;
  location: string;
  name: string;
  resumeUrl: string;
};

export function Header({ description, location, name, resumeUrl }: HeaderProps) {
  const { width } = useWindowDimensions();
  const isWide = width >= 980;

  const eyebrow = <Text style={styles.eyebrow}>Hi, I&apos;m 👋</Text>;
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
        <View style={styles.robotStack}>
          <SplineAvatar />
        </View>
      </View>
    );
  }

  return (
    <View style={styles.hero}>
      <View pointerEvents="box-none" style={styles.robotFill}>
        <SplineAvatar />
      </View>
      <View pointerEvents="none" style={styles.nameBlock}>
        {eyebrow}
        {nameText}
      </View>
      <View pointerEvents="none" style={styles.roleBlock}>
        {role}
      </View>
      <View style={styles.resumeBlock}>{resume}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  hero: {
    alignSelf: "center",
    height: 600,
    maxWidth: 1120,
    paddingHorizontal: 24,
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
  nameBlock: {
    left: 24,
    maxWidth: 620,
    position: "absolute",
    top: 40,
    zIndex: 2,
  },
  roleBlock: {
    alignItems: "flex-end",
    bottom: 120,
    maxWidth: 380,
    position: "absolute",
    right: 24,
    zIndex: 2,
  },
  resumeBlock: {
    bottom: 44,
    left: 24,
    position: "absolute",
    zIndex: 2,
  },
  eyebrow: {
    color: colors.blue,
    fontFamily: fonts.body,
    fontSize: 20,
    fontWeight: "600",
    marginBottom: spacing.xs,
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
    fontSize: 40,
    lineHeight: 46,
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
  },
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
    width: "100%",
  },
  stackText: {
    alignItems: "center",
    gap: spacing.sm,
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
