import PostCard from "@/components/PostCard";
import posts from '@/app/lib/posts';
import Image from 'next/image';
import logo from '/public/logo.png';

const Blog = () => {
    return (
        <div className="min-h-screen md:mr-[15vw] md:mt-0 mt-[7vh] bg-gradient-to-br from-rose-50 to-white">
            {/* Hero Section */}
            <div className="relative overflow-hidden bg-white shadow-sm">
                <div className="max-w-7xl mx-auto px-6 py-16 sm:py-24">
                    <div className="text-center">
                        <div className="flex justify-center mb-8">
                            <Image 
                                src={logo} 
                                className="w-20 h-20 rounded-full shadow-lg" 
                                alt="נופר שפר לוגו"
                                width={80}
                                height={80}
                            />
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
                            הבלוג שלי
                        </h1>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            סיפורים, רגשות וזכרונות מאחורי העדשה
                        </p>
                        <div className="mt-8 w-24 h-1 bg-rose-500 mx-auto rounded-full"></div>
                    </div>
                </div>
            </div>

            {/* Blog Posts Grid */}
            <div className="max-w-7xl mx-auto px-6 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {posts.map((post) => (
                        <PostCard key={post.id} post={post} />
                    ))}
                </div>
                
                {/* Empty State if no posts */}
                {posts.length === 0 && (
                    <div className="text-center py-16">
                        <div className="text-gray-400 text-6xl mb-4">📝</div>
                        <h3 className="text-xl font-semibold text-gray-600 mb-2">
                            עדיין אין פוסטים
                        </h3>
                        <p className="text-gray-500">
                            בקרוב יהיו כאן סיפורים מרתקים!
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}
export default Blog;
