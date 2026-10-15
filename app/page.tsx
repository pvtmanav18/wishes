"use client";

import React, { useState } from "react";
import Book5PageShell from "@/components/Book5PageShell";
import Page1Cover from "@/components/Page1Cover";
import Page2MainCharacter from "@/components/Page2MainCharacter";
import Page3Misbehaves from "@/components/Page3Misbehaves";
import Page4QuietPage from "@/components/Page4QuietPage";
import Page5FinalReveal from "@/components/Page5FinalReveal";

export default function Home() {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <Book5PageShell currentPage={currentPage} onPageChange={setCurrentPage}>
      {currentPage === 1 && (
        <Page1Cover onOpen={() => setCurrentPage(2)} />
      )}
      {currentPage === 2 && (
        <Page2MainCharacter onContinue={() => setCurrentPage(3)} />
      )}
      {currentPage === 3 && (
        <Page3Misbehaves onNext={() => setCurrentPage(4)} />
      )}
      {currentPage === 4 && (
        <Page4QuietPage onNext={() => setCurrentPage(5)} />
      )}
      {currentPage === 5 && (
        <Page5FinalReveal />
      )}
    </Book5PageShell>
  );
}
