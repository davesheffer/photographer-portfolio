import PostCard from "@/components/PostCard";
import posts from '@/app/lib/posts';
import Image from 'next/image';
import logo from '/public/logo.png';
const Blog = () => {
    return (
        <div className=" md:mr-[15vw] md:mt-0 mt-[7vh] p-5">
            <div className="text-6xl flex flex-col justify-center gap-8 items-center h-[80vh] font-bold">
                <Image src={logo} className="w-50 h-50 mr-5"  />
               < div className="text-4xl font-bold">
                הבלוג בבנייה
                </div>
            </div>
            {/* <div className="md:columns-3 gap-10 p-4">
                {posts.map((post) => (
                    <PostCard key={post.id} post={post} />
                ))
                }
            </div> */}
        </div>
    );
}
export default Blog;
