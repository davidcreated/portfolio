const SKILL_ICON_SLUGS: Record<string, string> = {
  Codemagic: "codemagic",
  Docker: "docker",
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
  React: "react",
  "React Native": "react",
  Redis: "redis",
  Rust: "rust",
  SQLite: "sqlite",
  Swift: "swift",
  TypeScript: "typescript",
};

export function getSkillIconUrl(label: string): string | undefined {
  const slug = SKILL_ICON_SLUGS[label];
  return slug ? `https://cdn.simpleicons.org/${slug}` : undefined;
}
