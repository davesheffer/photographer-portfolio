"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import posts from "@/app/lib/posts";
import { IoArrowForward, IoCalendarOutline, IoTimeOutline } from "react-icons/io5";

const Post = () => {
    const { id } = useParams();
    const post = posts.find((post) => post.id === parseInt(id));

    if (!post) {
        return (
            <div className="min-h-screen md:mr-[15vw] md:mt-0 mt-[7vh] flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-gray-900 mb-4">הפוסט לא נמצא</h1>
                    <Link href="/blog" className="text-rose-500 hover:text-rose-600 font-semibold">
                        חזרה לבלוג ←
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen md:mr-[15vw] md:mt-0 mt-[7vh] bg-gradient-to-br from-rose-50 to-white">
            {/* Back Navigation */}
            <div className="bg-white shadow-sm border-b border-gray-100">
                <div className="max-w-4xl mx-auto px-6 py-4">
                    <Link 
                        href="/blog" 
                        className="inline-flex items-center text-gray-600 hover:text-rose-500 transition-colors duration-200 font-medium"
                    >
                        <IoArrowForward className="ml-2" />
                        חזרה לבלוג
                    </Link>
                </div>
            </div>

            {/* Article Content */}
            <article className="max-w-4xl mx-auto px-6 py-12">
                {/* Hero Image */}
                <div className="relative mb-8 rounded-2xl overflow-hidden shadow-2xl">
                    <Image 
                        src={post.image} 
                        alt={post.title} 
                        className="w-full h-[60vh] object-cover"
                        width={800}
                        height={600}
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                </div>

                {/* Article Header */}
                <header className="mb-8">
                    <div className="flex items-center gap-4 mb-6 text-sm text-gray-500">
                        <div className="flex items-center gap-1">
                            <IoCalendarOutline />
                            <span>היום</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <IoTimeOutline />
                            <span>קריאה של 3 דקות</span>
                        </div>
                        <div className="w-2 h-2 bg-rose-500 rounded-full"></div>
                    </div>
                    
                    <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
                        {post.title}
                    </h1>
                    
                    <div className="w-24 h-1 bg-rose-500 rounded-full"></div>
                </header>

                {/* Article Body */}
                <div className="prose prose-lg max-w-none">
                    <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
                        <p className="text-gray-700 leading-relaxed text-lg mb-6 first-letter:text-4xl first-letter:font-bold first-letter:text-rose-500 first-letter:float-right first-letter:ml-2 first-letter:mt-1">
                            {post.description}
                        </p>
                        
                        <div className="border-r-4 border-rose-500 pr-6 bg-rose-50 p-6 rounded-lg my-8">
                            <p className="text-gray-700 italic">
                                "כל תמונה מספרת סיפור, וכל סיפור שווה אלף מילים."
                            </p>
                        </div>
                        
                        <p className="text-gray-700 leading-relaxed text-lg">
                            זהו רק התחלה של הסיפור. בקרוב יהיו כאן עוד פרטים מרתקים על הצילום הזה ועל הרגעים המיוחדים שנתפסו בעדשה.
                        </p>
                    </div>
                </div>

                {/* Article Footer */}
                <footer className="mt-12 pt-8 border-t border-gray-200">
                    <div className="flex items-center justify-between">
                        <div className="text-sm text-gray-500">
                            נכתב על ידי נופר שפר
                        </div>
                        <Link 
                            href="/blog" 
                            className="inline-flex items-center px-6 py-3 bg-rose-500 text-white rounded-full hover:bg-rose-600 transition-colors duration-200 font-semibold"
                        >
                            עוד פוסטים
                            <IoArrowForward className="mr-2" />
                        </Link>
                    </div>
                </footer>
            </article>
        </div>
    );
}
export default Post;