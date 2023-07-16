'use client'

import { useState } from "react";
import Link from "next/link";

// assets
import { Bars3Icon } from '@heroicons/react/24/solid';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="fixed top-0 w-full bg-gradient-to-r from-indigo-500 via-pink-500 to-purple-500 z-50">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <Link href="/" className="text-white text-xl font-bold flex items-center">
          <img src="/gift.svg" alt="" className="w-8" /> <span className="ml-2 mt-1">Giftify</span>
        </Link>
        <div className="hidden md:block">
          <ul className="flex space-x-4 text-white">
            <li>
              <Link
                href="/"
                className="hover:text-gray-600 transition-colors duration-500"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/documentation"
                className="hover:text-gray-600 transition-colors duration-500"
                target="_blank"
              >
                Documentation
              </Link>
            </li>
            <li>
              <Link
                href="/status"
                className="hover:text-gray-600 transition-colors duration-500"
                target="_blank"
              >
                Status
              </Link>
            </li>
            <li>
              <Link
                href="/invite"
                className="hover:text-gray-600 transition-colors duration-500"
                target="_blank"
              >
                Invite
              </Link>
            </li>
            <li>
              <Link
                href="/support"
                className="hover:text-gray-600 transition-colors duration-500"
                target="_blank"
              >
                Support
              </Link>
            </li>
          </ul>
        </div>
        <button className="md:hidden" onClick={toggleDropdown}>
          <Bars3Icon className="w-8 text-white"/>
        </button>
      </div>
      {isDropdownOpen && (
        <div className="md:hidden absolute left-0 right-0 top-full rounded-lg shadow-lg bg-gradient-to-r from-indigo-500 via-pink-500 to-purple-500 text-white">
          <ul className="px-4  bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg">
            <li>
              <Link
                href="/"
                className="block py-1 hover:text-gray-800 transition-colors duration-500"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/documentation"
                className="block py-1 hover:text-gray-800 transition-colors duration-500"
                target="_blank"
              >
                Documentation
              </Link>
            </li>
            <li>
              <Link
                href="/status"
                className="block py-1 hover:text-gray-800 transition-colors duration-500"
                target="_blank"
              >
                Status
              </Link>
            </li>
            <li>
              <Link
                href="/invite"
                className="block py-1 hover:text-gray-800 transition-colors duration-500"
                target="_blank"
              >
                Invite
              </Link>
            </li>
            <li>
              <Link
                href="/support"
                className="block py-1 hover:text-gray-800 transition-colors duration-500"
                target="_blank"
              >
                Support
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
