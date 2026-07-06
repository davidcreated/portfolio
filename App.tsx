import Head from "expo-router/head";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import {
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
  ViewStyle,
} from "react-native";

import { AboutText } from "./src/native/components/AboutText";
import { AppShowcase } from "./src/native/components/AppShowcase";
import { ContactLinks } from "./src/native/components/ContactLinks";
import { CursorDot } from "./src/native/components/CursorDot";
import { Dock } from "./src/native/components/Dock";
import { EducationList } from "./src/native/components/EducationList";
import { Header } from "./src/native/components/Header";
import { ProjectDetailModal } from "./src/native/components/ProjectDetailModal";
import { ProjectList } from "./src/native/components/ProjectList";
import { Reveal } from "./src/native/components/Reveal";
import { ScrollProgress } from "./src/native/components/ScrollProgress";
import { Section } from "./src/native/components/Section";
import { SkillList } from "./src/native/components/SkillList";
import { SplineAvatar } from "./src/native/components/SplineAvatar";
import { StartProject } from "./src/native/components/StartProject";
import { TimelineList } from "./src/native/components/TimelineList";
import { TopNav } from "./src/native/components/TopNav";
import { Writing } from "./src/native/components/Writing";
import { DATA } from "./src/native/data";
import { SEO, SITE_URL } from "./src/native/seo";
import { colors, darkTheme, getThemeVariables, lightTheme, spacing } from "./src/native/styles";
import { ProjectItem } from "./src/native/types";

const NAV_ITEMS = [
  { id: "about", label: "About" },
  { id: "work-experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "app-showcase", label: "Apps" },
  { id: "projects", label: "Projects" },
  { id: "contribution", label: "Contribution" },
  { id: "start-a-project", label: "Start a Project" },
  { id: "contact", label: "Contact" },
];

export default function App() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [isDark, setIsDark] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);
  const theme = isDark ? darkTheme : lightTheme;
  const themeVariables = getThemeVariables(theme) as ViewStyle;

  // Keep the document background in sync with the theme so overscroll/edges
  // match instead of flashing the static dark default.
  useEffect(() => {
    if (Platform.OS === "web") {
      document.documentElement.style.backgroundColor = theme.background;
      document.body.style.backgroundColor = theme.background;
    }
  }, [theme.background]);

  return (
    <SafeAreaView style={[styles.safeArea, themeVariables]}>
      <Head>
        <title>{SEO.title}</title>
        <meta name="description" content={SEO.description} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={SEO.name} />
        <meta property="og:url" content={SITE_URL} />
        <meta property="og:title" content={SEO.title} />
        <meta property="og:description" content={SEO.description} />
        <meta property="og:image" content={SEO.image} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content={SEO.imageAlt} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={SEO.title} />
        <meta name="twitter:description" content={SEO.description} />
        <meta name="twitter:image" content={SEO.image} />
      </Head>
      <StatusBar style={isDark ? "light" : "dark"} />
      <GlowBackground />
      <BackgroundGrid />
      <View pointerEvents="box-none" style={styles.botLayer}>
        <View style={styles.botBox}>
          <SplineAvatar />
        </View>
      </View>
      <View
        pointerEvents="none"
        style={[
          styles.botScrim,
          { backgroundColor: isDark ? "rgba(11,9,16,0.56)" : "rgba(248,246,252,0.66)" },
        ]}
      />
      <TopNav items={NAV_ITEMS} />
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}
        onScroll={(e) => {
          const { contentOffset, contentSize, layoutMeasurement } = e.nativeEvent;
          const max = contentSize.height - layoutMeasurement.height;
          setScrollProgress(max > 0 ? contentOffset.y / max : 0);
        }}
        scrollEventThrottle={16}
      >
        <Reveal>
          <Header
            description={DATA.description}
            location={DATA.location}
            name={DATA.name}
            resumeUrl={DATA.resumeUrl}
          />
        </Reveal>
        <View style={styles.page}>
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
          <Reveal delay={400}>
            <Section title="App Showcase">
              <AppShowcase items={DATA.showcase} />
            </Section>
          </Reveal>
          <Reveal delay={440}>
            <ProjectList items={DATA.projects} onSelectProject={setSelectedProject} />
          </Reveal>
          <Reveal delay={480}>
            <Section title="Contribution">
              <Writing items={DATA.writing} mediumUrl={DATA.mediumUrl} />
            </Section>
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
      <Dock
        isDark={isDark}
        items={DATA.navbar}
        onToggleTheme={() => setIsDark((prev) => !prev)}
      />
      <CursorDot />
      <ScrollProgress items={NAV_ITEMS} progress={scrollProgress} />
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
  scroll: {
    zIndex: 1,
  } as ViewStyle,
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
    maxWidth: 1000,
    paddingHorizontal: 32,
    width: "100%",
  },
  botLayer: {
    alignItems: "center",
    bottom: 0,
    justifyContent: "center",
    left: 0,
    position: "fixed",
    right: 0,
    top: 0,
    zIndex: 0,
  } as unknown as ViewStyle,
  botBox: {
    height: "100%",
    width: "100%",
  } as ViewStyle,
  botScrim: {
    bottom: 0,
    left: 0,
    position: "fixed",
    right: 0,
    top: 0,
    zIndex: 0,
  } as unknown as ViewStyle,
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
