import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { SafeAreaView, ScrollView, StyleSheet, View, ViewStyle } from "react-native";

import { AboutText } from "./src/native/components/AboutText";
import { ContactLinks } from "./src/native/components/ContactLinks";
import { Dock } from "./src/native/components/Dock";
import { EducationList } from "./src/native/components/EducationList";
import { Header } from "./src/native/components/Header";
import { ProjectList } from "./src/native/components/ProjectList";
import { Reveal } from "./src/native/components/Reveal";
import { Section } from "./src/native/components/Section";
import { SkillList } from "./src/native/components/SkillList";
import { TimelineList } from "./src/native/components/TimelineList";
import { DATA } from "./src/native/data";
import { colors, darkTheme, lightTheme, spacing } from "./src/native/styles";

export default function App() {
  const [isDark, setIsDark] = useState(false);
  const theme = isDark ? darkTheme : lightTheme;
  const themeVariables = {
    "--color-background": theme.background,
    "--color-card": theme.card,
    "--color-foreground": theme.foreground,
    "--color-muted": theme.muted,
    "--color-border": theme.border,
    "--color-accent": theme.accent,
    "--color-accent-soft": theme.accentSoft,
    "--color-ring": theme.ring,
    "--color-blue": theme.blue,
  } as ViewStyle;

  return (
    <SafeAreaView style={[styles.safeArea, themeVariables]}>
      <StatusBar style={isDark ? "light" : "dark"} />
      <BackgroundGrid />
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.page}>
          <Reveal>
            <Header
              avatar={DATA.avatar}
              description={DATA.description}
              headline={DATA.headline}
              location={DATA.location}
              resumeUrl={DATA.resumeUrl}
            />
          </Reveal>
          <Reveal delay={120}>
            <Section title="About">
              <AboutText text={DATA.summary} />
            </Section>
          </Reveal>
          <Reveal delay={200}>
            <Section title="Work Experience">
              <TimelineList items={DATA.work} />
            </Section>
          </Reveal>
          <Reveal delay={280}>
            <Section title="Education">
              <EducationList items={DATA.education} />
            </Section>
          </Reveal>
          <Reveal delay={360}>
            <Section title="Skills">
              <SkillList items={DATA.skills} />
            </Section>
          </Reveal>
          <Reveal delay={440}>
            <Section title="Hobbies">
              <SkillList items={DATA.hobbies} />
            </Section>
          </Reveal>
          <Reveal delay={520}>
            <ProjectList items={DATA.projects} />
          </Reveal>
          <Reveal delay={600}>
            <ContactLinks items={DATA.contact} />
          </Reveal>
        </View>
      </ScrollView>
      <Dock
        isDark={isDark}
        items={DATA.navbar}
        onToggleTheme={() => setIsDark((current) => !current)}
      />
    </SafeAreaView>
  );
}

function BackgroundGrid() {
  const cells = Array.from({ length: 220 }, (_, index) => index);

  return (
    <View pointerEvents="none" style={styles.backgroundGrid}>
      {cells.map((cell) => (
        <View key={cell} style={styles.backgroundCell} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: colors.background,
    flex: 1,
  },
  scrollContent: {
    minWidth: "100%",
    paddingBottom: 112,
    paddingTop: 96,
    width: "100%",
  },
  page: {
    alignSelf: "center",
    gap: spacing.xxl,
    marginHorizontal: "auto",
    maxWidth: 720,
    paddingHorizontal: 24,
    width: "100%",
  },
  backgroundGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    height: 100,
    left: 0,
    opacity: 0.22,
    overflow: "hidden",
    position: "absolute",
    right: 0,
    top: 0,
    zIndex: 0,
  },
  backgroundCell: {
    borderColor: colors.border,
    borderWidth: 0.5,
    height: 12,
    width: 12,
  },
});
