import { StyleSheet, Text, View } from "react-native";

import { colors, fonts } from "../styles";

type AboutTextProps = {
  text: string;
};

export function AboutText({ text }: AboutTextProps) {
  const paragraphs = text.split("\n\n");

  return (
    <View style={styles.stack}>
      {paragraphs.map((paragraph) => (
        <Text key={paragraph} style={styles.text}>
          {paragraph}
        </Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  stack: {
    gap: 10,
  },
  text: {
    color: colors.muted,
    fontFamily: fonts.body,
    fontSize: 16,
    lineHeight: 27,
  },
});
