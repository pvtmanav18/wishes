"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import { birthdayConfig } from "@/config/birthday";
import { sounds } from "@/lib/sound";
import { Sparkles, Wind, Crown } from "lucide-react";

export default function Page5FinalReveal() {
  const [stage, setStage] = useState(0);
  const [candlesLit, setCandlesLit] = useState(true);
  const [screenDimmed, setScreenDimmed] = useState(false);
  const [wishMade, setWishMade] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => {
      setStage(1);
      sounds.playChime();

      try {
        confetti({
          particleCount: 70,
          spread: 80,
          origin: { y: 0.6 },
          colors: ["#d4af37", "#f7e7b4", "#8c242d", "#b76e79", "#fff5d2"],
        });
      } catch {}
    }, 1200);

    return () => clearTimeout(t1);
  }, []);

  const handleMakeWish = () => {
    if (!candlesLit) return;
    sounds.playBlowCandle();
    setCandlesLit(false);
    setScreenDimmed(true);

    setTimeout(() => {
      setScreenDimmed(false);
      setWishMade(true);
      sounds.playChime();

      try {
        confetti({
          particleCount: 50,
          spread: 60,
          origin: { y: 0.7 },
          colors: ["#d4af37", "#f7e7b4", "#fff5d2"],
        });
      } catch {}
    }, 1400);
  };

  const wishes = birthdayConfig.customWishes || [
    "Fewer reasons to cry (unless you're laughing so hard you can't breathe).",
    "Fewer reasons to get angry at me (though let's be realistic, I'll still do something dumb).",
    "Endless moments where your soft, caring heart feels completely loved.",
  ];

  return (
    <div className="relative min-h-[580px] p-6 sm:p-10 md:p-12 text-[#2b1810]">
      {/* Screen Dimming overlay during the wish */}
      <AnimatePresence>
        {screenDimmed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.94 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-50 bg-[#0d0507] flex flex-col items-center justify-center text-center p-6"
          >
            <p className="font-display italic text-2xl text-[#f7e7b4] tracking-wider animate-pulse">
              Making a wish in the dark...
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* STAGE 0: Initial intro */}
      {stage === 0 ? (
        <div className="min-h-[480px] flex items-center justify-center text-center">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="font-book italic text-2xl sm:text-3xl text-[#523326]"
          >
            &ldquo;And finally... after all the threats, the tears, and the anger...&rdquo;
          </motion.p>
        </div>
      ) : (
        /* STAGE 1: Grand Climax in first-person */
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-xl mx-auto"
        >
          {/* Header Crown */}
          <div className="flex justify-center items-center gap-2 mb-2 text-[#d4af37]">
            <Crown className="w-8 h-8 animate-bounce text-[#d4af37]" />
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-royal font-black uppercase text-[#420d16] tracking-wider leading-tight">
            HAPPY BIRTHDAY
          </h1>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-royal font-black gold-foil-text uppercase tracking-wider mt-1">
            {birthdayConfig.name} 👑
          </h2>

          <p className="font-display italic text-xl sm:text-2xl text-[#3b1c22] font-semibold mt-4">
            &ldquo;May your next chapter have fewer tears and way less stress.&rdquo;
          </p>

          {/* Wishes List */}
          <div className="my-5 space-y-1.5 font-book text-base sm:text-lg text-[#321c15]">
            {wishes.map((w, i) => (
              <p key={i}>✦ {w}</p>
            ))}
          </div>

          {/* Playful final lines */}
          <div className="my-5 pt-3 border-t border-[#c8b088]/40 space-y-1">
            <p className="font-book italic text-base text-[#684a37]">
              &ldquo;And perhaps... slightly less rage.&rdquo;
            </p>
            <p className="font-book italic text-base text-[#684a37]">
              &ldquo;Actually, forget that. You wouldn&apos;t be you.&rdquo;
            </p>
            <p className="font-royal font-bold text-2xl sm:text-3xl text-[#8c242d] mt-2">
              Stay exactly you. ❤️
            </p>
          </div>

          {/* FINAL INTERACTION: THE VINTAGE BIRTHDAY CAKE */}
          <div className="mt-8 pt-6 border-t border-dashed border-[#c8b088]/50">
            {/* Vintage Cake Illustration */}
            <div className="relative max-w-xs mx-auto my-4 flex flex-col items-center">
              {/* Candles on top */}
              <div className="flex justify-center items-end gap-5 mb-1 z-10">
                {[1, 2, 3].map((candle) => (
                  <div key={candle} className="flex flex-col items-center relative">
                    {candlesLit ? (
                      <motion.div
                        animate={{
                          scaleY: [1, 1.25, 0.9, 1.15, 1],
                          scaleX: [1, 0.85, 1.1, 0.9, 1],
                          rotate: [-1, 2, -2, 1, 0],
                        }}
                        transition={{
                          repeat: Infinity,
                          duration: 0.9 + candle * 0.15,
                          ease: "easeInOut",
                        }}
                        className="w-3.5 h-6 rounded-full bg-gradient-to-t from-[#ff8c00] via-[#ffdb4d] to-[#ffffff] filter drop-shadow-[0_0_8px_rgba(255,200,50,0.8)]"
                      />
                    ) : (
                      <motion.div
                        initial={{ opacity: 0.8, y: 0, scale: 0.5 }}
                        animate={{ opacity: 0, y: -20, scale: 1.6 }}
                        transition={{ duration: 1.2 }}
                        className="w-3 h-5 text-stone-400 font-bold select-none"
                      >
                        ~
                      </motion.div>
                    )}
                    <div className="w-2.5 h-8 bg-gradient-to-b from-[#fdf6e2] to-[#d4af37] border-x border-[#b59132] rounded-t-xs" />
                  </div>
                ))}
              </div>

              {/* Tier 1 */}
              <div className="relative w-32 h-12 bg-gradient-to-b from-[#fbf8f0] to-[#ecdcb9] rounded-t-lg border-2 border-[#b89758] shadow-md flex items-center justify-center overflow-hidden z-20">
                <span className="font-royal text-[10px] uppercase tracking-widest text-[#5c1421] font-bold">
                  {birthdayConfig.nickname || birthdayConfig.name}
                </span>
                <div className="absolute inset-x-0 bottom-0 h-1.5 bg-[#7b1d2e] border-t border-[#d4af37]" />
              </div>

              {/* Tier 2 */}
              <div className="relative w-44 h-14 bg-gradient-to-b from-[#5c1421] via-[#420d16] to-[#2b080e] rounded-t-md border-2 border-[#d4af37] shadow-lg flex items-center justify-center overflow-hidden -mt-1 z-10">
                <div className="absolute top-1 left-2 text-[#f7e7b4] text-xs">❀</div>
                <div className="absolute top-1 right-2 text-[#f7e7b4] text-xs">❀</div>
                <p className="font-royal text-[9px] uppercase tracking-[0.2em] text-[#faecc8] font-semibold">
                  Pure Royalty
                </p>
              </div>

              {/* Tier 3 */}
              <div className="relative w-56 h-16 bg-gradient-to-b from-[#fcf9f2] to-[#dfcb9f] rounded-t-sm border-2 border-[#b89758] shadow-xl flex flex-col items-center justify-center overflow-hidden -mt-1">
                <div className="w-full flex justify-around text-[#b89758] text-xs">
                  <span>◠</span>
                  <span>◠</span>
                  <span>◠</span>
                  <span>◠</span>
                </div>
                <div className="w-full h-1.5 bg-[#7b1d2e] border-t border-[#d4af37] mt-2" />
              </div>

              {/* Platter */}
              <div className="w-64 h-2.5 bg-gradient-to-r from-[#947d48] via-[#e8d08d] to-[#947d48] rounded-full shadow-lg border border-[#685223] -mt-1" />
            </div>

            {/* MAKE A WISH */}
            <div className="my-5">
              {candlesLit ? (
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleMakeWish}
                  className="inline-flex items-center gap-2.5 px-8 py-3.5 bg-gradient-to-b from-[#7b1d2e] to-[#4a0d16] hover:from-[#922135] hover:to-[#570c18] text-[#fff8e7] border-2 border-[#d4af37] rounded-full font-royal text-xs uppercase tracking-[0.2em] shadow-lg cursor-pointer wax-seal-glow"
                >
                  <Wind className="w-4 h-4 text-[#f7e7b4]" />
                  <span>MAKE A WISH ✨</span>
                  <Sparkles className="w-4 h-4 text-[#d4af37]" />
                </motion.button>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="space-y-2 p-4 bg-[#fffdf8] border border-[#d4af37] rounded-xs shadow-md max-w-sm mx-auto"
                >
                  <p className="font-display italic text-2xl text-[#7b1d2e] font-bold">
                    Wish sent.
                  </p>
                  <p className="font-book italic text-base text-[#523528]">
                    I won&apos;t ask what you wished for... mostly because I know you&apos;re probably wishing for my total destruction.
                  </p>
                  <p className="font-royal font-bold text-lg text-[#420d16] pt-1">
                    Happy Birthday, {birthdayConfig.name}. 👑
                  </p>
                </motion.div>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}
