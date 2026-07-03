import {
  Image,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native";

import { colors, fonts, spacing } from "../styles";
import { ImageSource } from "../types";
import { ExternalPressable } from "./ExternalPressable";

type HeaderProps = {
  avatar: ImageSource;
  description: string;
  headline: string;
  location: string;
  resumeUrl: string;
};

export function Header({
  avatar,
  description,
  headline,
  location,
  resumeUrl,
}: HeaderProps) {
  const { width } = useWindowDimensions();
  const isStacked = width < 1100;

  return (
    <View style={[styles.container, isStacked && styles.stackedContainer]}>
      {isStacked ? (
        <Image accessibilityIgnoresInvertColors source={avatar} style={styles.avatar} />
      ) : null}
      <View style={styles.copy}>
        <Text style={[styles.title, isStacked && styles.stackedTitle]}>
          {headline}
        </Text>
        <Text style={styles.description}>
          {description}
          <Text style={styles.location}> {location}</Text>
        </Text>
        <ExternalPressable url={resumeUrl}>
          <Text style={styles.resume}>Download my resume</Text>
        </ExternalPressable>
      </View>
      {!isStacked ? (
        <Image accessibilityIgnoresInvertColors source={avatar} style={styles.avatar} />
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "flex-start",
    flexDirection: "row",
    gap: spacing.md,
    justifyContent: "space-between",
  },
  stackedContainer: {
    flexDirection: "column",
    gap: spacing.xl,
  },
  copy: {
    flex: 1,
    gap: spacing.sm,
  },
  title: {
    color: colors.foreground,
    fontFamily: fonts.heading,
    fontSize: 48,
    fontWeight: "700",
    letterSpacing: -1,
    lineHeight: 54,
  },
  stackedTitle: {
    fontSize: 40,
    lineHeight: 46,
  },
  description: {
    color: colors.muted,
    fontFamily: fonts.body,
    fontSize: 16,
    lineHeight: 25,
    maxWidth: 600,
  },
  location: {
    color: colors.foreground,
    fontFamily: fonts.body,
    fontSize: 16,
  },
  resume: {
    alignSelf: "flex-start",
    color: colors.foreground,
    fontFamily: fonts.body,
    fontSize: 14,
    fontWeight: "600",
    textDecorationColor: colors.foreground,
    textDecorationLine: "underline",
  },
  avatar: {
    borderColor: colors.border,
    borderRadius: 64,
    borderWidth: 1,
    boxShadow: "0 16px 30px rgba(10, 10, 10, 0.12)",
    height: 96,
    width: 96,
  },
});
