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
  console.log(currentPath);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
      <header className=" shadow-lg lg:hidden App-header fixed top-0 right-0 h-[calc(10dvh)] flex items-center gap-10 bg-white border-l-4 w-full z-10">
        <div className="px-4 flex items-center gap-4">
          {!isMenuOpen && (
            <CiMenuFries
              onClick={handleMenu}
              className="text-rose-500 text-4xl cursor-pointer"
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
            <h3 >צלמת ואמנית ויזואלית</h3>
            </div>
          </Link>
        </div>
        <div
          id="nav"
          className={`fixed shadow-2xl top-0 right-0 h-[calc(100dvh)] ${
            isMenuOpen ? "w-[60vw]" : " translate-x-[60vw]"
          } transition-all bg-white px-4 pt-4`}
        >
          <div className="flex flex-col justify-between h-full">
            <div className="flex flex-col gap-10">
              <div className="flex items-center gap-4 h-[70px]">
                {isMenuOpen && (
                  <IoMdClose
                    onClick={handleMenu}
                    className="text-rose-500 text-4xl cursor-pointer"
                    width={50}
                    height={50}
                  />
                )}
                <Link
                  className={`flex gap-4 items-center relative `}
                  href="/"
                  onClick={handleMenu}
                >
                  <Image
                    src={logo}
                    className="App-logo w-auto md:h-10 h-7"
                    alt="logo"
                  />
                  <div>
                    <h1 className={`font-amatic text-3xl ${amatic.className}`}>
                      נופר שפר
                    </h1>
                    <h3>צלמת ואמנית ויזואלית</h3>
                  </div>
                </Link>
              </div>
              <div className="flex flex-col gap-6 text-md">
                <Link
                  href="/"
                  onClick={handleMenu}
                  className={`text-black hover:text-rose-500  ${
                    currentPath === "/" && "text-rose-500"
                  }`}
                >
                  בית
                </Link>
                <Link
                  href="/gallery/people"
                  onClick={handleMenu}
                  className={`text-black hover:text-rose-500 ${
                    currentPath === "/gallery/people" && "text-rose-500"
                  }`}
                >
                  גלריות
                </Link>
                
                <Link
                  href="/blog"
                  onClick={handleMenu}
                  className={`text-black hover:text-rose-500 ${
                    currentPath === "/blog" && "text-rose-500"
                  }`}
                >
                  בלוג
                </Link>
                <Link
                  href="/contact"
                  onClick={handleMenu}
                  className={`text-black hover:text-rose-500 ${
                    currentPath === "/contact" && "text-rose-500"
                  }`}
                >
                  צור קשר
                </Link>
              </div>
            </div>

            <div id="contact-details" className="flex flex-col gap-2">
              <div className="flex flex-col">
                <h2 className="text-rose-500">צרו קשר</h2>
                <p>נייד: 052-1234567</p>
                <p>מייל:kuli.nof@gmail.com</p>
              </div>
              <div className="flex gap-8 *:text-2xl pb-10 *:text-rose-500">
                <FaInstagram />
                <FaFacebook />
              </div>
            </div>
          </div>
        </div>
      </header>

      <header className=" hidden App-header fixed h-screen lg:flex flex-col justify-between gap-10 pt-14 bg-white px-12 border-l-4 w-[15vw]">
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
              <h1 className={`font-amatic text-6xl ${amatic.className}`}>
                נופר שפר
              </h1>
              <h3 className="text-2xl">צלמת ואמנית ויזואלית</h3>
            </div>
          </Link>
          <div className="flex flex-col gap-6 text-xl">
            <Link
              href="/"
              className={`text-black hover:text-rose-500 ${
                currentPath === "/" && "text-rose-500"
              }`}
            >
              בית
            </Link>
            <Link
              href="/gallery/people"
              className={`text-black hover:text-rose-500 ${
                currentPath === "/gallery/people" && "text-rose-500"
              }`}
            >
              גלריות
            </Link>
            
            <Link
              href="/blog"
              className={`text-black hover:text-rose-500 ${
                currentPath === "/blog" && "text-rose-500"
              }`}
            >
              בלוג
            </Link>
            <Link
              href="/contact"
              className={`text-black hover:text-rose-500 ${
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
              <p>נייד: 052-2832144</p>
              <p>מייל:kuli.nof@gmail.com</p>
            </div>
          </div>
          <div className="flex gap-6 *:text-2xl pb-10  *:text-rose-500b  border-t-2">
            <div className="py-3 flex gap-4">
              <FaInstagram className="cursor-pointer" />
              <FaFacebook className="cursor-pointer" />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navigation;
