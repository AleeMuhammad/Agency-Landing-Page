"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to toggle menu visibility

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState); // Toggle menu on button click
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false); // Close menu when a link is clicked
  };

  return (
    <div>
      <nav className="bg-white fixed w-full z-20 top-0 start-0 border-b border-gray-200 ">
        <div className="flex flex-wrap items-center justify-between mx-auto p-4">
          <Link href="/" className="flex items-center rtl:space-x-reverse">
            <Image src="/Ellipse 87.png" width={12} height={20} alt="Ellipse" />
            <Image src="/Polygon 1.png" width={12} height={20} alt="Polygon" />
            <span className="self-center font-[Helvetica] text-black text-2xl font-bold whitespace-nowrap">
              Embrace
            </span>
          </Link>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <button
              type="button"
              className="text-white bg-[#3461FF] px-5 py-3 rounded-3xl hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm text-center "
            >
              Book A Call
            </button>
            <button
              onClick={toggleMenu} // Toggle menu visibility on button click
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
              aria-controls="navbar-sticky"
              aria-expanded={isMenuOpen ? "true" : "false"} // Set aria-expanded based on menu state
            >
              <span className="sr-only">Open main menu</span>
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
          </div>
          <div
            className={`${
              isMenuOpen ? "block" : "hidden"
            } items-center justify-between w-full md:flex md:w-auto md:order-1`} // Conditional class to show/hide menu
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white ">
              <li>
                <Link
                  href="#"
                  className="block py-2 px-3 font-[General Sans Variable] font-medium text-[#000000]  rounded-sm md:bg-transparent  md:p-0 "
                  aria-current="page"
                  onClick={handleLinkClick} // Close menu on link click
                >
                  How It Works
                </Link>
              </li>
              <li>
                <Link
                  href="#ourwork"
                  className="block py-2 px-3 font-[General Sans Variable] font-medium text-[#000000] rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 0"
                  onClick={handleLinkClick} // Close menu on link click
                >
                  Our Work
                </Link>
              </li>
              <li>
                <Link
                  href="#team"
                  className="block py-2 px-3 font-[General Sans Variable] font-medium text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 "
                  onClick={handleLinkClick} // Close menu on link click
                >
                  Team
                </Link>
              </li>
              <li>
                <Link
                  href="#Companies"
                  className="block py-2 px-3 font-[General Sans Variable] font-medium text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 "
                  onClick={handleLinkClick} // Close menu on link click
                >
                  About Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
