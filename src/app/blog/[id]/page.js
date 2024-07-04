"use client";

import Image from "next/image";
import { useParams } from "next/navigation";
import posts from "@/app/lib/posts";

const Post = () => {
    const { id } = useParams();
    const post = posts.find((post) => post.id === parseInt(id));

    return (
        <div className="h-[85vh] mr-[15vw] p-10">
            <Image src={post.image} alt="" className="max-h-[60vh] " />
            <h1 className="font-amatic">{post.title}</h1>
            <p>{post.description}</p>
        </div>
    );
}
export default Post;