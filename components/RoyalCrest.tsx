"use client";

import React from "react";

interface RoyalCrestProps {
  className?: string;
  size?: number;
}

export default function RoyalCrest({ className = "", size = 95 }: RoyalCrestProps) {
  return (
    <div className={`inline-flex flex-col items-center justify-center ${className}`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]"
      >
        {/* Outer Circular Filigree Beads */}
        <circle
          cx="60"
          cy="60"
          r="54"
          stroke="url(#crestGoldGrad)"
          strokeWidth="1.5"
          strokeDasharray="2 3"
        />
        <circle
          cx="60"
          cy="60"
          r="50"
          stroke="url(#crestGoldGrad)"
          strokeWidth="1"
          opacity="0.8"
        />

        {/* Heraldic Crown at Top */}
        <path
          d="M44 38L50 48L60 35L70 48L76 38L78 52H42L44 38Z"
          fill="url(#crestGoldGrad)"
          stroke="#7a5a18"
          strokeWidth="0.8"
        />
        <circle cx="44" cy="36" r="2.2" fill="#fff3c4" stroke="#7a5a18" strokeWidth="0.5" />
        <circle cx="60" cy="33" r="2.8" fill="#fff3c4" stroke="#7a5a18" strokeWidth="0.5" />
        <circle cx="76" cy="36" r="2.2" fill="#fff3c4" stroke="#7a5a18" strokeWidth="0.5" />
        <rect x="42" y="52" width="36" height="3" fill="#b38f38" rx="1.5" />

        {/* Heraldic Shield */}
        <path
          d="M44 57C44 57 44 76 60 88C76 76 76 57 76 57H44Z"
          fill="url(#crestShieldRed)"
          stroke="url(#crestGoldGrad)"
          strokeWidth="2"
        />

        {/* Cross & Star */}
        <path
          d="M60 62V82M50 70H70"
          stroke="url(#crestGoldGrad)"
          strokeWidth="1"
          strokeLinecap="round"
          opacity="0.75"
        />
        <path
          d="M60 66L61.5 69.5L65 70L62 72.5L63 76L60 74L57 76L58 72.5L55 70L58.5 69.5L60 66Z"
          fill="url(#crestGoldGrad)"
        />

        {/* Laurels / Leaves */}
        <path
          d="M36 52C32 60 32 72 40 82C43 85 46 88 50 91"
          stroke="url(#crestGoldGrad)"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M84 52C88 60 88 72 80 82C77 85 74 88 70 91"
          stroke="url(#crestGoldGrad)"
          strokeWidth="1.5"
          strokeLinecap="round"
        />

        <circle cx="34" cy="56" r="2" fill="url(#crestGoldGrad)" />
        <circle cx="32" cy="65" r="2.2" fill="url(#crestGoldGrad)" />
        <circle cx="35" cy="74" r="2.2" fill="url(#crestGoldGrad)" />
        <circle cx="42" cy="83" r="2" fill="url(#crestGoldGrad)" />

        <circle cx="86" cy="56" r="2" fill="url(#crestGoldGrad)" />
        <circle cx="88" cy="65" r="2.2" fill="url(#crestGoldGrad)" />
        <circle cx="85" cy="74" r="2.2" fill="url(#crestGoldGrad)" />
        <circle cx="78" cy="83" r="2" fill="url(#crestGoldGrad)" />

        {/* Ribbon */}
        <path
          d="M32 94C45 91 55 95 60 95C65 95 75 91 88 94L84 99C73 97 65 100 60 100C55 100 47 97 36 99L32 94Z"
          fill="url(#crestGoldGrad)"
          stroke="#684a0c"
          strokeWidth="0.8"
        />

        <defs>
          <linearGradient id="crestGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fff2be" />
            <stop offset="35%" stopColor="#d4af37" />
            <stop offset="70%" stopColor="#876211" />
            <stop offset="100%" stopColor="#fae298" />
          </linearGradient>
          <linearGradient id="crestShieldRed" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#5c1421" />
            <stop offset="100%" stopColor="#250409" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
