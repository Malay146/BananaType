"use client";
import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

const Mode = () => {
  const [modeToggle, setModeToggle] = React.useState(false);
  const [setsToggle, setSetsToggle] = React.useState(false);
  const [keyboardToggle, setKeyboardToggle] = React.useState(false);

  const modes = ["Time", "Words", "Quote", "Code"];
  const sets = ["15s", "30s", "60s", "120s"];
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
      <div className="flex items-center gap-1 bg-primary-800 rounded-2xl ">
        <div
          onClick={() => setModeToggle(!modeToggle)}
          className="flex justify-center items-center gap-2 pl-4 py-2 cursor-pointer"
        >
          <h1 className="text-primary-100 font-medium cursor-pointer select-none">
            Mode
          </h1>
          <div
            ref={modeInRef}
            className="bg-primary-300 text-primary-800 rounded-lg flex overflow-hidden w-0"
          >
            {modes.map((mode) => {
              return (
                <button
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
        <div
          onClick={() => setSetsToggle(!setsToggle)}
          className="flex justify-center items-center gap-2 cursor-pointer px-2 py-2"
        >
          <h1 className="text-primary-100 font-medium select-none">
            Sets
          </h1>
          <div
            ref={setInRef}
            className="bg-primary-300 text-primary-800 rounded-lg flex overflow-hidden w-0"
          >
            {sets.map((set) => {
              return (
                <button
                  className="hover:text-primary-100 cursor-pointer transition-all duration-150 px-2 py-1"
                  key={set}
                >
                  {set}
                </button>
              );
            })}
          </div>
        </div>
      </div>
      <div className="flex items-center bg-primary-800 rounded-2xl pl-4 pr-2 py-2">
        <div
          onClick={() => setKeyboardToggle(!keyboardToggle)}
          className="flex justify-center items-center gap-2 cursor-pointer"
        >
          <h1 className="text-primary-100 font-medium cursor-pointer select-none">
            Keyboard
          </h1>
          <div
            ref={keyboardRef}
            className="bg-primary-300 text-primary-800 rounded-lg flex overflow-hidden w-0"
          >
            {keyboards.map((keyboard) => {
              return (
                <button
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
