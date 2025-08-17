"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTranslations } from "@/lib/translations";

const PostCard = ({ post }) => {
    const { language } = useLanguage();
    const t = useTranslations(language);
    return (
        <article className="group bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100 hover:border-rose-200 mx-6">
            <Link href={`blog/${post.id}`} className="block">
                <div className="relative overflow-hidden">
                    <Image 
                        src={post.image} 
                        alt={post.title} 
                        className="w-full h-80 md:h-96 object-cover group-hover:scale-105 transition-transform duration-300"
                        width={800}
                        height={400}
                        quality={90}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Overlay content */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 to-transparent">
                        <h2 className="text-xl md:text-2xl font-bold text-white mb-2 leading-tight">
                            {typeof post.title === 'object' ? post.title[language] : post.title}
                        </h2>
                        <p className="text-white/90 leading-relaxed text-sm md:text-base line-clamp-2">
                            {typeof post.description === 'object' ? post.description[language] : post.description}
                        </p>
                    </div>
                </div>
                
                <div className="p-6">
                    <div className="flex items-center justify-between">
                        <span className="text-rose-500 font-medium group-hover:text-rose-600 transition-colors">
                            {t.letsRead} {language === 'he' ? '←' : '→'}
                        </span>
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                            <div className="w-2 h-2 bg-rose-400 rounded-full"></div>
                            <span>{t.newStory}</span>
                        </div>
                    </div>
                </div>
            </Link>
        </article>
    );
}
export default PostCard;