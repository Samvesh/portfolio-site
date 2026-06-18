/**
 * GeometricLogo — abstract mark replacing text initials.
 * Composed of a cream arc, dark half-circle, cross-hair lines, and gold dot.
 */
export function GeometricLogo({ size = 38 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 38 38"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Samvesh Saini"
    >
      {/* Outer circle ring */}
      <circle cx="19" cy="19" r="18" stroke="#1a1a18" strokeWidth="1" fill="none" />

      {/* Cream filled arc — top half */}
      <path
        d="M 1 19 A 18 18 0 0 1 37 19"
        fill="#e8e0d0"
        stroke="none"
      />

      {/* Dark filled half — bottom */}
      <path
        d="M 1 19 A 18 18 0 0 0 37 19"
        fill="#1a1a18"
        stroke="none"
      />

      {/* Outer ring on top */}
      <circle cx="19" cy="19" r="18" stroke="#1a1a18" strokeWidth="0.8" fill="none" />

      {/* Horizontal cross line */}
      <line x1="1" y1="19" x2="37" y2="19" stroke="#1a1a18" strokeWidth="0.7" opacity="0.5" />

      {/* Vertical cross line */}
      <line x1="19" y1="1" x2="19" y2="37" stroke="#1a1a18" strokeWidth="0.7" opacity="0.5" />

      {/* Inner small circle */}
      <circle cx="19" cy="19" r="5.5" fill="none" stroke="#1a1a18" strokeWidth="0.7" opacity="0.4" />

      {/* Gold center dot */}
      <circle cx="19" cy="19" r="2.5" fill="#c9a84c" />
    </svg>
  );
}
