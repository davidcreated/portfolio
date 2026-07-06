// Native (non-web) fallback: no WebGL/Spline. The real 3D implementation lives
// in SplineAvatar.web.tsx, which Metro picks for the web bundle.
export function SplineAvatar() {
  return null;
}
