"use client";

import { useState, useRef } from "react";
import Mode from "./ModeSelection";

export default function TypeBox() {
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<HTMLTextAreaElement | null>(null);

  const handleFocus = () => {
    setIsFocused(true);
    inputRef.current?.focus();
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-between relative select-none">

      {/* Language Header */}
      <div className="w-[850px] min-h-[40px] text-center border-2 border-black rounded-lg select-none">
        <Mode />
      </div>

      {/* Words Wrapper */}
      <div
        className="relative w-full h-[200px] overflow-hidden border border-white/10 rounded-lg px-4 py-2"
        onClick={handleFocus}
      >

        {/* Hidden Input */}
        <textarea
          ref={inputRef}
          className="absolute top-0 left-0 w-1 h-1 opacity-0 resize-none"
          autoCorrect="off"
          autoCapitalize="off"
          spellCheck="false"
        />

        {/* Overlay */}
        {!isFocused && (
          <div className="absolute inset-0 bg-black/20 backdrop-blur-sm flex items-center justify-center text-white/70 cursor-pointer">
            <span className="flex items-center gap-2">
              <i className="fas fa-mouse-pointer"></i>
              Click here or press any key to focus
            </span>
          </div>
        )}

        {/* Caret */}
        {isFocused && (
          <div
            className="absolute bg-white w-[2px] h-[2rem] animate-pulse"
            style={{ left: "10px", top: "10px" }}
          ></div>
        )}

        {/* Words Grid */}
        <div className="flex flex-wrap gap-3 text-2xl leading-relaxed select-none">
          {/* your paragraph words */}
          <div className="flex gap-[2px]"><span>t</span><span>h</span><span>e</span></div>
          <div className="flex gap-[2px]"><span>q</span><span>u</span><span>i</span><span>c</span><span>k</span></div>
          <div className="flex gap-[2px]"><span>b</span><span>r</span><span>o</span><span>w</span><span>n</span></div>
          <div className="flex gap-[2px]"><span>f</span><span>o</span><span>x</span></div>
          <div className="flex gap-[2px]"><span>j</span><span>u</span><span>m</span><span>p</span><span>s</span></div>
          <div className="flex gap-[2px]"><span>o</span><span>v</span><span>e</span><span>r</span></div>
          <div className="flex gap-[2px]"><span>t</span><span>h</span><span>e</span></div>
          <div className="flex gap-[2px]"><span>l</span><span>a</span><span>z</span><span>y</span></div>
          <div className="flex gap-[2px]"><span>d</span><span>o</span><span>g</span></div>
          <div className="flex gap-[2px]"><span>w</span><span>h</span><span>i</span><span>l</span><span>e</span></div>
          <div className="flex gap-[2px]"><span>t</span><span>h</span><span>e</span></div>
          <div className="flex gap-[2px]"><span>w</span><span>i</span><span>n</span><span>d</span></div>
          <div className="flex gap-[2px]"><span>b</span><span>l</span><span>o</span><span>w</span><span>s</span></div>
          <div className="flex gap-[2px]"><span>s</span><span>o</span><span>f</span><span>t</span><span>l</span><span>y</span></div>
          <div className="flex gap-[2px]"><span>a</span><span>c</span><span>r</span><span>o</span><span>s</span><span>s</span></div>
          <div className="flex gap-[2px]"><span>t</span><span>h</span><span>e</span></div>
          <div className="flex gap-[2px]"><span>f</span><span>i</span><span>e</span><span>l</span><span>d</span></div>
        </div>
      </div> {/* Proper closing of Words Wrapper */}

      {/* Restart Button */}
      <div className="mt-2 opacity-70 hover:opacity-100 cursor-pointer text-2xl">
        ⟳
      </div>
    </div>
  );
}