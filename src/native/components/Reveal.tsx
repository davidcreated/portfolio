import { PropsWithChildren } from "react";
import { StyleSheet, View, ViewStyle } from "react-native";

type RevealProps = PropsWithChildren<{
  delay?: number;
}>;

/**
 * Entrance fade/rise animation driven purely by CSS (via react-native-web's
 * animationKeyframes), so the content is visible without waiting for the JS
 * bundle to download and hydrate. The resting state is fully visible; the
 * animation just plays once on load.
 */
export function Reveal({ children, delay = 0 }: RevealProps) {
  return (
    <View
      style={[
        styles.reveal,
        {
          animationKeyframes: {
            "0%": { opacity: 0, transform: [{ translateY: 8 }] },
            "100%": { opacity: 1, transform: [{ translateY: 0 }] },
          },
          animationDuration: "420ms",
          animationDelay: `${delay}ms`,
          animationTimingFunction: "ease-out",
          animationFillMode: "both",
        } as unknown as ViewStyle,
      ]}
    >
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  reveal: {
    width: "100%",
  },
});
