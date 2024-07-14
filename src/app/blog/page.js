import PostCard from "@/components/PostCard";
import posts from '@/app/lib/posts';
const Blog = () => {
    return (
        <div className=" md:mr-[15vw] md:mt-0 mt-[7vh] p-5">
            <div className="text-6xl flex justify-center  items-center h-[8 0vh] font-bold">
                הבלוג בבנייה
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