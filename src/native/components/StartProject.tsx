import { useRef, useState } from "react";
import {
  Animated,
  Linking,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

import { colors, fonts, radii, spacing } from "../styles";

const EMAIL = "timifroberts@gmail.com";

type StartProjectProps = {
  email?: string;
};

export function StartProject({ email = EMAIL }: StartProjectProps) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [titleFocused, setTitleFocused] = useState(false);
  const [descFocused, setDescFocused] = useState(false);
  const [hovered, setHovered] = useState(false);

  const press = useRef(new Animated.Value(0)).current;
  const canSubmit = title.trim().length > 0;

  const animatePress = (toValue: number) => {
    Animated.spring(press, {
      damping: 16,
      mass: 0.6,
      stiffness: 280,
      toValue,
      useNativeDriver: true,
    }).start();
  };

  const handleSubmit = () => {
    if (!canSubmit) {
      return;
    }

    const subject = `New project inquiry: ${title.trim()}`;
    const body = description.trim()
      ? `${description.trim()}\n\nSent from your portfolio`
      : "Sent from your portfolio";
    const url = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    void Linking.openURL(url);
  };

  const scale = press.interpolate({ inputRange: [0, 1], outputRange: [1, 0.97] });

  return (
    <View style={styles.card}>
      <Text style={styles.lead}>
        Have something in mind? Tell me about it and it lands straight in my inbox.
      </Text>

      <View style={styles.field}>
        <Text style={styles.label}>Project title</Text>
        <TextInput
          onBlur={() => setTitleFocused(false)}
          onChangeText={setTitle}
          onFocus={() => setTitleFocused(true)}
          placeholder="e.g. Offline-first delivery app"
          placeholderTextColor={colors.muted}
          style={[styles.input, titleFocused && styles.inputFocused]}
          value={title}
        />
      </View>

      <View style={styles.field}>
        <Text style={styles.label}>Describe it</Text>
        <TextInput
          multiline
          numberOfLines={5}
          onBlur={() => setDescFocused(false)}
          onChangeText={setDescription}
          onFocus={() => setDescFocused(true)}
          placeholder="What are you building, who is it for, and what do you need?"
          placeholderTextColor={colors.muted}
          style={[styles.input, styles.textArea, descFocused && styles.inputFocused]}
          value={description}
        />
      </View>

      <Animated.View style={{ transform: [{ scale }], alignSelf: "flex-start" }}>
        <Pressable
          accessibilityRole="button"
          disabled={!canSubmit}
          onHoverIn={() => setHovered(true)}
          onHoverOut={() => setHovered(false)}
          onPress={handleSubmit}
          onPressIn={() => animatePress(1)}
          onPressOut={() => animatePress(0)}
          style={[
            styles.submit,
            !canSubmit && styles.submitDisabled,
            hovered && canSubmit && styles.submitHovered,
          ]}
        >
          <Text style={[styles.submitText, !canSubmit && styles.submitTextDisabled]}>
            Send project brief →
          </Text>
        </Pressable>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.card,
    borderColor: colors.border,
    borderRadius: radii.lg,
    borderWidth: 1,
    gap: spacing.md,
    padding: spacing.xl,
  },
  lead: {
    color: colors.muted,
    fontFamily: fonts.body,
    fontSize: 15,
    lineHeight: 23,
  },
  field: {
    gap: spacing.xs,
  },
  label: {
    color: colors.foreground,
    fontFamily: fonts.body,
    fontSize: 13,
    fontWeight: "600",
  },
  input: {
    backgroundColor: colors.accentSoft,
    borderColor: colors.border,
    borderRadius: radii.md,
    borderWidth: 1,
    color: colors.foreground,
    fontFamily: fonts.body,
    fontSize: 15,
    outlineStyle: "none",
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
  } as object,
  inputFocused: {
    borderColor: colors.blue,
  },
  textArea: {
    minHeight: 120,
    textAlignVertical: "top",
  },
  submit: {
    backgroundColor: colors.blue,
    borderRadius: 999,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.sm,
  },
  submitHovered: {
    boxShadow: `0 0 24px ${colors.blue}`,
  },
  submitDisabled: {
    backgroundColor: colors.accentSoft,
    borderColor: colors.border,
    borderWidth: 1,
  },
  submitText: {
    color: colors.background,
    fontFamily: fonts.body,
    fontSize: 14,
    fontWeight: "700",
  },
  submitTextDisabled: {
    color: colors.muted,
  },
});
