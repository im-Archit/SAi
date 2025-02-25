"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useAuth, UserButton } from "@clerk/nextjs";
import { useClerk } from "@clerk/clerk-react";

type NavLinkProps = {
  href: string;
  children: React.ReactNode;
};

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { isSignedIn, userId } = useAuth();
  const { openSignIn } = useClerk();

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleAuthClick = () => {
    if (!isSignedIn) {
      openSignIn();
    }
  };

  // if (!mounted) {
  //   return null; // or a loading placeholder
  // }0D7670
  if (!mounted) {
    return <nav className="top-0 z-50 bg-[#8CFBF5] bg-opacity-400 backdrop-blur-sm"></nav>;
  }
  

  return (
    <nav className="top-0 z-50 bg-teal-900 bg-opacity-900 backdrop-blur-sm">
      <div className="flex flex-wrap items-center justify-between p-3">
        <Link href="https://squeakyai.com/" className="flex items-left">
          <Image
            src="/SqueakyLogo.png"
            alt="SqueakyAI Logo"
            width={200}
            height={70}
            className="h-20 w-auto object-contain"
          />
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-white rounded-lg md:hidden hover:bg-opacity-20"
        >
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>

        {/* Navigation Links */}
        <div className={`${menuOpen ? "block" : "hidden"} w-full md:block md:w-auto ml-auto`}>
          <ul className="font-large flex flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-8 md:mt-0">
            <NavLink href="#features">Features</NavLink>
            <NavLink href="#demo">Demo</NavLink>
            <NavLink href="#enterprise">Enterprise</NavLink>
            <NavLink href="#technology">Technology</NavLink>
            <li>
              <Button
                variant="outline"
                className="text-[#1D7364] border-white hover:bg-[white] hover:text-[#4BC59C]"
              >
                Contact Sales
              </Button>
            </li>
            <li>
              {isSignedIn ? (
                <UserButton afterSignOutUrl="/" />
              ) : (
                <Button
                  variant="outline"
                  className="text-[#1D7364] border-white hover:bg-[white] hover:text-[#4BC59C]"
                  onClick={handleAuthClick}
                >
                  Login/Signup
                </Button>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

function NavLink({ href, children }: NavLinkProps) {
  return (
    <li>
      <Link
        href={href}
        className="block py-2 px-3 text-white text-lg font-semibold rounded-md hover:bg-opacity-20"
      >
        {children}
      </Link>
    </li>
  );
}