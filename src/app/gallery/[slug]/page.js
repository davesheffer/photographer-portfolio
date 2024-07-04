
"use client";
import { useParams } from "next/navigation";
import galleryComponents from '@/app/lib/galleryConfig';

export default function Page() {
    const { slug } = useParams();
    const GalleryComponent = galleryComponents[slug];
    return (
    <>
            {GalleryComponent ? <GalleryComponent gallery={slug} /> : <div>Gallery not found</div>}
        </>
    )
}