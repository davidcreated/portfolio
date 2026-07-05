const SKILL_ICON_SLUGS: Record<string, string> = {
  Codemagic: "codemagic",
  Fastlane: "fastlane",
  Firebase: "firebase",
  Flutter: "flutter",
  Go: "go",
  GraphQL: "graphql",
  "GitHub Actions": "githubactions",
  Kotlin: "kotlin",
  MQTT: "mqtt",
  "Next.js": "nextdotjs",
  "Node.js": "nodedotjs",
  PostgreSQL: "postgresql",
  "React Native": "react",
  SQLite: "sqlite",
  Swift: "swift",
  TypeScript: "typescript",
};

export function getSkillIconUrl(label: string): string | undefined {
  const slug = SKILL_ICON_SLUGS[label];
  return slug ? `https://cdn.simpleicons.org/${slug}` : undefined;
}
