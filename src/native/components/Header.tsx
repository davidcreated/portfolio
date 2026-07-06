import { useState } from "react";
import {
  Image,
  Linking,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
  ViewStyle,
} from "react-native";

import { colors, fonts, spacing } from "../styles";
import { ImageSource } from "../types";
import { SplineAvatar } from "./SplineAvatar";

type HeaderProps = {
  avatar: ImageSource;
  description: string;
  location: string;
  name: string;
  resumeUrl: string;
};

function scrollToId(id: string) {
  if (Platform.OS === "web") {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

export function Header({ avatar, description, location, name, resumeUrl }: HeaderProps) {
  const { width } = useWindowDimensions();
  const isWide = width >= 900;

  return (
    <View style={styles.hero}>
      <View style={[styles.inner, !isWide && styles.innerStack]}>
        <View style={[styles.copy, !isWide && styles.copyStack]}>
          <View style={[styles.identity, !isWide && styles.identityCenter]}>
            <Image
              accessibilityIgnoresInvertColors
              alt={`${name} — ${description}`}
              source={avatar}
              style={styles.avatar}
            />
            <View>
              <Text style={styles.name}>{name}</Text>
              <Text style={styles.roleLine}>
                {description} · {location}
              </Text>
            </View>
          </View>

          <Text
            accessibilityRole="header"
            aria-level={1}
            style={[styles.headline, !isWide && styles.headlineSm]}
          >
            Crafting Fluid{"\n"}Mobile Experiences
          </Text>

          <Text style={[styles.sub, !isWide && styles.subCenter]}>
            I design and build production mobile apps — from offline-first fintech and
            telehealth to real-time energy platforms — where the engineering disappears and
            the experience simply feels effortless.
          </Text>

          <View style={[styles.ctaRow, !isWide && styles.ctaRowCenter]}>
            <Pressable onPress={() => scrollToId("work")} style={styles.ctaPrimary}>
              <Text style={styles.ctaPrimaryText}>Explore the work</Text>
              <Text style={styles.ctaPrimaryArrow}> →</Text>
            </Pressable>
            <Pressable
              onPress={() => resumeUrl && void Linking.openURL(resumeUrl)}
              style={styles.ctaGhost}
            >
              <Text style={styles.ctaGhostText}>Résumé</Text>
            </Pressable>
          </View>
        </View>

        <View style={[styles.robot, !isWide && styles.robotStack]}>
          <SplineAvatar />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  hero: {
    alignItems: "center",
    paddingHorizontal: 40,
    paddingTop: 120,
    width: "100%",
  },
  inner: {
    alignItems: "center",
    flexDirection: "row",
    gap: spacing.xl,
    maxWidth: 1240,
    width: "100%",
  },
  innerStack: {
    alignItems: "center",
    flexDirection: "column-reverse",
    gap: spacing.xl,
  },
  copy: {
    alignItems: "flex-start",
    flex: 1,
    gap: spacing.lg,
  },
  copyStack: {
    alignItems: "center",
  },
  identity: {
    alignItems: "center",
    flexDirection: "row",
    gap: spacing.md,
  },
  identityCenter: {
    justifyContent: "center",
  },
  avatar: {
    borderColor: colors.border,
    borderRadius: 999,
    borderWidth: 1,
    height: 52,
    width: 52,
  },
  name: {
    color: colors.foreground,
    fontFamily: fonts.body,
    fontSize: 15,
    fontWeight: "600",
    letterSpacing: 0.2,
  },
  roleLine: {
    color: colors.muted,
    fontFamily: fonts.body,
    fontSize: 13,
    marginTop: 2,
  },
  headline: {
    color: colors.foreground,
    fontFamily: fonts.heading,
    fontSize: 76,
    fontWeight: "600",
    letterSpacing: -1,
    lineHeight: 76,
    maxWidth: 620,
  },
  headlineSm: {
    fontSize: 46,
    lineHeight: 48,
    textAlign: "center",
  },
  sub: {
    color: colors.muted,
    fontFamily: fonts.body,
    fontSize: 18,
    lineHeight: 29,
    maxWidth: 540,
  },
  subCenter: {
    textAlign: "center",
  },
  ctaRow: {
    alignItems: "center",
    flexDirection: "row",
    gap: spacing.lg,
    marginTop: spacing.sm,
  },
  ctaRowCenter: {
    justifyContent: "center",
  },
  ctaPrimary: {
    alignItems: "center",
    borderColor: colors.blue,
    borderRadius: 999,
    borderWidth: 1,
    flexDirection: "row",
    paddingHorizontal: spacing.lg,
    paddingVertical: 12,
    transitionDuration: "260ms",
    transitionProperty: "background-color, color",
    transitionTimingFunction: "ease",
  } as unknown as ViewStyle,
  ctaPrimaryText: {
    color: colors.blue,
    fontFamily: fonts.body,
    fontSize: 14,
    fontWeight: "600",
    letterSpacing: 0.4,
  },
  ctaPrimaryArrow: {
    color: colors.blue,
    fontFamily: fonts.body,
    fontSize: 14,
    fontWeight: "600",
  },
  ctaGhost: {
    paddingVertical: 12,
  },
  ctaGhostText: {
    color: colors.muted,
    fontFamily: fonts.body,
    fontSize: 14,
    fontWeight: "500",
    letterSpacing: 0.4,
    textDecorationLine: "underline",
    textDecorationColor: colors.border,
  },
  robot: {
    height: 540,
    width: 460,
  },
  robotStack: {
    height: 340,
    width: "100%",
  } as ViewStyle,
});
