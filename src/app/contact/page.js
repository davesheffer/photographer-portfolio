"use client";

import images from "@/app/lib/images";
import Image from "next/image";
import { FaInstagram, FaFacebook, FaWhatsapp, FaEnvelope, FaPhone } from "react-icons/fa";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTranslations } from "@/lib/translations";

const Contact = () => {
    const { language, isRTL } = useLanguage();
    const t = useTranslations(language);

    return (
        <div className={`min-h-screen ${isRTL ? 'md:mr-[15vw]' : 'md:ml-[15vw]'} md:mt-0 mt-[7vh] bg-white`}>
            <div className="h-screen flex">
                <div className="w-full grid grid-cols-1 lg:grid-cols-10 min-h-screen">

                    {/* Image Side - 70% */}
                    <div className={`${isRTL ? 'lg:order-2 lg:col-span-7' : 'lg:order-1 lg:col-span-7'} relative`}>
                        <Image
                            src={images.people[0][0].images[0].src}
                            alt={language === 'he' ? 'נופר שפר - צלמת מקצועית' : 'Nofar Sheffer - Professional Photographer'}
                            className="w-full h-full object-cover"
                            width={800}
                            height={800}
                            quality={95}
                            priority
                        />
                    </div>

                    {/* Content Side - 30% */}
                    <div className={`${isRTL ? 'lg:order-1 lg:col-span-3' : 'lg:order-2 lg:col-span-3'} flex items-center justify-center p-8 bg-white`}>
                        <div className="w-full space-y-6">

                            {/* About */}
                            <div>
                                <p className="text-base text-gray-600 leading-relaxed">
                                    {t.aboutMe}
                                </p>
                            </div>

                            {/* Contact */}
                            <div className="space-y-3">
                                <div className="flex items-center gap-3 text-gray-700">
                                    <FaPhone className="text-sm" />
                                    <a href="https://wa.me/0522832144" className="hover:text-gray-900">
                                        0522832144
                                    </a>
                                </div>
                                <div className="flex items-center gap-3 text-gray-700">
                                    <FaEnvelope className="text-sm" />
                                    <a href="mailto:kuli.nof@gmail.com" className="hover:text-gray-900">
                                        kuli.nof@gmail.com
                                    </a>
                                </div>
                            </div>

                            {/* Services */}
                            <div>

                                <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                                    <span>{t.families}</span>
                                    <span>•</span>
                                    <span>{t.events}</span>
                                    <span>•</span>
                                    <span>{t.portraits}</span>
                                    <span>•</span>
                                    <span>{t.cars}</span>
                                </div>
                            </div>

                            {/* Social */}
                            <div className="flex gap-6">
                                <a
                                    href="https://www.instagram.com/nofikulu/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-400 hover:text-gray-600 transition-colors"
                                >
                                    <FaInstagram className="text-xl" />
                                </a>
                                <a
                                    href="https://www.facebook.com/profile.php?id=100076431135095"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-400 hover:text-gray-600 transition-colors"
                                >
                                    <FaFacebook className="text-xl" />
                                </a>
                                <a
                                    href="https://wa.me/0522832144"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-400 hover:text-gray-600 transition-colors"
                                >
                                    <FaWhatsapp className="text-xl" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
