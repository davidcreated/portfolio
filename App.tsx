import Head from "expo-router/head";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { SafeAreaView, ScrollView, StyleSheet, View, ViewStyle } from "react-native";

import { AboutText } from "./src/native/components/AboutText";
import { ContactLinks } from "./src/native/components/ContactLinks";
import { CursorDot } from "./src/native/components/CursorDot";
import { Dock } from "./src/native/components/Dock";
import { EducationList } from "./src/native/components/EducationList";
import { Header } from "./src/native/components/Header";
import { ProjectDetailModal } from "./src/native/components/ProjectDetailModal";
import { ProjectList } from "./src/native/components/ProjectList";
import { Reveal } from "./src/native/components/Reveal";
import { Section } from "./src/native/components/Section";
import { SkillList } from "./src/native/components/SkillList";
import { StartProject } from "./src/native/components/StartProject";
import { TimelineList } from "./src/native/components/TimelineList";
import { TopNav } from "./src/native/components/TopNav";
import { DATA } from "./src/native/data";
import { colors, darkTheme, getThemeVariables, spacing } from "./src/native/styles";
import { ProjectItem } from "./src/native/types";

const NAV_ITEMS = [
  { id: "about", label: "About" },
  { id: "work-experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "start-a-project", label: "Start a Project" },
  { id: "contact", label: "Contact" },
];

export default function App() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const themeVariables = getThemeVariables(darkTheme) as ViewStyle;

  return (
    <SafeAreaView style={[styles.safeArea, themeVariables]}>
      <Head>
        <title>David-Paul Folorunsho-Roberts · Software Engineer</title>
        <meta
          name="description"
          content="Software Engineer · Mobile & Backend. 6+ years shipping production apps across fintech, health tech, e-commerce, and energy/IoT."
        />
        <meta property="og:title" content="David-Paul Folorunsho-Roberts · Software Engineer" />
        <meta
          property="og:description"
          content="Software Engineer · Mobile & Backend. 6+ years shipping production apps across fintech, health tech, e-commerce, and energy/IoT."
        />
      </Head>
      <StatusBar style="light" />
      <GlowBackground />
      <BackgroundGrid />
      <TopNav items={NAV_ITEMS} />
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.page}>
          <Reveal>
            <Header
              avatar={DATA.avatar}
              description={DATA.description}
              location={DATA.location}
              name={DATA.name}
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
            <ProjectList items={DATA.projects} onSelectProject={setSelectedProject} />
          </Reveal>
          <Reveal delay={520}>
            <Section title="Start a Project">
              <StartProject />
            </Section>
          </Reveal>
          <Reveal delay={600}>
            <ContactLinks items={DATA.contact} />
          </Reveal>
        </View>
      </ScrollView>
      <Dock items={DATA.navbar} />
      <CursorDot />
      <ProjectDetailModal item={selectedProject} onClose={() => setSelectedProject(null)} />
    </SafeAreaView>
  );
}

function GlowBackground() {
  return (
    <View pointerEvents="none" style={styles.glowWrapper}>
      <View style={[styles.glowBlob, styles.glowBlobPrimary]} />
      <View style={[styles.glowBlob, styles.glowBlobSecondary]} />
    </View>
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
  glowWrapper: {
    height: 900,
    left: 0,
    overflow: "hidden",
    position: "absolute",
    right: 0,
    top: 0,
    zIndex: 0,
  },
  glowBlob: {
    borderRadius: 999,
    filter: "blur(140px)",
    position: "absolute",
  } as ViewStyle,
  glowBlobPrimary: {
    backgroundColor: colors.blue,
    height: 560,
    opacity: 0.35,
    right: -160,
    top: -220,
    width: 560,
  },
  glowBlobSecondary: {
    backgroundColor: colors.blue,
    height: 420,
    left: -200,
    opacity: 0.16,
    top: 120,
    width: 420,
  },
});
