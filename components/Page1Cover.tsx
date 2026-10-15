"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { birthdayConfig } from "@/config/birthday";
import { sounds } from "@/lib/sound";
import RoyalCrest from "@/components/RoyalCrest";
import TeasingNote from "@/components/TeasingNote";
import { Sparkles, BookOpen } from "lucide-react";

interface Page1CoverProps {
  onOpen: () => void;
}

export default function Page1Cover({ onOpen }: Page1CoverProps) {
  const [isOpening, setIsOpening] = useState(false);

  const handleOpenClick = () => {
    if (isOpening) return;
    setIsOpening(true);
    sounds.playWaxSealBreak();
    setTimeout(() => {
      onOpen();
    }, 600);
  };

  return (
    <div className="relative w-full max-w-xl mx-auto my-6 sm:my-10 px-2 sm:px-4">
      {/* Antique leather hardcover book */}
      <motion.div
        initial={{ scale: 0.95, opacity: 0, y: 15 }}
        animate={{ scale: isOpening ? 1.03 : 1, opacity: isOpening ? 0.8 : 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative leather-cover rounded-md p-8 sm:p-12 text-center border-2 border-[#b89758]/70 shadow-[0_30px_70px_rgba(0,0,0,0.9)] overflow-hidden"
      >
        {/* Book spine simulation on left */}
        <div className="absolute left-0 top-0 bottom-0 w-6 sm:w-8 bg-gradient-to-r from-black/70 via-black/30 to-transparent pointer-events-none" />
        <div className="absolute left-5 sm:left-7 top-0 bottom-0 w-[1px] bg-[#d4af37]/30 pointer-events-none" />

        {/* Embossed gold border */}
        <div className="absolute inset-4 sm:inset-6 border border-[#d4af37]/50 rounded-xs pointer-events-none" />
        <div className="absolute inset-6 sm:inset-8 border border-[#d4af37]/30 rounded-xs pointer-events-none" />

        {/* Antique filigree corners */}
        <div className="absolute top-2 left-2 w-12 h-12 pointer-events-none text-[#d4af37]/80">
          <svg viewBox="0 0 50 50" fill="none" className="w-full h-full">
            <path d="M3 47V10C3 6.13401 6.13401 3 10 3H47" stroke="currentColor" strokeWidth="1.5" />
            <circle cx="10" cy="10" r="2.5" fill="currentColor" />
          </svg>
        </div>
        <div className="absolute top-2 right-2 w-12 h-12 pointer-events-none text-[#d4af37]/80 rotate-90">
          <svg viewBox="0 0 50 50" fill="none" className="w-full h-full">
            <path d="M3 47V10C3 6.13401 6.13401 3 10 3H47" stroke="currentColor" strokeWidth="1.5" />
            <circle cx="10" cy="10" r="2.5" fill="currentColor" />
          </svg>
        </div>
        <div className="absolute bottom-2 left-2 w-12 h-12 pointer-events-none text-[#d4af37]/80 -rotate-90">
          <svg viewBox="0 0 50 50" fill="none" className="w-full h-full">
            <path d="M3 47V10C3 6.13401 6.13401 3 10 3H47" stroke="currentColor" strokeWidth="1.5" />
            <circle cx="10" cy="10" r="2.5" fill="currentColor" />
          </svg>
        </div>
        <div className="absolute bottom-2 right-2 w-12 h-12 pointer-events-none text-[#d4af37]/80 rotate-180">
          <svg viewBox="0 0 50 50" fill="none" className="w-full h-full">
            <path d="M3 47V10C3 6.13401 6.13401 3 10 3H47" stroke="currentColor" strokeWidth="1.5" />
            <circle cx="10" cy="10" r="2.5" fill="currentColor" />
          </svg>
        </div>

        {/* Royal Crest */}
        <div className="relative mb-5 pt-2">
          <RoyalCrest size={95} />
        </div>

        {/* Title */}
        <div className="relative mb-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-royal font-black tracking-wider uppercase gold-foil-text py-1">
            THE BOOK OF HER
          </h1>

          <div className="flex items-center justify-center gap-3 my-2">
            <div className="h-[1px] w-12 sm:w-16 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent" />
            <span className="text-[#f7e7b4] text-xs">✦</span>
            <div className="h-[1px] w-12 sm:w-16 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent" />
          </div>

          <p className="text-sm sm:text-base font-book italic text-[#faecc8] tracking-wide">
            A very limited birthday edition written by {birthdayConfig.senderName}.
          </p>

          <div className="mt-4 flex flex-col items-center">
            <p className="text-base sm:text-lg font-royal uppercase tracking-widest text-[#ffeaa8] font-bold">
              Featuring: {birthdayConfig.name}
            </p>

            {/* Handwritten annotation: "I did not consult her (for obvious reasons)." */}
            <div className="mt-2">
              <TeasingNote variant="sticky" rotation={-3} author={birthdayConfig.senderName}>
                &ldquo;I did not consult her (she would have yelled at me).&rdquo;
              </TeasingNote>
            </div>
          </div>
        </div>

        {/* Warning line before opening */}
        <p className="font-handwriting text-lg text-[#ebd4a0] mt-6 mb-3 italic">
          Proceed at your own risk. Please don&apos;t get mad.
        </p>

        {/* Gold Wax Seal / OPEN Button */}
        <div className="relative mt-2 mb-2 flex justify-center">
          <motion.button
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.94 }}
            onClick={handleOpenClick}
            disabled={isOpening}
            className="group relative inline-flex items-center gap-3 px-8 sm:px-10 py-3.5 bg-gradient-to-b from-[#7a1422] to-[#450912] hover:from-[#921a2a] hover:to-[#570c17] text-[#fff5d2] font-royal font-bold text-sm sm:text-base uppercase tracking-[0.25em] rounded-full border-2 border-[#d4af37] shadow-[0_10px_30px_rgba(0,0,0,0.8)] cursor-pointer wax-seal-glow transition-all"
          >
            <BookOpen className="w-5 h-5 text-[#f7e7b4] group-hover:rotate-6 transition-transform" />
            <span>{isOpening ? "Opening..." : "OPEN"}</span>
            <Sparkles className="w-4 h-4 text-[#d4af37]" />
          </motion.button>
        </div>

        {/* Bookmark ribbon */}
        <div className="absolute -bottom-2 right-12 w-8 h-12 bg-gradient-to-b from-[#8c1c28] to-[#5a0f18] shadow-md border-x border-[#aa2232] pointer-events-none transform -skew-x-3">
          <div className="absolute bottom-0 left-0 right-0 h-3 bg-transparent border-b-[8px] border-l-[16px] border-r-[16px] border-b-transparent border-l-[#8c1c28] border-r-[#8c1c28]" />
        </div>
      </motion.div>
    </div>
  );
}
