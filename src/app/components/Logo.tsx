export function Logo({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="maroonGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#C1164A" />
          <stop offset="100%" stopColor="#8B1538" />
        </linearGradient>
        <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#6ba3e8" />
          <stop offset="100%" stopColor="#4a90e2" />
        </linearGradient>
        <linearGradient id="silverGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F5F5F5" />
          <stop offset="50%" stopColor="#E8E8E8" />
          <stop offset="100%" stopColor="#D3D3D3" />
        </linearGradient>
      </defs>
      
      {/* Outer circle with maroon gradient */}
      <circle
        cx="50"
        cy="50"
        r="45"
        stroke="url(#maroonGradient)"
        strokeWidth="3"
        fill="none"
        opacity="0.9"
      />
      
      {/* Inner decorative circle */}
      <circle
        cx="50"
        cy="50"
        r="38"
        stroke="url(#silverGradient)"
        strokeWidth="1.5"
        fill="none"
        opacity="0.4"
      />
      
      {/* Mathematical symbols */}
      {/* Sigma symbol (summation) */}
      <path
        d="M 28 32 L 42 32 L 32 45 L 42 58 L 28 58 L 28 32 Z"
        stroke="url(#blueGradient)"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="url(#blueGradient)"
        opacity="0.8"
      />
      
      {/* Infinity symbol */}
      <path
        d="M 55 45 Q 60 40 65 45 Q 70 50 75 45 Q 70 40 65 45 Q 60 50 55 45 Z"
        stroke="url(#maroonGradient)"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />
      
      {/* Mathematical accent - angular brackets */}
      <path
        d="M 45 62 L 50 68 L 55 62"
        stroke="url(#silverGradient)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}