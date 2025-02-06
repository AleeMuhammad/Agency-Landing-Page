"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter(); // Get router instance
  const pathname = usePathname(); // Get current route

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  const handleLinkClick = (section) => {
    setIsMenuOpen(false);
    if (pathname === "/contactus") {
      router.push(`/#${section}`); // Navigate back to the landing page with the section
    } else {
      document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="bg-white w-full z-20 top-0 start-0 border-b border-gray-200">
      <div className="flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="/" className="flex items-center rtl:space-x-reverse">
          <Image src="/Ellipse 87.png" width={12} height={20} alt="Ellipse" />
          <Image src="/Polygon 1.png" width={12} height={20} alt="Polygon" />
          <span className="self-center font-[Helvetica] text-black text-2xl font-bold whitespace-nowrap">
            Embrace
          </span>
        </Link>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <Link href="/contactus">
            <button className="text-white bg-[#3461FF] px-5 py-3 rounded-3xl hover:bg-blue-800 font-medium text-sm text-center">
              Book A Call
            </button>
          </Link>
          <button
            onClick={toggleMenu}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="navbar-sticky"
            aria-expanded={isMenuOpen ? "true" : "false"}
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
          } items-center justify-between w-full md:flex md:w-auto md:order-1`}
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white">
            <li>
              <button
                onClick={() => handleLinkClick("howitworks")}
                className="block py-2 px-3 font-[General Sans Variable] font-medium text-[#000000] rounded-sm md:bg-transparent md:p-0"
              >
                How It Works
              </button>
            </li>
            <li>
              <button
                onClick={() => handleLinkClick("ourwork")}
                className="block py-2 px-3 font-[General Sans Variable] font-medium text-[#000000] rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:p-0"
              >
                Our Work
              </button>
            </li>
            <li>
              <button
                onClick={() => handleLinkClick("team")}
                className="block py-2 px-3 font-[General Sans Variable] font-medium text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:p-0"
              >
                Team
              </button>
            </li>
            <li>
              <button
                onClick={() => handleLinkClick("Companies")}
                className="block py-2 px-3 font-[General Sans Variable] font-medium text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent  md:p-0"
              >
                About Us
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
