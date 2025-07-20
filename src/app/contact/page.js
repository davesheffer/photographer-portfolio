import images from "@/app/lib/images";
import Image from "next/image";
import { FaInstagram, FaFacebook, FaWhatsapp, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
    return (
        <div className="min-h-screen md:mr-[15vw] md:mt-0 mt-[7vh] bg-gradient-to-br from-rose-50 to-white">
            {/* Hero Section */}
            <div className="relative overflow-hidden bg-white shadow-sm">
                <div className="max-w-7xl mx-auto px-6 py-16">
                    <div className="text-center mb-12">
                        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
                            בואו נכיר
                        </h1>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            יש לכם רעיון לצילום? בואו נדבר ונראה איך אפשר להגשים אותו
                        </p>
                        <div className="mt-8 w-24 h-1 bg-rose-500 mx-auto rounded-full"></div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    
                    {/* Contact Information */}
                    <div className="space-y-8">
                        {/* About Section */}
                        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                            <div className="mb-6">
                                <h2 className="text-3xl font-bold text-gray-900 mb-4">נופר שפר</h2>
                                <p className="text-lg text-gray-600 leading-relaxed">
                                    אני אוהבת לתפוס רגעים - אלה שקורים מהר ואלה שנמשכים לנצח. 
                                    בין אם זה חתונה, בר מצווה או סתם יום רגיל שהפך למיוחד.
                                </p>
                            </div>
                            
                            <div className="w-full h-px bg-gradient-to-r from-rose-200 via-rose-500 to-rose-200 mb-6"></div>
                            
                            {/* Contact Details */}
                            <div className="space-y-4">
                                <div className="flex items-center gap-4 p-4 bg-rose-50 rounded-xl hover:bg-rose-100 transition-colors">
                                    <div className="w-12 h-12 bg-rose-500 rounded-full flex items-center justify-center">
                                        <FaPhone className="text-white text-lg" />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-gray-900">טלפון</p>
                                        <a 
                                            href="https://wa.me/0522832144" 
                                            className="text-rose-600 hover:text-rose-700 font-medium transition-colors"
                                        >
                                            0522832144
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4 p-4 bg-rose-50 rounded-xl hover:bg-rose-100 transition-colors">
                                    <div className="w-12 h-12 bg-rose-500 rounded-full flex items-center justify-center">
                                        <FaEnvelope className="text-white text-lg" />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-gray-900">אימייל</p>
                                        <a 
                                            href="mailto:kuli.nof@gmail.com"
                                            className="text-rose-600 hover:text-rose-700 font-medium transition-colors"
                                        >
                                            kuli.nof@gmail.com
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4 p-4 bg-rose-50 rounded-xl">
                                    <div className="w-12 h-12 bg-rose-500 rounded-full flex items-center justify-center">
                                        <FaMapMarkerAlt className="text-white text-lg" />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-gray-900">אזור</p>
                                        <p className="text-gray-600">ישראל</p>
                                    </div>
                                </div>
                            </div>

                            {/* Social Media */}
                            <div className="mt-8">
                                <h3 className="text-lg font-semibold text-gray-900 mb-4">בואו תעקבו</h3>
                                <div className="flex gap-4">
                                    <a 
                                        href="https://www.instagram.com/nofikulu/" 
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform duration-200 shadow-lg"
                                    >
                                        <FaInstagram className="text-lg" />
                                    </a>
                                    <a 
                                        href="https://www.facebook.com/profile.php?id=100076431135095" 
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform duration-200 shadow-lg"
                                    >
                                        <FaFacebook className="text-lg" />
                                    </a>
                                    <a 
                                        href="https://wa.me/0522832144" 
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform duration-200 shadow-lg"
                                    >
                                        <FaWhatsapp className="text-lg" />
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Services Section */}
                        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">מה אני צולמת</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="p-4 bg-rose-50 rounded-xl">
                                    <h4 className="font-semibold text-gray-900 mb-2">משפחות</h4>
                                    <p className="text-sm text-gray-600">הרגעים הקטנים והגדולים</p>
                                </div>
                                <div className="p-4 bg-rose-50 rounded-xl">
                                    <h4 className="font-semibold text-gray-900 mb-2">אירועים</h4>
                                    <p className="text-sm text-gray-600">חתונות, בר מצוות וחגיגות</p>
                                </div>
                                <div className="p-4 bg-rose-50 rounded-xl">
                                    <h4 className="font-semibold text-gray-900 mb-2">פורטרטים</h4>
                                    <p className="text-sm text-gray-600">כי כל אחד יפה בדרך שלו</p>
                                </div>
                                <div className="p-4 bg-rose-50 rounded-xl">
                                    <h4 className="font-semibold text-gray-900 mb-2">רכבים</h4>
                                    <p className="text-sm text-gray-600">כשהמכונית היא הכוכבת</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Profile Image */}
                    <div className="relative">
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                            <Image 
                                src={images.people[0][0].images[0].src} 
                                alt="נופר שפר - צלמת מקצועית" 
                                className="w-full h-[600px] object-cover"
                                width={600}
                                height={600}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                        </div>
                        
                        {/* Floating Contact Card */}
                        <div className="absolute -bottom-8 left-8 right-8 bg-white rounded-xl p-6 shadow-xl border border-gray-100">
                            <div className="text-center">
                                <h3 className="text-xl font-bold text-gray-900 mb-2">יש לכם רעיון?</h3>
                                <p className="text-gray-600 mb-4">בואו נדבר ונראה איך להגשים אותו</p>
                                <a 
                                    href="https://wa.me/0522832144" 
                                    className="inline-flex items-center gap-2 bg-rose-500 text-white px-6 py-3 rounded-full hover:bg-rose-600 transition-colors font-semibold"
                                >
                                    <FaWhatsapp />
                                    בואו נדבר
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Call to Action Section */}
            <div className="bg-rose-500 text-white py-16">
                <div className="max-w-4xl mx-auto text-center px-6">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        בואו נעשה משהו יפה יחד
                    </h2>
                    <p className="text-xl mb-8 text-rose-100">
                        יש לכם חלום? רעיון? או סתם רוצים תמונות יפות? אני כאן
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a 
                            href="https://wa.me/0522832144" 
                            className="inline-flex items-center gap-2 bg-white text-rose-500 px-8 py-4 rounded-full hover:bg-gray-100 transition-colors font-bold text-lg"
                        >
                            <FaWhatsapp />
                            בואו נדבר
                        </a>
                        <a 
                            href="/gallery/people" 
                            className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-4 rounded-full hover:bg-white hover:text-rose-500 transition-colors font-bold text-lg"
                        >
                            רוצים לראות עוד?
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Contact;
