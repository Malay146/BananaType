"use client";

import Mode from "@/components/ModeSelection";
import Navbar from "@/components/Navbar";
import TypingBoard from "@/components/TypingBoard";
import { useState } from "react";

export default function Home() {

  const [timeLeft, setTimeLeft] = useState<number>(15);

  return (
    <div className="w-full h-screen bg-primary-100">
      <Navbar />
      <Mode setTimeLeft={setTimeLeft} />
      <TypingBoard timeLeft={timeLeft} />
    </div>
  );
}
