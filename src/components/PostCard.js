import Image from "next/image";
import Link from "next/link";

const PostCard = ({ post }) => {
    return (
        <div className=" border-2 border-gray-100 mb-6 break-inside-avoid shadow-xl">
            <Link href={`blog/${post.id}`} className="p-4">
                <Image src={post.image} alt="" className="w-full" />
                <div className="p-2">
                    <h2 className="md:text-3xl text-xl ">{post.title}</h2>
                    <p>{post.description}</p>
                </div>
            </Link>
        </div>
    );
}
export default PostCard;