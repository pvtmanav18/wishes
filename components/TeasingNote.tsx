"use client";

import React from "react";
import { motion } from "framer-motion";

interface TeasingNoteProps {
  children: React.ReactNode;
  variant?: "margin" | "sticky" | "stamp" | "scribble" | "tape";
  rotation?: number;
  className?: string;
  author?: string;
}

export default function TeasingNote({
  children,
  variant = "margin",
  rotation = -2,
  className = "",
  author,
}: TeasingNoteProps) {
  if (variant === "stamp") {
    return (
      <div
        style={{ transform: `rotate(${rotation}deg)` }}
        className={`inline-block border-2 border-dashed border-[#8c242d] px-3 py-1 text-xs tracking-wider uppercase font-royal font-bold text-[#8c242d] bg-[#f9efe1]/80 shadow-xs mix-blend-multiply ${className}`}
      >
        {children}
      </div>
    );
  }

  if (variant === "sticky") {
    return (
      <motion.div
        whileHover={{ scale: 1.03, rotate: rotation + 1 }}
        style={{ transform: `rotate(${rotation}deg)` }}
        className={`relative inline-block bg-[#f8e6a0] text-[#3a2c14] p-3 rounded-xs shadow-md border-t-4 border-[#e5cd77] font-handwriting text-base leading-tight max-w-xs transition-shadow hover:shadow-lg ${className}`}
      >
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-12 h-5 bg-white/45 backdrop-blur-[1px] border border-white/60 shadow-xs rotate-1" />
        <p className="m-0 text-base">{children}</p>
        {author && (
          <p className="mt-1 text-right text-xs opacity-75 font-sans italic">— {author}</p>
        )}
      </motion.div>
    );
  }

  if (variant === "scribble") {
    return (
      <span
        style={{ transform: `rotate(${rotation}deg)` }}
        className={`inline-block font-handwriting text-[#7a1f28] font-bold text-xl px-1 hover:text-[#521118] transition-colors ${className}`}
      >
        * {children} *
      </span>
    );
  }

  return (
    <div
      style={{ transform: `rotate(${rotation}deg)` }}
      className={`relative inline-flex items-start gap-1.5 font-handwriting text-[#681c24] text-lg lg:text-xl font-semibold leading-tight my-1 ${className}`}
    >
      <span className="text-[#a13b46] select-none text-xl">✎</span>
      <div>
        <span>{children}</span>
        {author && (
          <span className="block text-xs font-book italic text-[#7a5840] opacity-80">
            [{author}]
          </span>
        )}
      </div>
    </div>
  );
}
