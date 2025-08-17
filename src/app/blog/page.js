"use client";

import PostCard from "@/components/PostCard";
import posts from '@/app/lib/posts';
import { useLanguage } from "@/contexts/LanguageContext";
import { useTranslations } from "@/lib/translations";

const Blog = () => {
    const { language, isRTL } = useLanguage();
    const t = useTranslations(language);
    
    return (
        <div className={`min-h-screen ${isRTL ? 'md:mr-[15vw]' : 'md:ml-[15vw]'} md:mt-0 mt-[7vh] bg-white`}>
            {/* Simple Header */}
            <div className="px-6 py-8">
                <h1 className="text-2xl font-bold text-gray-900 mb-2">
                    {t.myStories}
                </h1>
                <p className="text-gray-600">
                    {t.behindTheLens}
                </p>
            </div>

            {/* Blog Posts Grid */}
            <div className="pb-16 px-6">
                {posts.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {posts.map((post) => (
                            <PostCard key={post.id} post={post} />
                        ))}
                    </div>
                ) : (
                    /* Empty State */
                    <div className="text-center py-20">
                        <div className="text-gray-300 text-5xl mb-4">📝</div>
                        <h3 className="text-lg font-medium text-gray-600 mb-2">
                            {t.noPostsYet}
                        </h3>
                        <p className="text-gray-500 text-sm">
                            {t.comingSoon}
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}
export default Blog;
