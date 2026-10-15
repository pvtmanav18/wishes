"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { sounds } from "@/lib/sound";
import TeasingNote from "@/components/TeasingNote";
import { AlertTriangle, Sparkles, X, ChevronRight, Flame, Skull } from "lucide-react";

interface Page3Props {
  onNext: () => void;
}

export default function Page3Misbehaves({ onNext }: Page3Props) {
  const [prank1Step, setPrank1Step] = useState(0);
  const [buttonOffset, setButtonOffset] = useState({ x: 0, y: 0 });

  const [showPopup, setShowPopup] = useState(false);
  const [popupDismissed, setPopupDismissed] = useState(false);

  const [screenShake, setScreenShake] = useState(false);
  const [screenDark, setScreenDark] = useState(false);
  const [forbiddenClicked, setForbiddenClicked] = useState(false);

  // "O Stree Kal Ana" blood dripping pop-up
  const [showStreeModal, setShowStreeModal] = useState(false);
  const [isCalmed, setIsCalmed] = useState(false);

  /* PRANK 1: Lying button */
  const handleLyingButtonClick = () => {
    sounds.playPenScratch();
    if (prank1Step === 0) {
      setPrank1Step(1);
      setButtonOffset({ x: 50, y: -25 });
    } else if (prank1Step === 1) {
      setPrank1Step(2);
      setButtonOffset({ x: -45, y: 30 });
    } else {
      setPrank1Step(3);
      sounds.playPop();
      setTimeout(() => {
        setShowPopup(true);
        sounds.playPop();
      }, 600);
    }
  };

  /* PRANK 2: Alert message with custom background */
  const handleDismissPopup = () => {
    sounds.playPenScratch();
    setShowPopup(false);
    setPopupDismissed(true);
  };

  /* PRANK 3: Tempting DO NOT CLICK -> Triggers "O Stree Kal Ana" */
  const handleForbiddenClick = () => {
    if (forbiddenClicked) return;
    setForbiddenClicked(true);
    sounds.playDramaticThump();
    sounds.playHorrorSting();
    setScreenShake(true);
    setScreenDark(true);

    setTimeout(() => {
      setScreenDark(false);
      setScreenShake(false);
      // Trigger "O Stree Kal Ana" Blood Dripping Pop-up!
      setShowStreeModal(true);
    }, 400);
  };

  const handleCloseStreeModal = () => {
    setShowStreeModal(false);
    setIsCalmed(true);
    sounds.playChime();
  };

  return (
    <div
      className={`relative min-h-[570px] flex flex-col justify-between p-6 sm:p-10 md:p-12 text-[#2b1810] transition-transform ${
        screenShake ? "animate-bounce" : ""
      }`}
    >
      {/* Dark screen flicker */}
      {screenDark && (
        <div className="fixed inset-0 z-50 bg-black/95 pointer-events-none" />
      )}

      {/* "O STREE KAL ANA" BLOOD DRIPPING POP-UP */}
      <AnimatePresence>
        {showStreeModal && (
          <motion.div
            initial={{ scale: 0.88, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.88, opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-4"
            onClick={handleCloseStreeModal}
          >
            {/* Distressed Wall Container (like a night scene in Stree village) */}
            <div
              className="relative max-w-lg w-full bg-[#120306] p-6 sm:p-10 rounded-sm overflow-hidden shadow-[0_0_100px_rgba(255,10,30,0.6)] border-2 border-red-600/90 text-center"
              style={{
                backgroundImage: `
                  radial-gradient(circle at 50% 20%, rgba(180, 0, 20, 0.35) 0%, transparent 70%),
                  repeating-linear-gradient(45deg, rgba(30, 5, 8, 0.6) 0px, rgba(30, 5, 8, 0.6) 2px, transparent 2px, transparent 8px)
                `,
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Blood Handprint / Scratch decorative accent */}
              <div className="absolute top-3 left-4 text-red-700/30 text-3xl font-black pointer-events-none select-none">
                ✋
              </div>
              <div className="absolute top-3 right-12 text-red-700/30 text-3xl font-black pointer-events-none select-none">
                🩸
              </div>

              {/* Close icon */}
              <button
                onClick={handleCloseStreeModal}
                className="absolute top-3 right-3 p-1.5 text-red-200 hover:text-white bg-red-950/80 hover:bg-red-800 rounded-full cursor-pointer z-30 transition-colors shadow-md border border-red-500/60"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Spooky Skull & Blood Warning Header */}
              <div className="flex items-center justify-center gap-2 mb-2 text-red-500">
                <Skull className="w-7 h-7 animate-pulse text-red-500 filter drop-shadow-[0_0_12px_#ff0033]" />
                <span className="font-royal text-[11px] uppercase tracking-[0.3em] text-red-400 font-bold">
                  Village Wall Notice · Midnight Alert
                </span>
                <Skull className="w-7 h-7 animate-pulse text-red-500 filter drop-shadow-[0_0_12px_#ff0033]" />
              </div>

              {/* BLOOD DRIPPING MAIN GRAPHIC: "O STREE KAL ANA" */}
              <div className="relative py-2 my-2 flex flex-col items-center">
                {/* Glowing red background pulse */}
                <div className="absolute inset-0 bg-red-600/20 blur-xl rounded-full pointer-events-none" />

                <svg
                  viewBox="0 0 600 130"
                  className="w-full max-w-md sm:max-w-lg h-auto select-none filter drop-shadow-[0_0_18px_rgba(255,20,40,0.95)]"
                >
                  <defs>
                    <linearGradient id="bloodGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#ff4d5a" />
                      <stop offset="45%" stopColor="#ff0a26" />
                      <stop offset="85%" stopColor="#ba0014" />
                      <stop offset="100%" stopColor="#6e0009" />
                    </linearGradient>
                    <filter id="horrorGlow" x="-20%" y="-20%" width="140%" height="140%">
                      <feDropShadow dx="0" dy="2" stdDeviation="4" floodColor="#ff002e" floodOpacity="0.9" />
                      <feDropShadow dx="2" dy="5" stdDeviation="7" floodColor="#000000" floodOpacity="0.95" />
                    </filter>
                  </defs>

                  {/* Stalactite Blood Drips hanging from letters */}
                  {/* Drip from O */}
                  <path d="M68 76 Q70 102 69 110 Q68 116 65 116 Q62 116 63 110 Q65 100 65 76 Z" fill="#c40016" />
                  <circle cx="67" cy="120" r="3.5" fill="#ff263b" className="animate-pulse" />

                  {/* Drip from S */}
                  <path d="M142 76 Q144 96 142 106 Q140 110 138 110 Q136 110 137 104 Q140 92 140 76 Z" fill="#c40016" />

                  {/* Drip from T */}
                  <path d="M202 76 Q204 106 202 114 Q200 118 197 118 Q194 118 195 112 Q198 102 198 76 Z" fill="#c40016" />
                  <circle cx="199" cy="122" r="3" fill="#ff263b" className="animate-pulse" />

                  {/* Drip from R */}
                  <path d="M260 76 Q262 98 259 107 Q257 111 255 111 Q253 111 254 105 Q257 94 257 76 Z" fill="#c40016" />

                  {/* Drip from E */}
                  <path d="M318 76 Q320 108 318 116 Q316 122 313 122 Q310 122 311 115 Q314 104 314 76 Z" fill="#c40016" />
                  <circle cx="314" cy="126" r="3.5" fill="#ff263b" className="animate-pulse" />

                  {/* Drip from K */}
                  <path d="M382 76 Q384 100 381 108 Q379 112 377 112 Q375 112 376 107 Q379 98 379 76 Z" fill="#c40016" />

                  {/* Drip from A */}
                  <path d="M452 76 Q454 110 452 118 Q450 122 447 122 Q444 122 445 116 Q448 106 448 76 Z" fill="#c40016" />
                  <circle cx="448" cy="126" r="3" fill="#ff263b" className="animate-pulse" />

                  {/* Drip from N */}
                  <path d="M518 76 Q520 98 517 106 Q515 110 513 110 Q511 110 512 105 Q515 96 515 76 Z" fill="#c40016" />

                  {/* Drip from last A */}
                  <path d="M564 76 Q566 112 563 120 Q561 124 558 124 Q555 124 556 118 Q559 108 559 76 Z" fill="#c40016" />
                  <circle cx="560" cy="128" r="3.5" fill="#ff263b" className="animate-pulse" />

                  {/* MAIN BLOOD TEXT */}
                  <text
                    x="300"
                    y="74"
                    textAnchor="middle"
                    fill="url(#bloodGradient)"
                    filter="url(#horrorGlow)"
                    style={{
                      fontFamily: "'Cinzel', serif",
                      fontSize: "48px",
                      fontWeight: 900,
                      letterSpacing: "0.14em",
                    }}
                  >
                    O STREE KAL ANA
                  </text>
                </svg>

                {/* Animated dripping droplets falling in HTML/CSS */}
                <div className="relative w-full h-8 flex justify-around items-start pointer-events-none px-6">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-600 shadow-[0_0_10px_red] blood-drop-1" />
                  <div className="w-3 h-3 rounded-full bg-red-600 shadow-[0_0_12px_red] blood-drop-2" />
                  <div className="w-2 h-2 rounded-full bg-red-600 shadow-[0_0_8px_red] blood-drop-3" />
                  <div className="w-2.5 h-2.5 rounded-full bg-red-600 shadow-[0_0_10px_red] blood-drop-4" />
                  <div className="w-2.5 h-2.5 rounded-full bg-red-600 shadow-[0_0_10px_red] blood-drop-2" />
                </div>
              </div>

              {/* Hindi script and teasing lines */}
              <div className="space-y-2 my-4 text-center">
                <p className="font-royal text-xl sm:text-2xl tracking-[0.25em] text-red-500 font-black uppercase filter drop-shadow-[0_0_8px_rgba(255,0,0,0.8)]">
                  ओ स्त्री कल आना 🩸
                </p>
                <p className="font-book italic text-base sm:text-lg text-[#ffd5d9] font-semibold">
                  &ldquo;Kripya aaj mat darana... aaj birthday manana! 👻🙏&rdquo;
                </p>
                <p className="font-handwriting text-2xl text-[#ff8a93] font-bold">
                  (Tumhari hi safety ke liye deewar pe likh diya hai, sweet Chudail 😂)
                </p>
              </div>

              {/* Interactive dismiss buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-3 relative z-10">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleCloseStreeModal}
                  className="px-6 py-2.5 bg-gradient-to-r from-red-800 via-red-600 to-red-800 hover:from-red-700 hover:to-red-700 text-white font-royal text-xs font-bold uppercase tracking-widest border border-red-400 rounded-xs shadow-[0_0_25px_rgba(255,0,0,0.6)] cursor-pointer"
                >
                  Theek hai, kal aungi 😈🩸
                </motion.button>
                <button
                  onClick={handleCloseStreeModal}
                  className="px-5 py-2 bg-black/70 hover:bg-black/90 text-stone-300 hover:text-white font-royal text-xs uppercase tracking-wider border border-stone-600 rounded-xs cursor-pointer"
                >
                  Bach gaya tu aaj 😂
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ALERT MESSAGE POP-UP WITH RICH SCENIC BACKGROUND */}
      <AnimatePresence>
        {showPopup && (
          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.85, opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-xs p-4"
          >
            {/* ALERT MODAL WITH CUSTOM HIGH-CONTRAST VINTAGE CRIMSON BACKGROUND */}
            <div className="relative max-w-md w-full bg-gradient-to-b from-[#2e070e] via-[#450914] to-[#1a0307] p-6 sm:p-8 border-2 border-[#d4af37] rounded-sm shadow-[0_15px_60px_rgba(200,30,50,0.5)] text-center text-[#fff5d2] overflow-hidden">
              {/* Caution background hazard pattern lines */}
              <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,rgba(212,175,55,0.06)_10px,rgba(212,175,55,0.06)_20px)] pointer-events-none" />

              <button
                onClick={handleDismissPopup}
                className="absolute top-3 right-3 text-[#f7e7b4]/60 hover:text-white cursor-pointer z-10"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center justify-center gap-2 text-amber-400 mb-2">
                <AlertTriangle className="w-6 h-6 animate-pulse" />
                <h3 className="font-royal font-black text-sm tracking-[0.2em] uppercase text-[#f7e7b4]">
                  ⚠️ CHUDAIL & ANGRY BIRD ALERT ⚠️
                </h3>
              </div>

              <p className="font-book text-xl text-[#fff3cb] font-bold mb-2">
                Extreme Emotional Volatility Detected.
              </p>

              <p className="font-book text-sm text-[#ebd4a0] mb-5 leading-relaxed">
                Warning: Quick fuse triggered! High probability of Cry Baby tears 😭🍼, throwing objects with very bad aim 🎯💀, or turning into a full Bhoot.
              </p>

              <div className="flex justify-center gap-3 relative z-10">
                <button
                  onClick={handleDismissPopup}
                  className="px-5 py-2 bg-[#7b1d2e] hover:bg-[#962136] text-[#fff7d6] font-royal text-xs font-bold uppercase tracking-wider border border-[#d4af37] cursor-pointer shadow-md"
                >
                  Mai Chudail nahi hu! 😤
                </button>
                <button
                  onClick={handleDismissPopup}
                  className="px-5 py-2 bg-black/50 hover:bg-black/70 text-[#ebd4a0] font-royal text-xs uppercase tracking-wider border border-[#b89758] cursor-pointer"
                >
                  Ruk, abhi batati hu tujhe 👊
                </button>
              </div>

              <p className="mt-4 font-handwriting text-2xl text-[#ffcdd2]">
                Dikhne me sweet, harkate poori Bhoot jaisi 👻❤️
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chapter Heading */}
      <div className="text-center border-b border-[#c8b088]/40 pb-5 mb-6">
        <span className="font-royal text-xs uppercase tracking-[0.3em] text-[#8c242d] font-bold">
          Chapter Two
        </span>
        <h2 className="text-3xl sm:text-4xl font-royal font-black text-[#420d16] uppercase tracking-wider mt-1">
          A SLIGHT PROBLEM.
        </h2>
      </div>

      {/* Requested verbatim line with 2-3 emojis */}
      <div className="max-w-md mx-auto text-center space-y-2 mb-4">
        <p className="font-book text-xl sm:text-2xl text-[#2a1711] italic font-semibold leading-relaxed">
          &ldquo;I was going to write something good then I remembered it&apos;s about you 🤦‍♂️💀😂&rdquo;
        </p>
        <p className="font-book italic text-sm text-[#7a593e]">
          (A dedicated analysis of your quick fuse and very bad aim)
        </p>
      </div>

      {/* Interactive Pranks Container */}
      <div className="max-w-md mx-auto w-full my-4 space-y-6 text-center">
        {/* PRANK 1: The Lying Button */}
        <div className="p-4 bg-[#f8f1e0]/80 border border-[#b89758]/50 rounded-xs">
          <p className="text-xs font-royal uppercase tracking-wider text-[#8c242d] mb-2 font-semibold">
            Exhibit A: Promise you won&apos;t throw things with your bad aim today 🎯
          </p>
          <div className="relative min-h-[60px] flex items-center justify-center">
            <motion.button
              animate={{ x: buttonOffset.x, y: buttonOffset.y }}
              transition={{ type: "spring", stiffness: 350, damping: 22 }}
              onClick={handleLyingButtonClick}
              className="px-6 py-2 bg-[#420d16] hover:bg-[#5c1421] text-[#f7e7b4] border border-[#d4af37] font-royal text-xs uppercase tracking-wider shadow-sm cursor-pointer"
            >
              {prank1Step === 0 && "I Promise →"}
              {prank1Step === 1 && "Nope. Angry Bird mode on 😡"}
              {prank1Step === 2 && "Almost. Control your inner Chudail 👻"}
              {prank1Step >= 3 && "Fine. (I still don't trust you)."}
            </motion.button>
          </div>
        </div>

        {/* Note after popup */}
        {popupDismissed && !forbiddenClicked && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="my-2">
            <TeasingNote variant="sticky" rotation={1} author="Eyewitness">
              Throws pillows with very bad aim 🎯. Cries 2 minutes later like a Cry Baby 😭🍼.
            </TeasingNote>
          </motion.div>
        )}

        {/* PRANK 3: Tempting DO NOT CLICK Button (Bhoot warning) */}
        {popupDismissed && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-4 bg-[#fcf5e5] border border-[#8c242d]/40 rounded-xs"
          >
            {!forbiddenClicked ? (
              <div>
                <p className="text-xs font-book italic text-stone-600 mb-3">
                  I know your Angry Bird curiosity is dangerous. Don&apos;t click this:
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleForbiddenClick}
                  className="px-7 py-2.5 bg-gradient-to-r from-[#8c242d] to-[#aa2232] text-[#fff6d8] font-royal text-xs font-bold uppercase tracking-widest rounded-full border border-[#d4af37] shadow-md cursor-pointer wax-seal-glow"
                >
                  DO NOT CLICK (Stree / Bhoot inside 👻)
                </motion.button>
              </div>
            ) : (
              <div className="py-2">
                <p className="font-handwriting text-2xl text-[#8c242d] font-bold">
                  Asli Stree encounter survived! 😂🩸
                </p>
                <p className="font-book italic text-xs text-[#7a593e] mt-1">
                  (&ldquo;O Stree Kal Ana&rdquo; likh kar jaan bacha li!)
                </p>
              </div>
            )}
          </motion.div>
        )}

        {/* Calmed Down State */}
        {isCalmed && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-6 pt-3 text-center"
          >
            <p className="font-handwriting text-2xl text-[#523326] font-bold">
              &ldquo;Okay. I&apos;ll behave now before you summon your inner Bhoot on me.&rdquo;
            </p>
            <p className="font-book italic text-xs text-[#8c242d] mt-1">
              (Happy Birthday to my favorite Chudail ❤️)
            </p>
          </motion.div>
        )}
      </div>

      {/* Footer Navigation */}
      <div className="pt-6 border-t border-[#c8b088]/40 flex items-center justify-between">
        <span className="text-xs font-book italic text-[#7a593e]">
          {isCalmed ? "Chudail protocol calmed." : "Angry Bird containment in progress..."}
        </span>

        {isCalmed ? (
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.04 }}
            onClick={() => {
              sounds.playPageTurn();
              onNext();
            }}
            className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#420d16] hover:bg-[#6c161d] text-[#f7e7b4] border border-[#d4af37] font-royal text-xs uppercase tracking-widest shadow-sm cursor-pointer transition-colors"
          >
            <span>Next Page →</span>
            <ChevronRight className="w-4 h-4" />
          </motion.button>
        ) : (
          <button
            onClick={() => {
              setIsCalmed(true);
              setPopupDismissed(true);
              setForbiddenClicked(true);
            }}
            className="text-xs font-book italic text-stone-400 hover:text-[#8c242d] underline cursor-pointer"
          >
            Skip teasing
          </button>
        )}
      </div>
    </div>
  );
}
