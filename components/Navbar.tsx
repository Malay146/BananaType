"use client";
import React, { useState } from "react";
import Logo from "./Icons/Logo";
import MenuIcon from "./Icons/MenuIcon";
import Link from "next/link";
import CloseIcon from "./Icons/CloseIcon";
import VolumeOn from "./Icons/VolumeOn";
import VolumeOff from "./Icons/VolumeOff";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isMuted, setIsMuted] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleSpeaker = () => {
    setIsMuted(!isMuted);
  };

  const links = [
    { href: "#", label: "Profile" },
    { href: "#", label: "Settings" },
    { href: "#", label: "Dashboard" },
    { href: "#", label: "Leaderboard" },
    { href: "#", label: "Multiplayer" },
  ];
  return (
    <div className="w-full md:max-w-6xl mx-auto flex items-center justify-between p-6">
      <Logo className="w-50 h-auto text-primary-800 cursor-pointer" />

      <div className="flex items-center gap-3">
        {isOpen ? (
          <div className="flex items-center gap-4 bg-primary-800 px-5 py-2 rounded-full text-primary-100">
            {links.map((item) => (
              <Link href={item.href} key={item.label}>
                {item.label}
              </Link>
            ))}
          </div>
        ) : null}

        <button
          onClick={toggleMenu}
          className="rounded-full p-2 cursor-pointer bg-primary-800"
        >
          {!isOpen ? (
            <MenuIcon className="size-6 text-primary-100" />
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
