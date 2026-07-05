import { PropsWithChildren, useState } from "react";
import { GestureResponderEvent, Linking, Pressable, StyleSheet } from "react-native";

import { radii } from "../styles";

type ExternalPressableProps = PropsWithChildren<{
  url?: string;
}>;

export function ExternalPressable({ children, url }: ExternalPressableProps) {
  const [hovered, setHovered] = useState(false);

  const openUrl = (event: GestureResponderEvent) => {
    event.stopPropagation();

    if (!url) {
      return;
    }

    void Linking.openURL(url);
  };

  return (
    <Pressable
      accessibilityRole={url ? "link" : undefined}
      disabled={!url}
      onHoverIn={() => setHovered(true)}
      onHoverOut={() => setHovered(false)}
      onPress={openUrl}
      style={({ pressed }) => [
        styles.pressable,
        hovered && styles.hovered,
        pressed && styles.pressed,
      ]}
    >
      {children}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  pressable: {
    borderRadius: radii.md,
  },
  pressed: {
    opacity: 0.72,
  },
  hovered: {
    transform: [{ translateY: -1 }],
  },
});
