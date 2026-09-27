export function ChairCutaway() {
  return (
    <figure className="bg-oxblood text-cream">
      <div className="border border-dashed border-leather/80 p-3 sm:p-5">
        <svg viewBox="0 0 560 680" className="h-auto w-full" aria-hidden="true">
          <g fill="none" stroke="#f8f1e6" strokeLinecap="round" strokeLinejoin="round">
            <path
              d="M168 36c-46 10-62 58-54 118 6 52 28 96 52 118 8 6 20 8 32 4 36-10 62-62 66-118 4-62-22-112-64-122-10-2-22-2-32 0z"
              fill="#9a4630"
              strokeWidth="2"
            />
            <path
              d="M176 78c-22 16-28 52-22 88 4 28 18 50 32 58 16-8 28-32 32-62 4-36-10-68-28-82-4-2-10-2-14-2z"
              fill="#e7c8a8"
              strokeWidth="1.3"
            />
            <path d="M168 112c22 6 40 4 52-8" stroke="#9a4630" strokeWidth="1.2" />
            <path d="M164 136c24 8 44 6 56-8" stroke="#9a4630" strokeWidth="1.2" />
            <path d="M166 160c20 6 36 4 46-8" stroke="#9a4630" strokeWidth="1.2" />
            <path
              className="stitch-motion"
              d="M156 64c18-18 58-16 78 10 16 22 16 58 6 92"
              stroke="#f3d2b4"
              strokeWidth="1.6"
              strokeDasharray="5 4"
            />

            <path d="M214 188c42-2 86 16 112 42" stroke="#9a4630" strokeWidth="11" />
            <path d="M214 188c42-2 86 16 112 42" strokeWidth="1.7" />

            <path
              d="M118 268c52-28 168-32 236-6 12 4 16 18 8 28-22 10-86 26-168 26-64 0-96-8-108-20-8-10-2-22 32-28z"
              fill="#9a4630"
              strokeWidth="2"
            />
            <path
              d="M140 284c44-16 132-16 186 4 2 8-2 16-12 18-40 8-104 10-156 2-24-4-34-10-36-16-2-6 6-8 18-8z"
              fill="#e7c8a8"
              strokeWidth="1.2"
            />
            <path
              className="stitch-motion"
              d="M136 276c56-18 150-16 204 6"
              stroke="#f3d2b4"
              strokeWidth="1.7"
              strokeDasharray="6 4"
            />
            <path d="M318 300l16 9-18 8 18 10" strokeWidth="1.7" />

            <path d="M168 328h120v14H168z" fill="#ddd4c8" strokeWidth="1.5" />

            <ellipse cx="228" cy="358" rx="36" ry="11" fill="#ddd4c8" strokeWidth="1.7" />
            <path d="M192 358h72v148h-72z" fill="#cfc6ba" strokeWidth="1.7" />
            <path d="M192 358v148M264 358v148" strokeWidth="1.1" opacity="0.4" />
            <ellipse cx="228" cy="506" rx="36" ry="11" fill="#b7aea3" strokeWidth="1.7" />

            <g className="pump-motion">
              <path d="M228 346v86" strokeWidth="6" />
              <ellipse cx="228" cy="434" rx="24" ry="8" fill="#8a8176" strokeWidth="1.4" />
            </g>

            <path d="M200 470h56c2 16-10 26-28 26s-30-10-28-26z" fill="#e0b15a" strokeWidth="1.2" />
            <path d="M206 478c12 5 26 4 38-3" stroke="#a87a32" strokeWidth="1.4" />

            <path d="M196 518c-6 26-24 46-58 58" stroke="#241c18" strokeWidth="10" />
            <path d="M196 518c-6 26-24 46-58 58" strokeWidth="1.6" />
            <path d="M260 518c8 26 32 46 72 56" stroke="#241c18" strokeWidth="10" />
            <path d="M260 518c8 26 32 46 72 56" strokeWidth="1.6" />
            <ellipse cx="228" cy="516" rx="30" ry="10" fill="#241c18" strokeWidth="1.5" />
            <circle cx="136" cy="580" r="10" fill="#ddd4c8" strokeWidth="1.6" />
            <circle cx="334" cy="578" r="10" fill="#ddd4c8" strokeWidth="1.6" />

            <path d="M264 392h48l18 36" strokeWidth="3.4" />
            <circle cx="332" cy="432" r="8" fill="#e0b15a" strokeWidth="1.6" />

            <path d="M292 118h78" strokeWidth="1.15" />
            <path d="M270 470h92" strokeWidth="1.15" />
            <path d="M344 424h36" strokeWidth="1.15" />

            <text x="378" y="124" fill="#f8f1e6" stroke="none" fontFamily="var(--font-fraunces), Georgia, serif" fontSize="26">
              Polster
            </text>
            <text x="370" y="476" fill="#f8f1e6" stroke="none" fontFamily="var(--font-fraunces), Georgia, serif" fontSize="26">
              Pumpe
            </text>
            <text x="388" y="420" fill="#f8f1e6" stroke="none" fontFamily="var(--font-fraunces), Georgia, serif" fontSize="26">
              Mechanik
            </text>
          </g>
        </svg>
      </div>
      <figcaption className="px-1 pt-4 text-sm leading-relaxed text-cream/85">
        Schnitt durch den Friseurstuhl: Polster, Pumpe und Mechanik.
      </figcaption>
    </figure>
  );
}
