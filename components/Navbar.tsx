"use client"
import React, { useState } from 'react';
import { useTheme } from 'next-themes';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const toggleNav = () => {
    setIsOpen(!isOpen);
  }
  return (
    <nav className="bg-gray-900 text-white py-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-2xl font-bold">Startek</div>
        <div className="hidden md:flex space-x-4">
          <Link href="/blog" className="hover:text-gray-500">Blog</Link>
          <Link href="/tools" className="hover:text-gray-500">Tools</Link>
          <Link href="/contact" className="hover:text-gray-500">Contact</Link>
        </div>
        <div className="md:hidden">
          <button onClick={toggleNav}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-6 h-6">
              {isOpen ? (
                <line x1="3" y1="12" x2="21" y2="12" />
              ) : (
                <>
                <line x1="3" y1="3" x2="21" y2="3" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="21" x2="21" y2="21" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
