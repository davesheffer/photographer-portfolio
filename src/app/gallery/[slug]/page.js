
"use client";
import { useParams } from "next/navigation";
import galleryComponents from '@/app/lib/galleryConfig';
import { useLanguage } from "@/contexts/LanguageContext";

export default function Page() {
    const { slug } = useParams();
    const { isRTL } = useLanguage();
    const GalleryComponent = galleryComponents[slug];
    return (
        <div className={`p-0 pt-4 md:p-5 ${isRTL ? 'md:mr-[15vw]' : 'md:ml-[15vw]'} md:mt-0 mt-[7vh]`}>
            {GalleryComponent ? <GalleryComponent gallery={slug} /> : <div>Gallery not found</div>}
        </div>
    )
}