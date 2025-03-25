'use client';

import { useState } from 'react';
import PhotoModal from '@/components/PhotoModal';
import Image from 'next/image';

// Sample photo data - in a real app, this would come from a CMS or API
const photos = [
  {
    id: 'photo1',
    title: 'Mountain Reflections',
    description: 'The still waters of the mountain lake perfectly mirror the majesty of the peaks.',
    date: 'October 2023',
    src: '/images/photo1.jpg',
    alt: 'Mountain reflections in a lake',
  },
  {
    id: 'photo2',
    title: 'Urban Geometry',
    description: 'Abstract patterns in modern architecture create compelling visual rhythms.',
    date: 'November 2023',
    src: '/images/photo2.jpg',
    alt: 'Abstract patterns in modern architecture',
  },
  {
    id: 'photo3',
    title: 'Portrait in Natural Light',
    description: 'Soft natural light brings out the gentle expression in this portrait.',
    date: 'December 2023',
    src: '/images/photo3.jpg',
    alt: 'Portrait in natural light',
  },
  {
    id: 'photo4',
    title: 'Abstract Formations',
    description: 'Natural patterns create striking abstract compositions.',
    date: 'January 2024',
    src: '/images/photo4.jpg',
    alt: 'Abstract natural patterns',
  },
  {
    id: 'photo5',
    title: 'Coastal Dawn',
    description: 'First light illuminates the coastal landscape with a golden glow.',
    date: 'February 2024',
    src: '/images/photo5.jpg',
    alt: 'Coastal landscape at dawn',
  },
  {
    id: 'photo6',
    title: 'Urban Portrait',
    description: 'City lights create a dramatic backdrop for this atmospheric portrait.',
    date: 'March 2024',
    src: '/images/photo6.jpg',
    alt: 'Portrait with city lights',
  }
];

export default function GalleryPage() {
  const [selectedPhoto, setSelectedPhoto] = useState<typeof photos[0] | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = (photo: typeof photos[0]) => {
    setSelectedPhoto(photo);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="fade-in py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-4xl font-light tracking-wider mb-6 text-center">GALLERY</h1>
        <p className="text-lg font-light opacity-80 text-center max-w-3xl mx-auto mb-16">
          A collection of my favorite works showcasing the beauty of light, composition, and emotion.
        </p>
        
        <div className="gallery-grid">
          {photos.map((photo) => (
            <div 
              key={photo.id} 
              className="cursor-pointer group"
              onClick={() => openModal(photo)}
            >
              <div className="aspect-[4/3] w-full relative overflow-hidden bg-gray-900">
                {/* Using actual images instead of placeholders */}
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover gallery-image group-hover:opacity-90"
                />
              </div>
              <div className="p-2 mt-2">
                <h3 className="text-lg font-light">{photo.title}</h3>
                <p className="text-xs opacity-70 mt-1">{photo.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Photo modal for fullscreen viewing */}
      {selectedPhoto && (
        <PhotoModal
          isOpen={modalOpen}
          onClose={closeModal}
          photoSrc={selectedPhoto.src}
          photoAlt={selectedPhoto.alt}
          photoInfo={{
            title: selectedPhoto.title,
            description: selectedPhoto.description,
            date: selectedPhoto.date
          }}
        />
      )}
    </div>
  );
} 