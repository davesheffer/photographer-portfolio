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
import { useLanguage } from "@/contexts/LanguageContext";
import { useTranslations } from "@/lib/translations";
import LanguageSwitcher from "./LanguageSwitcher";


const Navigation = ({ amatic }) => {
  const currentPath = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, isRTL } = useLanguage();
  const t = useTranslations(language);
  
  const handleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Fallback values in case translations aren't loaded yet
  const fallbackTranslations = {
    home: language === 'en' ? 'Home' : 'בית',
    galleries: language === 'en' ? 'Galleries' : 'גלריות',
    blog: language === 'en' ? 'Blog' : 'בלוג',
    contact: language === 'en' ? 'Contact' : 'צור קשר',
    contactUs: language === 'en' ? 'Contact Us' : 'צרו קשר',
    phone: language === 'en' ? 'Phone' : 'נייד',
    email: language === 'en' ? 'Email' : 'מייל'
  };

  const translations = t || fallbackTranslations;
  return (
    <>
      <header className={`shadow-md backdrop-blur-sm bg-white/95 lg:hidden App-header fixed top-0 ${isRTL ? 'right-0' : 'left-0'} h-[calc(10dvh)] flex items-center gap-10 ${isRTL ? 'border-l-4' : 'border-r-4'} border-rose-500 w-full z-10`}>
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
              {language === 'he' ? 'נופר שפר' : 'Nofar Shafer'}
            </h1>

            </div>
          </Link>
        </div>
        <div
          id="nav"
          className={`fixed shadow-xl bg-white top-0 ${isRTL ? 'right-0' : 'left-0'} h-[calc(100dvh)] ${
            isMenuOpen ? "w-[70vw] max-w-sm" : (isRTL ? "translate-x-full" : "-translate-x-full")
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
                    {language === 'he' ? 'נופר שפר' : 'Nofar Shafer'}
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
                  {translations.home}
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
                  {translations.galleries}
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
                  {translations.blog}
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
                  {translations.contact}
                </Link>
              </nav>
            </div>

            {/* Contact Section */}
            <div className="border-t border-gray-100 pt-6">
              <div className="mb-4">
                <h2 className="text-rose-500 font-semibold text-lg mb-3">{translations.contactUs}</h2>
                <div className="space-y-2 text-gray-600">
                  <p className="flex items-center gap-2">
                    <span className="text-sm">{translations.phone}:</span>
                    <a 
                      href="https://wa.me/0522832144" 
                      className="hover:text-rose-500 transition-colors duration-200 font-medium"
                    >
                      0522832144
                    </a>
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="text-sm">{translations.email}:</span>
                    <a 
                      href="mailto:kuli.nof@gmail.com"
                      className="hover:text-rose-500 transition-colors duration-200 font-medium text-sm"
                    >
                      kuli.nof@gmail.com
                    </a>
                  </p>
                </div>
              </div>
              
              {/* Language Switcher & Social Media */}
              <div className="flex items-center justify-between pt-4">
                <LanguageSwitcher />
                <div className="flex gap-3">
                  <a 
                    href="https://www.instagram.com/nofikulu/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-rose-50 text-rose-500 hover:bg-rose-100 hover:scale-110 transition-all duration-200"
                  >
                    <FaInstagram className="text-lg" />
                  </a>
                  <a 
                    href="https://www.facebook.com/profile.php?id=100076431135095" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-rose-50 text-rose-500 hover:bg-rose-100 hover:scale-110 transition-all duration-200"
                  >
                    <FaFacebook className="text-lg" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <header className={`hidden App-header fixed h-screen lg:flex flex-col justify-between gap-10 pt-14 bg-white px-12 ${isRTL ? 'border-l-4 right-0' : 'border-r-4 left-0'} border-rose-500 w-[15vw] shadow-sm`}>
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
                {language === 'he' ? 'נופר שפר' : 'Nofar Shafer'}
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
              {translations.home}
            </Link>
            <Link
              href="/gallery/people"
              className={`text-gray-700 hover:text-rose-500 transition-colors duration-200 ${
                currentPath === "/gallery/people" && "text-rose-500"
              }`}
            >
              {translations.galleries}
            </Link>

            <Link
              href="/blog"
              className={`text-gray-700 hover:text-rose-500 transition-colors duration-200 ${
                currentPath === "/blog" && "text-rose-500"
              }`}
            >
              {translations.blog}
            </Link>

            <Link
              href="/contact"
              className={`text-gray-700 hover:text-rose-500 transition-colors duration-200 ${
                currentPath === "/contact" && "text-rose-500"
              }`}
            >
              {translations.contact}
            </Link>

          </div>
        </div>
        <div id="contact-details" className="flex flex-col gap-2">
          <div className="flex flex-col gap-2">
            <h2 className="text-rose-500 text-xl">{translations.contactUs}</h2>
            <div>
              <p>{translations.phone}: <a href="https://wa.me/0522832144">0522832144</a></p>
              <p>{translations.email}: kuli.nof@gmail.com</p>
            </div>
          </div>
          <div className="flex items-center justify-between pb-6 border-t-2 pt-4">
            <LanguageSwitcher />
            <div className="flex gap-3">
              <Link href="https://www.instagram.com/nofikulu/" target="_blank">
                <FaInstagram className="cursor-pointer hover:scale-110 transition-transform duration-200 text-xl text-rose-500" />
              </Link>
              <Link href="https://www.facebook.com/profile.php?id=100076431135095" target="_blank">
                <FaFacebook className="cursor-pointer hover:scale-110 transition-transform duration-200 text-xl text-rose-500" />
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navigation;
