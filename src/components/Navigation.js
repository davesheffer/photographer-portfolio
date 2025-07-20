"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import logo from "/public/logo.png";
import { CiMenuFries } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";


const Navigation = ({ amatic }) => {
  const currentPath = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
      <header className="shadow-md backdrop-blur-sm bg-white/95 lg:hidden App-header fixed top-0 right-0 h-[calc(10dvh)] flex items-center gap-10 border-l-4 border-rose-500 w-full z-10">
        <div className="px-4 flex items-center gap-4">
          {!isMenuOpen && (
            <CiMenuFries
              onClick={handleMenu}
              className="text-rose-500 hover:text-rose-600 text-4xl cursor-pointer transition-colors duration-200"
              width={30}
              height={50}
            />
          )}
          <Link className={`flex gap-4 items-center relative`} href="/">
            <Image
              src={logo}
              className="App-logo w-auto md:h-10 h-12"
              alt="logo"
              width={100}
              height={100}
            />
            <div>
            <h1 className={`font-amatic text-4xl ${amatic.className}`}>
              נופר שפר
            </h1>

            </div>
          </Link>
        </div>
        <div
          id="nav"
          className={`fixed shadow-xl bg-white top-0 right-0 h-[calc(100dvh)] ${
            isMenuOpen ? "w-[70vw] max-w-sm" : " translate-x-full"
          } transition-all duration-300 ease-in-out z-20`}
        >
          <div className="flex flex-col justify-between h-full p-6">
            <div className="flex flex-col">
              {/* Header with close button */}
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-gray-100">
                <Link
                  className="flex gap-3 items-center"
                  href="/"
                  onClick={handleMenu}
                >
                  <Image
                    src={logo}
                    className="w-auto h-8"
                    alt="logo"
                    width={50}
                    height={50}
                  />
                  <h1 className={`font-amatic text-2xl text-gray-800 ${amatic.className}`}>
                    נופר שפר
                  </h1>
                </Link>
                {isMenuOpen && (
                  <IoMdClose
                    onClick={handleMenu}
                    className="text-gray-400 hover:text-rose-500 text-3xl cursor-pointer transition-colors duration-200"
                  />
                )}
              </div>

              {/* Navigation Links */}
              <nav className="flex flex-col gap-1">
                <Link
                  href="/"
                  onClick={handleMenu}
                  className={`py-3 px-4 rounded-lg text-lg font-medium transition-all duration-200 ${
                    currentPath === "/" 
                      ? "text-rose-500 bg-rose-50" 
                      : "text-gray-700 hover:text-rose-500 hover:bg-gray-50"
                  }`}
                >
                  בית
                </Link>
                <Link
                  href="/gallery/people"
                  onClick={handleMenu}
                  className={`py-3 px-4 rounded-lg text-lg font-medium transition-all duration-200 ${
                    currentPath === "/gallery/people" 
                      ? "text-rose-500 bg-rose-50" 
                      : "text-gray-700 hover:text-rose-500 hover:bg-gray-50"
                  }`}
                >
                  גלריות
                </Link>
                <Link
                  href="/blog"
                  onClick={handleMenu}
                  className={`py-3 px-4 rounded-lg text-lg font-medium transition-all duration-200 ${
                    currentPath === "/blog" 
                      ? "text-rose-500 bg-rose-50" 
                      : "text-gray-700 hover:text-rose-500 hover:bg-gray-50"
                  }`}
                >
                  בלוג
                </Link>
                <Link
                  href="/contact"
                  onClick={handleMenu}
                  className={`py-3 px-4 rounded-lg text-lg font-medium transition-all duration-200 ${
                    currentPath === "/contact" 
                      ? "text-rose-500 bg-rose-50" 
                      : "text-gray-700 hover:text-rose-500 hover:bg-gray-50"
                  }`}
                >
                  צור קשר
                </Link>
              </nav>
            </div>

            {/* Contact Section */}
            <div className="border-t border-gray-100 pt-6">
              <div className="mb-4">
                <h2 className="text-rose-500 font-semibold text-lg mb-3">צרו קשר</h2>
                <div className="space-y-2 text-gray-600">
                  <p className="flex items-center gap-2">
                    <span className="text-sm">נייד:</span>
                    <a 
                      href="https://wa.me/0522832144" 
                      className="hover:text-rose-500 transition-colors duration-200 font-medium"
                    >
                      0522832144
                    </a>
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="text-sm">מייל:</span>
                    <a 
                      href="mailto:kuli.nof@gmail.com"
                      className="hover:text-rose-500 transition-colors duration-200 font-medium text-sm"
                    >
                      kuli.nof@gmail.com
                    </a>
                  </p>
                </div>
              </div>
              
              {/* Social Media */}
              <div className="flex gap-4 justify-center pt-4">
                <a 
                  href="https://www.instagram.com/nofikulu/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-rose-50 text-rose-500 hover:bg-rose-100 hover:scale-110 transition-all duration-200"
                >
                  <FaInstagram className="text-xl" />
                </a>
                <a 
                  href="https://www.facebook.com/profile.php?id=100076431135095" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-rose-50 text-rose-500 hover:bg-rose-100 hover:scale-110 transition-all duration-200"
                >
                  <FaFacebook className="text-xl" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      <header className="hidden App-header fixed h-screen lg:flex flex-col justify-between gap-10 pt-14 bg-white px-12 border-l-4 border-rose-500 w-[15vw] shadow-sm">
        <div id="main" className="flex gap-10 flex-col">
          <Link className="flex gap-4 items-center relative" href="/">
            <Image
              src={logo}
              className="App-logo w-auto h-16"
              alt="logo"
              width={50}
              height={50}
            />
            <div>
              <h1 className={`font-amatic text-4xl ${amatic.className}`}>
                נופר שפר
              </h1>

            </div>
          </Link>
          <div className="flex flex-col gap-6 text-MD">
            <Link
              href="/"
              className={`text-gray-700 hover:text-rose-500 transition-colors duration-200 ${
                currentPath === "/" && "text-rose-500"
              }`}
            >
              בית
            </Link>
            <Link
              href="/gallery/people"
              className={`text-gray-700 hover:text-rose-500 transition-colors duration-200 ${
                currentPath === "/gallery/people" && "text-rose-500"
              }`}
            >
              גלריות
            </Link>

            <Link
              href="/blog"
              className={`text-gray-700 hover:text-rose-500 transition-colors duration-200 ${
                currentPath === "/blog" && "text-rose-500"
              }`}
            >
              בלוג
            </Link>

            <Link
              href="/contact"
              className={`text-gray-700 hover:text-rose-500 transition-colors duration-200 ${
                currentPath === "/contact" && "text-rose-500"
              }`}
            >
              צור קשר
            </Link>

          </div>
        </div>
        <div id="contact-details" className="flex flex-col gap-2">
          <div className="flex flex-col gap-2">
            <h2 className="text-rose-500 text-xl">צרו קשר</h2>
            <div>
              <p>נייד: <a href="https://wa.me/0522832144">0522832144</a></p>
              <p>מייל:kuli.nof@gmail.com</p>
            </div>
          </div>
          <div className="flex gap-6 *:text-2xl pb-10  *:text-rose-500b  border-t-2">
            <div className="py-3 flex gap-4">
            <Link href="https://www.instagram.com/nofikulu/" target="_blank">
              
              <FaInstagram className="cursor-pointer hover:scale-110 transition-transform duration-200" />
              </Link>
              <Link href="https://www.facebook.com/profile.php?id=100076431135095" target="_blank">
              <FaFacebook className="cursor-pointer hover:scale-110 transition-transform duration-200" />
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navigation;
