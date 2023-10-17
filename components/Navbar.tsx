"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import hamburger from "/public/hamburger.svg";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-blue-500 py-1 px-4">
      <div className="container mx-auto flex justify-between items-center py-1 max-w-[1080px]">
        <Link href="/">
          <Image src="/logo.PNG" alt="Startek" className="w-12 h-12 inline" />{" "}
          <span className="font-bold px-2 text-center text-white">
            Startek AU
          </span>
        </Link>

        <div className="hidden md:flex justify-around space-x-4 text-white w-[40%]">
          <Link href="/blog">Blog</Link>
          <Link href="/tools">Tools</Link>
          <Link href="/contact">Contact</Link>
        </div>

        {/* Hamburger Menu */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            <Image src={hamburger} alt="menu" />
          </button>
        </div>
      </div>
      {/* Floating Box for Menu Items */}
      {menuOpen && (
        <div className="md:hidden flex flex-col gap-5 justify-between absolute text-center text-white top-50 mt-5 mr-2 right-2 bg-blue-500 w-36 px-2 py-5 rounded-2xl shadow-2xl">
          <Link href="/blog" className="hover:scale-110 hover:text-white-100">
            Blog
          </Link>
          <Link href="/tools" className="hover:scale-110 hover:text-white-100">
            Tools
          </Link>
          <Link
            href="/contact"
            className="hover:scale-110 hover:text-white-100"
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}
