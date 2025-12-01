"use client";
import React, { useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

const Mode = ({setTimeLeft } : {setTimeLeft:React.Dispatch<React.SetStateAction<number>>}) => {
  const [modeToggle, setModeToggle] = useState<boolean>(false);
  const [setsToggle, setSetsToggle] = useState<boolean>(false);
  const [keyboardToggle, setKeyboardToggle] = useState<boolean>(false);
  
  // NEW: selected values
  const [selectedMode, setSelectedMode] = useState<string>("Time");
  const [selectedSet, setSelectedSet] = useState<string>("15s");
  const [selectedKeyboard, setSelectedKeyboard] = useState<string>("OFF");

  const modes = ["Time", "Words", "Quote", "Code"];
  const setOptions = ["15s", "30s", "60s", "120s"];
  const keyboards = ["OFF", "ON"];

  const modeInRef = useRef<HTMLDivElement>(null);
  const setInRef = useRef<HTMLDivElement>(null);
  const keyboardRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const modeEl = modeInRef.current;
      const setEl = setInRef.current;
      const keyboardEl = keyboardRef.current;

      gsap.to(modeEl, {
        width: modeToggle ? modeEl?.scrollWidth : 0,
        duration: 0.3,
        ease: "power3.out",
      });

      gsap.to(setEl, {
        width: setsToggle ? setEl?.scrollWidth : 0,
        duration: 0.3,
        ease: "power3.out",
      });

      gsap.to(keyboardEl, {
        width: keyboardToggle ? keyboardEl?.scrollWidth : 0,
        duration: 0.3,
        ease: "power3.out",
      });
    },
    { dependencies: [modeToggle, setsToggle, keyboardToggle] }
  );

  return (
    <div className="flex justify-center items-center mt-20 gap-3">
      {/* MODE + SETS */}
      <div className="flex items-center gap-1 bg-primary-800 rounded-2xl ">
        {/* MODE */}
        <div
          onClick={() => setModeToggle(!modeToggle)}
          className="flex justify-center items-center gap-2 pl-4 py-2 cursor-pointer"
        >
          <h1 className="text-primary-100 font-medium select-none">Mode</h1>

          {/* NEW → SELECTED MODE */}
          <span className="text-primary-200 text-sm select-none">
            {selectedMode}
          </span>

          <div
            ref={modeInRef}
            className="bg-primary-300 text-primary-800 rounded-lg flex overflow-hidden w-0"
          >
            {modes.map((mode) => {
              return (
                <button
                  onClick={() => {
                    setSelectedMode(mode);
                  }}
                  className="hover:text-primary-100 cursor-pointer transition-all duration-150 px-2 py-1"
                  key={mode}
                >
                  {mode}
                </button>
              );
            })}
          </div>
        </div>

        <span className="w-px h-5 bg-primary-100 rounded-2xl" />

        {/* SETS */}
        <div
          onClick={() => setSetsToggle(!setsToggle)}
          className="flex justify-center items-center gap-2 cursor-pointer px-2 py-2"
        >
          <h1 className="text-primary-100 font-medium select-none">Sets</h1>

          {/* NEW → SELECTED SET */}
          <span className="text-primary-200 text-sm select-none">
            {selectedSet}
          </span>

          <div
            ref={setInRef}
            className="bg-primary-300 text-primary-800 rounded-lg flex overflow-hidden w-0"
          >
            {setOptions.map((option) => {
              return (
                <button
                  onClick={() => {
                    setSelectedSet(option);
                    setTimeLeft(parseInt(option)); 
                  }}
                  className="hover:text-primary-100 cursor-pointer transition-all duration-150 px-2 py-1"
                  key={option}
                >
                  {option}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* KEYBOARD */}
      <div className="flex items-center bg-primary-800 rounded-2xl pl-4 pr-2 py-2">
        <div
          onClick={() => setKeyboardToggle(!keyboardToggle)}
          className="flex justify-center items-center gap-2 cursor-pointer"
        >
          <h1 className="text-primary-100 font-medium select-none">Keyboard</h1>

          {/* NEW → SELECTED KEYBOARD */}
          <span className="text-primary-200 text-sm select-none">
            {selectedKeyboard}
          </span>

          <div
            ref={keyboardRef}
            className="bg-primary-300 text-primary-800 rounded-lg flex overflow-hidden w-0"
          >
            {keyboards.map((keyboard) => {
              return (
                <button
                  onClick={() => {
                    setSelectedKeyboard(keyboard);
                  }}
                  className="hover:text-primary-100 cursor-pointer transition-all duration-150 px-2 py-1"
                  key={keyboard}
                >
                  {keyboard}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mode;
