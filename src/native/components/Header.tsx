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
  location: string;
  name: string;
  resumeUrl: string;
};

export function Header({
  avatar,
  description,
  location,
  name,
  resumeUrl,
}: HeaderProps) {
  const { width } = useWindowDimensions();
  const isStacked = width < 1100;
  const firstName = name.split(" ")[0];

  return (
    <View style={[styles.container, isStacked && styles.stackedContainer]}>
      {isStacked ? (
        <Image
          accessibilityIgnoresInvertColors
          alt={`${name} — ${description}`}
          source={avatar}
          style={styles.avatar}
        />
      ) : null}
      <View style={styles.copy}>
        <Text
          accessibilityLabel={`${name}, ${description}`}
          accessibilityRole="header"
          aria-level={1}
          style={[styles.title, isStacked && styles.stackedTitle]}
        >
          Hi, I&apos;m <Text style={styles.accentName}>{firstName}</Text> 👋
        </Text>
        <Text style={styles.description}>
          {description}
          <Text style={styles.location}> {location}</Text>
        </Text>
        <ExternalPressable url={resumeUrl}>
          <View style={styles.resumeButton}>
            <Text style={styles.resumeButtonText}>Download my resume</Text>
          </View>
        </ExternalPressable>
      </View>
      {!isStacked ? (
        <Image
          accessibilityIgnoresInvertColors
          alt={`${name} — ${description}`}
          source={avatar}
          style={styles.avatar}
        />
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
  accentName: {
    color: colors.blue,
  },
  resumeButton: {
    alignSelf: "flex-start",
    backgroundColor: colors.blue,
    borderRadius: 999,
    marginTop: spacing.xs,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.sm,
  },
  resumeButtonText: {
    color: colors.background,
    fontFamily: fonts.body,
    fontSize: 14,
    fontWeight: "700",
  },
  avatar: {
    borderColor: colors.blue,
    borderRadius: 64,
    borderWidth: 2,
    boxShadow: `0 0 40px ${colors.blue}`,
    height: 96,
    width: 96,
  },
});
