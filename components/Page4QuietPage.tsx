"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { birthdayConfig } from "@/config/birthday";
import { sounds } from "@/lib/sound";
import TeasingNote from "@/components/TeasingNote";
import { Heart, ChevronRight } from "lucide-react";

interface Page4Props {
  onNext: () => void;
}

export default function Page4QuietPage({ onNext }: Page4Props) {
  const [showAnnotation, setShowAnnotation] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAnnotation(true);
      sounds.playPenScratch();
    }, 3500);

    return () => clearTimeout(timer);
  }, []);

  const salutation =
    birthdayConfig.letterText?.salutation || `My Dearest ${birthdayConfig.name},`;
  const bodyParagraphs = birthdayConfig.letterText?.body || [
    "I know you have a temper that can ignite in 0.2 seconds if you haven't eaten, and I know you cry at cartoon animals, sad songs, and whenever life feels even slightly overwhelming.",
    "The truth is: I adore your fiery rage just as much as I adore your ridiculously soft heart and emotional tears.",
    "Never stop crying over sweet, silly things. And never stop getting mad at me whenever I deserve it.",
    "You are the most passionate, dramatic, beautiful person I have ever known.",
  ];
  const closing = birthdayConfig.letterText?.closing || "Happy Birthday. ❤️";
  const signature = birthdayConfig.senderName || "Yours Truly";

  return (
    <div className="relative min-h-[540px] flex flex-col justify-between p-6 sm:p-10 md:p-14 text-[#2b1810]">
      {/* Chapter Heading */}
      <div className="text-center border-b border-[#c8b088]/40 pb-5 mb-6">
        <span className="font-royal text-xs uppercase tracking-[0.3em] text-[#8c242d] font-bold">
          Chapter Three
        </span>
        <h2 className="text-2xl sm:text-4xl font-display font-semibold text-[#2f1015] tracking-tight mt-1">
          A LITTLE SOMETHING FOR YOU.
        </h2>
        <div className="flex items-center justify-center gap-3 mt-3">
          <div className="h-[1px] w-12 bg-[#b89758]/50" />
          <Heart className="w-3.5 h-3.5 text-[#8c242d] fill-[#8c242d]/30" />
          <div className="h-[1px] w-12 bg-[#b89758]/50" />
        </div>
      </div>

      {/* Main Letter Body with Dried Rose */}
      <div className="relative max-w-lg mx-auto w-full my-auto py-2">
        {/* Subtle Dried Rose / Pressed Flower Illustration */}
        <div className="hidden sm:block absolute -right-6 top-0 w-24 h-32 pointer-events-none opacity-80 filter drop-shadow-xs rotate-12">
          <svg viewBox="0 0 100 140" fill="none" className="w-full h-full text-[#9c4d57]">
            <path d="M50 40Q55 85 45 130" stroke="#4a5d3f" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M48 75Q60 70 65 74" stroke="#4a5d3f" strokeWidth="2" strokeLinecap="round" />
            <path d="M50 100Q35 95 32 100" stroke="#4a5d3f" strokeWidth="2" strokeLinecap="round" />
            <ellipse cx="65" cy="74" rx="6" ry="3" fill="#607352" transform="rotate(15 65 74)" />
            <ellipse cx="32" cy="100" rx="6" ry="3" fill="#607352" transform="rotate(-20 32 100)" />
            <circle cx="50" cy="30" r="16" fill="#8c242d" opacity="0.85" />
            <path d="M42 22C46 15 54 15 58 22C62 29 55 38 50 38C45 38 38 29 42 22Z" fill="#a8323e" />
            <path d="M48 26C50 20 54 20 56 26" stroke="#f7e7b4" strokeWidth="1" strokeLinecap="round" opacity="0.6" />
          </svg>
        </div>

        {/* Handwritten Letter in first-person voice */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-4 font-book text-[#261712] leading-relaxed"
        >
          <p className="font-display italic text-2xl text-[#3b1319] font-medium">
            {salutation}
          </p>

          {bodyParagraphs.map((para, idx) => (
            <p key={idx} className="text-lg sm:text-xl leading-relaxed text-[#2a1711]">
              {para}
            </p>
          ))}

          <div className="pt-4 pb-2">
            <p className="font-display text-xl text-[#8c242d] font-semibold">
              {closing}
            </p>
            <p className="font-handwriting text-3xl sm:text-4xl text-[#7b1d2e] font-bold mt-1">
              — {signature}
            </p>
          </div>
        </motion.div>
      </div>

      {/* Footer Area: "No jokes on this page." + "...for now." */}
      <div className="pt-6 border-t border-[#c8b088]/40 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="font-book italic text-sm text-[#7a593e]">
            No jokes on this page.
          </span>
          {showAnnotation && (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
            >
              <TeasingNote variant="scribble" rotation={2}>
                ...for now (please don&apos;t cry).
              </TeasingNote>
            </motion.div>
          )}
        </div>

        <motion.button
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          onClick={() => {
            sounds.playPageTurn();
            onNext();
          }}
          className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#420d16] hover:bg-[#6c161d] text-[#f7e7b4] border border-[#d4af37] font-royal text-xs uppercase tracking-widest shadow-sm cursor-pointer transition-colors"
        >
          <span>Turn The Page →</span>
          <ChevronRight className="w-4 h-4" />
        </motion.button>
      </div>
    </div>
  );
}
