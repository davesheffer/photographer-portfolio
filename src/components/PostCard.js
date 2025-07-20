import Image from "next/image";
import Link from "next/link";

const PostCard = ({ post }) => {
    return (
        <article className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-rose-200">
            <Link href={`blog/${post.id}`} className="block">
                <div className="relative overflow-hidden">
                    <Image 
                        src={post.image} 
                        alt={post.title} 
                        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                        width={400}
                        height={256}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <div className="p-6">
                    <div className="flex items-center mb-3">
                        <div className="w-2 h-2 bg-rose-500 rounded-full ml-2"></div>
                        <span className="text-sm text-gray-500 font-medium">פוסט חדש</span>
                    </div>
                    
                    <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 leading-tight group-hover:text-rose-600 transition-colors duration-200">
                        {post.title}
                    </h2>
                    
                    <p className="text-gray-600 leading-relaxed mb-4 line-clamp-3">
                        {post.description}
                    </p>
                    
                    <div className="flex items-center justify-between">
                        <span className="text-rose-500 font-semibold text-sm group-hover:text-rose-600 transition-colors">
                            קרא עוד ←
                        </span>
                        <div className="flex space-x-1">
                            <div className="w-1 h-1 bg-rose-300 rounded-full"></div>
                            <div className="w-1 h-1 bg-rose-400 rounded-full"></div>
                            <div className="w-1 h-1 bg-rose-500 rounded-full"></div>
                        </div>
                    </div>
                </div>
            </Link>
        </article>
    );
}
export default PostCard;