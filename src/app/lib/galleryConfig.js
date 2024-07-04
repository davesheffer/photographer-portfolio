import dynamic from 'next/dynamic';

const Regular = dynamic(() => import('@/components/galleryRegular/GalleryRegular'));
const Multi = dynamic(() => import('@/components/galleryMulti/GalleryMulti'));

const galleryComponents = {
    'cars': Regular,
    'art': Regular,
    'people': Multi,

};

export default galleryComponents;