"use client";

import Link from "next/link";
import React from "react";
import { useState, useEffect } from "react";
import ThemeSwitcher from "@/app/components/ThemeSwitcher";
import DropdownMenu from "@/app/components/Dropdown";

const Navbar = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 640px)");
    setIsSmallScreen(mediaQuery.matches);

    const handler = (event: MediaQueryListEvent) => {
      setIsSmallScreen(event.matches);
    };

    mediaQuery.addEventListener("change", handler);

    return () => {
      mediaQuery.removeEventListener("change", handler);
    };
  }, []);

  return (
    <header className="flex justify-center p-4 items-center border-b gap-4 dark:bg-gray-900">
      <div className="flex justify-between w-full xl:max-w-4xl">
        <Link
          href="http://localhost:3000"
          className="flex-none flex items-center"
        >
          <div className="mr-4 text-4xl">
            <div className="bg-purple-300 w-[50px] h-[50px] rounded-full flex items-center justify-center">
              👾
            </div>
          </div>
          <div className="text-left">
            <p className="text-2xl">Jonathan Young</p>
            <p className="text-s">Software Engineer</p>
          </div>
        </Link>
        <div className="flex items-center justify-between gap-4">
          {!isSmallScreen ? (
            <>
              <ThemeSwitcher />
              <Link
                href="http://localhost:3000/about"
                className="border border-transparent hover:border-gray-400 hover:brightness-110 p-1 rounded"
              >
                About Me
              </Link>
              <Link
                href="http://localhost:3000/resume"
                className="border border-transparent hover:border-gray-400 hover:brightness-110 p-1 rounded"
              >
                Resume
              </Link>
            </>
          ) : (
            <DropdownMenu />
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
