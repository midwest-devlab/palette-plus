import * as React from "react";

/** Gradient plus made of 5 rounded squares */
export function Logo(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 128 128" width={32} height={32} {...props}>
      <defs>
        <linearGradient id="g" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#08B6F9" />
          <stop offset="50%" stopColor="#276EF1" />
          <stop offset="100%" stopColor="#6B4DFA" />
        </linearGradient>
        <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="3" dy="6" stdDeviation="4" floodOpacity="0.35" />
        </filter>
      </defs>
      {/** positions for the plus: top, left, center, right, bottom */}
      {[
        { x: 48,  y: 8  },  // top
        { x: 8,   y: 48 },  // left
        { x: 48,  y: 48 },  // center
        { x: 88,  y: 48 },  // right
        { x: 48,  y: 88 }   // bottom
      ].map((p, i) => (
        <rect
          key={i}
          x={p.x}
          y={p.y}
          width={32}
          height={32}
          rx={8}
          fill="url(#g)"
          stroke="black"
          strokeWidth="2"
          filter="url(#shadow)"
        />
      ))}
    </svg>
  );
}
