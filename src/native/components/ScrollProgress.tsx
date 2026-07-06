// Native (non-web) no-op. The scroll-progress rail is web-only and lives in
// ScrollProgress.web.tsx.
type ScrollProgressProps = {
  items: { id: string; label: string }[];
  progress: number;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function ScrollProgress(_props: ScrollProgressProps) {
  return null;
}
