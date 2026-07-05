import { Feather } from "@expo/vector-icons";
import { useEffect, useRef } from "react";
import {
  Animated,
  Easing,
  Image,
  Modal,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from "react-native";

import { colors, darkTheme, fonts, getThemeVariables, radii, spacing } from "../styles";
import { ProjectItem } from "../types";
import { ExternalPressable } from "./ExternalPressable";
import { SkillList } from "./SkillList";

type ProjectDetailModalProps = {
  item: ProjectItem | null;
  onClose: () => void;
};

export function ProjectDetailModal({ item, onClose }: ProjectDetailModalProps) {
  const progress = useRef(new Animated.Value(0)).current;
  const themeVariables = getThemeVariables(darkTheme) as ViewStyle;

  useEffect(() => {
    Animated.timing(progress, {
      duration: 200,
      easing: Easing.out(Easing.cubic),
      toValue: item ? 1 : 0,
      useNativeDriver: true,
    }).start();
  }, [item, progress]);

  if (!item) {
    return null;
  }

  const isFirstParty = item.kind === "first-party";
  const scale = progress.interpolate({ inputRange: [0, 1], outputRange: [0.94, 1] });

  return (
    <Modal animationType="fade" onRequestClose={onClose} transparent visible>
      <View style={[styles.root, themeVariables]}>
        <Pressable
          accessibilityLabel="Close project details"
          onPress={onClose}
          style={styles.backdrop}
        />
        <Animated.View
          style={[styles.card, { opacity: progress, transform: [{ scale }] }]}
        >
          <Pressable
            accessibilityLabel="Close"
            accessibilityRole="button"
            onPress={onClose}
            style={styles.closeButton}
          >
            <Feather color={colors.muted} name="x" size={20} />
          </Pressable>
          <ScrollView contentContainerStyle={styles.scrollContent}>
            {item.media ? (
              <Image
                accessibilityIgnoresInvertColors
                resizeMode="cover"
                source={{ uri: item.media }}
                style={styles.media}
              />
            ) : null}
            <View style={styles.body}>
              <View style={styles.headerRow}>
                <Text style={styles.title}>{item.title}</Text>
                <View style={styles.kindPill}>
                  <Text style={styles.kindPillText}>
                    {isFirstParty ? "Built by David-Paul" : "Contribution"}
                  </Text>
                </View>
              </View>
              {item.role ? <Text style={styles.role}>{item.role}</Text> : null}
              <Text style={styles.description}>{item.description}</Text>

              {isFirstParty && item.architecture ? (
                <View style={styles.section}>
                  <Text style={styles.sectionTitle}>Architecture</Text>
                  <Text style={styles.sectionText}>{item.architecture}</Text>
                </View>
              ) : null}

              {isFirstParty && item.highlights && item.highlights.length > 0 ? (
                <View style={styles.section}>
                  <Text style={styles.sectionTitle}>Highlights</Text>
                  <View style={styles.bulletList}>
                    {item.highlights.map((highlight) => (
                      <View key={highlight} style={styles.bulletRow}>
                        <View style={styles.bulletDot} />
                        <Text style={styles.bulletText}>{highlight}</Text>
                      </View>
                    ))}
                  </View>
                </View>
              ) : null}

              {isFirstParty && item.techStack && item.techStack.length > 0 ? (
                <View style={styles.section}>
                  <Text style={styles.sectionTitle}>Tech Stack</Text>
                  <SkillList items={item.techStack} />
                </View>
              ) : null}

              <View style={styles.footer}>
                <View style={styles.links}>
                  {item.links.map((link) => (
                    <ExternalPressable key={`${item.title}-${link.label}`} url={link.url}>
                      <Text style={styles.link}>{link.label}</Text>
                    </ExternalPressable>
                  ))}
                </View>
                {item.href ? (
                  <ExternalPressable url={item.href}>
                    <View style={styles.primaryButton}>
                      <Text style={styles.primaryButtonText}>View live</Text>
                    </View>
                  </ExternalPressable>
                ) : null}
              </View>
            </View>
          </ScrollView>
        </Animated.View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  root: {
    alignItems: "center",
    backgroundColor: colors.background,
    flex: 1,
    justifyContent: "center",
    padding: spacing.lg,
  } as ViewStyle,
  backdrop: {
    ...StyleSheet.absoluteFill,
    backgroundColor: "rgba(0, 0, 0, 0.7)",
  },
  card: {
    backgroundColor: colors.card,
    borderColor: colors.border,
    borderRadius: radii.lg,
    borderWidth: 1,
    boxShadow: "0 24px 60px rgba(0, 0, 0, 0.5)",
    maxHeight: "85%",
    maxWidth: 560,
    overflow: "hidden",
    width: "100%",
  } as ViewStyle,
  closeButton: {
    alignItems: "center",
    backgroundColor: colors.card,
    borderColor: colors.border,
    borderRadius: 999,
    borderWidth: 1,
    height: 36,
    justifyContent: "center",
    position: "absolute",
    right: spacing.sm,
    top: spacing.sm,
    width: 36,
    zIndex: 2,
  },
  scrollContent: {
    flexGrow: 1,
  },
  media: {
    height: 200,
    width: "100%",
  },
  body: {
    gap: spacing.md,
    padding: spacing.lg,
  },
  headerRow: {
    alignItems: "flex-start",
    flexDirection: "row",
    gap: spacing.sm,
    justifyContent: "space-between",
  },
  title: {
    color: colors.foreground,
    flex: 1,
    fontFamily: fonts.heading,
    fontSize: 24,
    fontWeight: "700",
  },
  kindPill: {
    backgroundColor: colors.accentSoft,
    borderColor: colors.blue,
    borderRadius: radii.sm,
    borderWidth: 1,
    paddingHorizontal: spacing.sm,
    paddingVertical: 4,
  },
  kindPillText: {
    color: colors.blue,
    fontFamily: fonts.body,
    fontSize: 11,
    fontWeight: "700",
  },
  role: {
    color: colors.muted,
    fontFamily: fonts.body,
    fontSize: 14,
  },
  description: {
    color: colors.foreground,
    fontFamily: fonts.body,
    fontSize: 14,
    lineHeight: 22,
  },
  section: {
    gap: spacing.sm,
  },
  sectionTitle: {
    color: colors.blue,
    fontFamily: fonts.body,
    fontSize: 12,
    fontWeight: "700",
    letterSpacing: 0.5,
    textTransform: "uppercase",
  },
  sectionText: {
    color: colors.muted,
    fontFamily: fonts.body,
    fontSize: 14,
    lineHeight: 22,
  },
  bulletList: {
    gap: spacing.xs,
  },
  bulletRow: {
    alignItems: "flex-start",
    flexDirection: "row",
    gap: spacing.sm,
  },
  bulletDot: {
    backgroundColor: colors.blue,
    borderRadius: 3,
    height: 6,
    marginTop: 7,
    width: 6,
  },
  bulletText: {
    color: colors.muted,
    flex: 1,
    fontFamily: fonts.body,
    fontSize: 14,
    lineHeight: 21,
  },
  footer: {
    gap: spacing.md,
    marginTop: spacing.sm,
  },
  links: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: spacing.sm,
  },
  link: {
    backgroundColor: colors.accentSoft,
    borderColor: colors.blue,
    borderRadius: radii.sm,
    borderWidth: 1,
    color: colors.blue,
    fontFamily: fonts.body,
    fontSize: 12,
    fontWeight: "600",
    overflow: "hidden",
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xs,
  },
  primaryButton: {
    alignSelf: "flex-start",
    backgroundColor: colors.blue,
    borderRadius: 999,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.sm,
  },
  primaryButtonText: {
    color: colors.background,
    fontFamily: fonts.body,
    fontSize: 14,
    fontWeight: "700",
  },
});
