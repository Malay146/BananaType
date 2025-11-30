"use client";
import React, { useRef, useState } from "react";
import Logo from "./Icons/Logo";
import MenuIcon from "./Icons/MenuIcon";
import Link from "next/link";
import CloseIcon from "./Icons/CloseIcon";
import VolumeOn from "./Icons/VolumeOn";
import VolumeOff from "./Icons/VolumeOff";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isMuted, setIsMuted] = useState<boolean>(false);

  const settingRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleSpeaker = () => {
    setIsMuted(!isMuted);
  };

  useGSAP(
    () => {
      if (!settingRef.current) return;

      gsap.to(settingRef.current, {
        duration: 0.3,
        pointerEvents: isOpen ? "all" : "none",
        ease: "power3.out",
        width: isOpen ? "auto" : 0,
      });
    },
    { dependencies: [isOpen] }
  );

  const links = [
    { href: "#", label: "Profile" },
    { href: "#", label: "Settings" },
    { href: "#", label: "Dashboard" },
    { href: "#", label: "Leaderboard" },
    { href: "#", label: "Multiplayer" },
  ];
  return (
    <div className="w-full md:max-w-6xl mx-auto flex items-center justify-between p-6">
      <Link href="/">
        <Logo className="w-50 h-auto text-primary-800 cursor-pointer" />
      </Link>

      <div className="flex items-center gap-3">
        <div
          ref={settingRef}
          className="opacity-100 pointer-events-none flex items-center justify-between bg-primary-800 rounded-2xl text-primary-100 overflow-hidden divide-primary-100 flex-nowrap"
        >
          {links.map((item) => (
            <Link
              onClick={toggleMenu}
              href={item.href}
              key={item.label}
              className="hover:text-primary-300 transition-all duration-200 px-4 py-2 cursor-pointer select-none"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <button
          onClick={toggleMenu}
          className="rounded-full p-2 cursor-pointer bg-primary-800"
        >
          {!isOpen ? (
            <MenuIcon className="Menu size-6 text-primary-100" />
          ) : (
            <CloseIcon className="size-6 text-primary-100" />
          )}
        </button>

        <button
          onClick={toggleSpeaker}
          className="rounded-full p-2 cursor-pointer bg-primary-800"
        >
          {!isMuted ? (
            <VolumeOn className="size-6 text-primary-100" />
          ) : (
            <VolumeOff className="size-6 text-primary-100" />
          )}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
