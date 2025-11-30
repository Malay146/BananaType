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
        duration: 0.6,
        opacity: isOpen ? 1 : 0,
        pointerEvents: isOpen ? "all" : "none",
        ease: "elastic.out(1, 0.75)",
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
          className="opacity-0 pointer-events-none flex items-center gap-5 bg-primary-800 px-5 py-2 rounded-full text-primary-100 overflow-hidden"
        >
          {links.map((item) => (
            <Link
              onClick={toggleMenu}
              href={item.href}
              key={item.label}
              className="relative overflow-hidden after:content-[''] after:absolute after:w-full after:h-px after:bg-primary-100 after:bottom-[10%] after:rounded-2xl after:left-[-50%] hover:after:left-1/2 after:transform after:-translate-x-1/2 after:transition-all after:duration-300"
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
