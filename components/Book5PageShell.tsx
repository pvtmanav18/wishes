"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { sounds } from "@/lib/sound";
import {
  ChevronLeft,
  ChevronRight,
  Bookmark as BookmarkIcon,
  Volume2,
  VolumeX,
} from "lucide-react";

interface Book5PageShellProps {
  currentPage: number;
  onPageChange: (newPage: number) => void;
  children: React.ReactNode;
}

export default function Book5PageShell({
  currentPage,
  onPageChange,
  children,
}: Book5PageShellProps) {
  const totalPages = 5;
  const [bookmarkedPage, setBookmarkedPage] = useState<number | null>(null);
  const [isMuted, setIsMuted] = useState(false);
  const [bookmarkNotification, setBookmarkNotification] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("her_letter_bookmark");
      if (saved) {
        setBookmarkedPage(parseInt(saved, 10));
      }
    } catch {}
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        if (currentPage < totalPages) {
          sounds.playPageTurn();
          onPageChange(currentPage + 1);
        }
      } else if (e.key === "ArrowLeft") {
        if (currentPage > 1) {
          sounds.playPageTurn();
          onPageChange(currentPage - 1);
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentPage, totalPages, onPageChange]);

  const handlePrev = () => {
    if (currentPage > 1) {
      sounds.playPageTurn();
      onPageChange(currentPage - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      sounds.playPageTurn();
      onPageChange(currentPage + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleToggleBookmark = () => {
    sounds.playPenScratch();
    if (bookmarkedPage === currentPage) {
      setBookmarkedPage(null);
      try {
        localStorage.removeItem("her_letter_bookmark");
      } catch {}
    } else {
      setBookmarkedPage(currentPage);
      try {
        localStorage.setItem("her_letter_bookmark", currentPage.toString());
      } catch {}
      setBookmarkNotification(true);
      setTimeout(() => setBookmarkNotification(false), 2000);
    }
  };

  const handleToggleAudio = () => {
    const nextMuted = !isMuted;
    setIsMuted(nextMuted);
    sounds.setMuted(nextMuted);
    if (!nextMuted) {
      sounds.playPenScratch();
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-between relative book-container-3d pb-20 sm:pb-24">
      {/* Top Subtle Audio Control & Ribbon Bookmark */}
      <header className="sticky top-0 z-40 px-4 sm:px-8 py-3 flex items-center justify-between pointer-events-none">
        <div className="pointer-events-auto">
          <span className="font-royal text-xs uppercase tracking-widest text-[#d4af37]/90 font-bold bg-[#140608]/85 px-3 py-1 rounded-full border border-[#d4af37]/30 shadow-md backdrop-blur-xs">
            A PRIVATE LETTER FOR HER
          </span>
        </div>

        {/* Audio Toggle (🔊 / 🔇) */}
        <div className="pointer-events-auto flex items-center gap-2">
          <button
            onClick={handleToggleAudio}
            className="p-2 rounded-full bg-[#20060a]/90 hover:bg-[#350912] border border-[#d4af37]/40 text-[#f7e7b4] text-xs cursor-pointer shadow-md transition-colors"
            title={isMuted ? "Unmute Sound" : "Mute Sound"}
          >
            {isMuted ? <VolumeX className="w-4 h-4 text-rose-400" /> : <Volume2 className="w-4 h-4 text-[#d4af37]" />}
          </button>
        </div>
      </header>

      {/* Main Reading Stage */}
      <main className="flex-1 flex items-center justify-center p-3 sm:p-6 md:p-8">
        <div className="w-full max-w-3xl mx-auto relative">
          {/* Silk Bookmark Ribbon */}
          <div className="absolute -top-3 right-8 sm:right-14 z-30 pointer-events-auto">
            <button
              onClick={handleToggleBookmark}
              className={`group flex flex-col items-center cursor-pointer transition-transform ${
                bookmarkedPage === currentPage ? "translate-y-2" : "hover:translate-y-1"
              }`}
              title={
                bookmarkedPage === currentPage
                  ? "Bookmarked page (click to remove)"
                  : "Bookmark this page"
              }
            >
              <div
                className={`w-7 sm:w-8 h-12 sm:h-14 shadow-lg border-x transition-colors relative ${
                  bookmarkedPage === currentPage
                    ? "bg-gradient-to-b from-[#991b29] to-[#590e18] border-[#d4af37]"
                    : "bg-gradient-to-b from-[#6b1421] to-[#3a0810] border-[#b89758]/60"
                }`}
              >
                <div className="pt-2 flex justify-center">
                  <BookmarkIcon
                    className={`w-3.5 h-3.5 ${
                      bookmarkedPage === currentPage
                        ? "text-[#ffe699] fill-[#ffe699]"
                        : "text-[#d4af37]/70"
                    }`}
                  />
                </div>
                <div className="absolute -bottom-2 left-0 right-0 h-3 bg-transparent border-b-[6px] border-l-[14px] sm:border-l-[16px] border-r-[14px] sm:border-r-[16px] border-b-transparent border-l-[#590e18] border-r-[#590e18]" />
              </div>
            </button>
          </div>

          {/* Bookmark Saved Notice */}
          <AnimatePresence>
            {bookmarkNotification && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute top-14 right-6 sm:right-12 z-40 bg-[#420d16] text-[#f7e7b4] border border-[#d4af37] px-3 py-1 rounded-xs shadow-lg text-xs font-royal uppercase tracking-wider"
              >
                Bookmark Placed at Page {currentPage}
              </motion.div>
            )}
          </AnimatePresence>

          {/* VINTAGE FRAYED LETTER CONTAINER */}
          <div
            className={`relative rounded-xs transition-all ${
              currentPage === 1
                ? "border-transparent bg-transparent shadow-none"
                : "vintage-frayed-letter border border-[#b89758]/60"
            }`}
          >
            {/* Frayed, shredded, burnished corner artifacts on pages 2-5 */}
            {currentPage > 1 && (
              <>
                <div className="corner-fray-tl" />
                <div className="corner-fray-tr" />
                <div className="corner-fray-bl" />
                <div className="corner-fray-br" />
                <div className="letter-crease" />

                {/* Jagged aged corner tears (visual SVG details) */}
                <div className="absolute top-0 left-0 w-8 h-8 pointer-events-none opacity-40">
                  <svg viewBox="0 0 40 40" fill="none">
                    <path d="M0 0 L15 2 L5 12 L18 8 L8 22 L0 18 Z" fill="#6d431c" />
                  </svg>
                </div>
                <div className="absolute top-0 right-0 w-8 h-8 pointer-events-none opacity-40 rotate-90">
                  <svg viewBox="0 0 40 40" fill="none">
                    <path d="M0 0 L15 2 L5 12 L18 8 L8 22 L0 18 Z" fill="#6d431c" />
                  </svg>
                </div>
                <div className="absolute bottom-0 left-0 w-8 h-8 pointer-events-none opacity-40 -rotate-90">
                  <svg viewBox="0 0 40 40" fill="none">
                    <path d="M0 0 L15 2 L5 12 L18 8 L8 22 L0 18 Z" fill="#6d431c" />
                  </svg>
                </div>
                <div className="absolute bottom-0 right-0 w-8 h-8 pointer-events-none opacity-40 rotate-180">
                  <svg viewBox="0 0 40 40" fill="none">
                    <path d="M0 0 L15 2 L5 12 L18 8 L8 22 L0 18 Z" fill="#6d431c" />
                  </svg>
                </div>
              </>
            )}

            {/* Page Content with smooth transition */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentPage}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.45, ease: "easeInOut" }}
                className="relative z-10"
              >
                {children}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </main>

      {/* Subtle Antique Navigation (← Bookmark → Page 1 / 5) */}
      <footer className="fixed bottom-0 left-0 right-0 z-40 bg-[#160608]/95 backdrop-blur-md border-t border-[#d4af37]/30 px-4 sm:px-8 py-3 text-[#f7e7b4]">
        <div className="max-w-xl mx-auto flex items-center justify-between">
          {/* Previous Page Button ← */}
          <button
            onClick={handlePrev}
            disabled={currentPage === 1}
            className={`p-2 rounded-xs border font-royal transition-all cursor-pointer ${
              currentPage === 1
                ? "opacity-30 cursor-not-allowed border-stone-800 text-stone-500"
                : "bg-[#2d070e] hover:bg-[#480c18] border-[#d4af37]/50 text-[#f7e7b4]"
            }`}
            title="Previous Page"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Center: Bookmark + Page Indicator (1 / 5) */}
          <div className="flex items-center gap-3">
            <button
              onClick={handleToggleBookmark}
              className={`flex items-center gap-1.5 px-3 py-1 rounded-xs border text-xs font-royal transition-colors cursor-pointer ${
                bookmarkedPage === currentPage
                  ? "bg-[#7b1d2e] border-[#d4af37] text-[#fff7d6]"
                  : "bg-transparent border-[#d4af37]/30 text-[#d4af37]/75 hover:text-[#f7e7b4]"
              }`}
              title="Bookmark this page"
            >
              <BookmarkIcon
                className={`w-3.5 h-3.5 ${
                  bookmarkedPage === currentPage ? "fill-[#fff7d6]" : ""
                }`}
              />
              <span>{bookmarkedPage === currentPage ? "Bookmarked" : "Bookmark"}</span>
            </button>

            {/* Page Indicator: 1 / 5 */}
            <span className="font-royal text-sm font-semibold tracking-wider text-[#faecc8] px-2">
              {currentPage} / {totalPages}
            </span>
          </div>

          {/* Next Page Button → */}
          <button
            onClick={handleNext}
            disabled={currentPage === totalPages}
            className={`p-2 rounded-xs border font-royal transition-all cursor-pointer ${
              currentPage === totalPages
                ? "opacity-30 cursor-not-allowed border-stone-800 text-stone-500"
                : "bg-[#7b1d2e] hover:bg-[#922135] border-[#d4af37] text-[#fff6d8] wax-seal-glow"
            }`}
            title="Next Page"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </footer>
    </div>
  );
}
