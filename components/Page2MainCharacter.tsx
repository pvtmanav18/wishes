"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { birthdayConfig } from "@/config/birthday";
import { sounds } from "@/lib/sound";
import TeasingNote from "@/components/TeasingNote";
import { ChevronRight, Sparkles } from "lucide-react";

interface Page2Props {
  onContinue: () => void;
}

export default function Page2MainCharacter({ onContinue }: Page2Props) {
  const [stage, setStage] = useState(0);
  const [trickState, setTrickState] = useState<"idle" | "wait" | "okay" | "ready">("idle");

  useEffect(() => {
    const t1 = setTimeout(() => {
      setStage(1); // Beautiful
      sounds.playPenScratch();
    }, 400);

    const t2 = setTimeout(() => {
      setStage(2); // Clever
      sounds.playPenScratch();
    }, 1100);

    const t3 = setTimeout(() => {
      setStage(3); // Quick fuse - Angry Bird
      sounds.playPenScratch();
    }, 1800);

    const t4 = setTimeout(() => {
      setStage(4); // Very bad aim
      sounds.playPenScratch();
    }, 2500);

    const t5 = setTimeout(() => {
      setStage(5); // Strong and mature but still a cry baby
      sounds.playPenScratch();
    }, 3200);

    const t6 = setTimeout(() => {
      setStage(6); // Traits & quote
      sounds.playChime();
    }, 4100);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      clearTimeout(t5);
      clearTimeout(t6);
    };
  }, []);

  const handleButtonClick = () => {
    if (trickState === "idle") {
      sounds.playPop();
      setTrickState("wait");

      setTimeout(() => {
        sounds.playPenScratch();
        setTrickState("okay");

        setTimeout(() => {
          setTrickState("ready");

          setTimeout(() => {
            sounds.playPageTurn();
            onContinue();
          }, 850);
        }, 1000);
      }, 1000);
    } else {
      sounds.playPageTurn();
      onContinue();
    }
  };

  const traits = [
    "Quick Fuse 😡🐦",
    "Very Bad Aim 🎯💀",
    "Strong & Mature 💪",
    "Still a Cry Baby 😭🍼",
    "Sweet Chudail 👑👻",
  ];

  return (
    <div className="relative min-h-[560px] flex flex-col justify-between p-6 sm:p-10 md:p-12 text-[#2b1810]">
      {/* Chapter Heading */}
      <div className="text-center border-b border-[#c8b088]/40 pb-5 mb-6">
        <span className="font-royal text-xs uppercase tracking-[0.3em] text-[#8c242d] font-bold">
          Chapter One
        </span>
        <h2 className="text-3xl sm:text-5xl font-royal font-black text-[#420d16] uppercase tracking-wider mt-1">
          HER.
        </h2>
        <p className="font-book italic text-sm text-[#7a593e] mt-1">
          An honest assessment of {birthdayConfig.name}
        </p>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col justify-center max-w-lg mx-auto w-full my-auto py-2">
        <div className="space-y-3.5 pl-4 sm:pl-8 border-l-2 border-[#b89758]/50 my-2">
          {stage >= 1 && (
            <motion.p
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="font-display text-2xl sm:text-3xl text-[#2a1711] italic"
            >
              &ldquo;Beautiful.&rdquo;
            </motion.p>
          )}

          {stage >= 2 && (
            <motion.p
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="font-display text-2xl sm:text-3xl text-[#2a1711] italic"
            >
              &ldquo;Clever.&rdquo;
            </motion.p>
          )}

          {stage >= 3 && (
            <motion.p
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="font-display text-2xl sm:text-3xl text-[#8c242d] italic font-semibold"
            >
              &ldquo;Quick fuse — Angry Bird 😡🐦&rdquo;
            </motion.p>
          )}

          {stage >= 4 && (
            <motion.p
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="font-display text-2xl sm:text-3xl text-[#4a2e1d] italic"
            >
              &ldquo;Very bad aim 🎯💀 (threatens to throw slippers, misses by a mile)&rdquo;
            </motion.p>
          )}

          {stage >= 5 && (
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="pt-1"
            >
              <p className="font-display text-2xl sm:text-3xl text-[#523326] italic font-bold">
                &ldquo;Strong and mature... but still a cry baby 😭🍼&rdquo;
              </p>
              <div className="mt-2">
                <TeasingNote variant="sticky" rotation={-2} author={birthdayConfig.senderName}>
                  &ldquo;Dikhne me pari, gusse me poori Chudail 👻❤️&rdquo;
                </TeasingNote>
              </div>
            </motion.div>
          )}
        </div>

        {/* Animated Word Chips */}
        {stage >= 6 && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-8 pt-4 border-t border-dashed border-[#c8b088]/40"
          >
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
              {traits.map((trait, idx) => (
                <motion.span
                  key={trait}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: idx * 0.12 }}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-royal uppercase tracking-wider shadow-xs border ${
                    trait.includes("Chudail")
                      ? "bg-[#7b1d2e] text-[#f7e7b4] border-[#d4af37] font-bold"
                      : "bg-[#fffbf0] text-[#420d16] border-[#d4af37]/60"
                  }`}
                >
                  {trait}
                </motion.span>
              ))}
            </div>

          </motion.div>
        )}
      </div>

      {/* Footer & The Disappearing Button Trick */}
      <div className="pt-6 border-t border-[#c8b088]/40 flex items-center justify-between min-h-[60px]">
        <span className="text-xs font-book italic text-[#7a593e]">
          Exhibit A · Verified Bhootni Records
        </span>

        <div className="relative">
          {trickState === "idle" && (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleButtonClick}
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#420d16] hover:bg-[#6c161d] text-[#f7e7b4] border border-[#d4af37] font-royal text-xs uppercase tracking-widest shadow-sm cursor-pointer transition-colors"
            >
              <span>Continue →</span>
            </motion.button>
          )}

          {trickState === "wait" && (
            <motion.p
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="font-handwriting text-2xl text-[#8c242d] font-bold"
            >
              Wait.
            </motion.p>
          )}

          {trickState === "okay" && (
            <motion.p
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="font-handwriting text-2xl text-emerald-800 font-bold"
            >
              Okay.
            </motion.p>
          )}

          {trickState === "ready" && (
            <motion.button
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              whileHover={{ scale: 1.05 }}
              onClick={handleButtonClick}
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#7b1d2e] hover:bg-[#5a1421] text-[#fff8e7] border border-[#d4af37] font-royal text-xs uppercase tracking-widest shadow-md cursor-pointer transition-colors wax-seal-glow"
            >
              <span>Continue →</span>
              <ChevronRight className="w-4 h-4" />
            </motion.button>
          )}
        </div>
      </div>
    </div>
  );
}
