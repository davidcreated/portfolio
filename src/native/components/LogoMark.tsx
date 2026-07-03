import { Image, StyleSheet, Text, View } from "react-native";

import { colors, fonts } from "../styles";
import { ImageSource } from "../types";

type LogoMarkProps = {
  label?: string;
  size?: number;
  source?: ImageSource;
};

export function LogoMark({ label, source, size = 40 }: LogoMarkProps) {
  const outerSize = size + 12;

  return (
    <View style={[styles.outer, { borderRadius: outerSize / 2, height: outerSize, width: outerSize }]}>
      <View style={[styles.inner, { borderRadius: size / 2, height: size, width: size }]}>
        {source ? (
          <Image
            accessibilityIgnoresInvertColors
            resizeMode="contain"
            source={source}
            style={[styles.image, { height: size - 12, width: size - 12 }]}
          />
        ) : (
          <Text style={[styles.initials, { fontSize: Math.max(10, size * 0.34) }]}>
            {label}
          </Text>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  outer: {
    alignItems: "center",
    backgroundColor: colors.card,
    borderColor: colors.ring,
    borderWidth: 3,
    justifyContent: "center",
  },
  inner: {
    alignItems: "center",
    backgroundColor: colors.card,
    borderColor: colors.border,
    borderWidth: 1,
    justifyContent: "center",
    overflow: "hidden",
  },
  image: {
    display: "flex",
  },
  initials: {
    color: colors.foreground,
    fontFamily: fonts.heading,
    fontWeight: "700",
  },
});
