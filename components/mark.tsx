export function PumpMark({ className = "h-9 w-9" }: { className?: string }) {
  return (
    <svg viewBox="0 0 36 36" className={className} aria-hidden="true">
      <ellipse cx="13.5" cy="27.5" rx="8" ry="3" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <path d="M5.5 27.5V16.2c0-1.7 16-1.7 16 0v11.3" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <ellipse cx="13.5" cy="16.2" rx="8" ry="3" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M21.5 18.2H29l2.2-4.4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M29.6 10.2v3.4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export function Stitch({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 160 8" className={`h-2 w-24 text-cognac ${className}`} aria-hidden="true">
      <path
        d="M1 4H159"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeDasharray="7 5"
        strokeLinecap="square"
      />
    </svg>
  );
}
