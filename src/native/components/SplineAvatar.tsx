// Native (non-web) fallback: no WebGL/Spline, just the code-built avatar.
// The real 3D implementation lives in SplineAvatar.web.tsx, which Metro picks
// for the web bundle.
export { CursorAvatar as SplineAvatar } from "./CursorAvatar";
