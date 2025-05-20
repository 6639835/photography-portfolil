'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PhotoModal from '@/components/PhotoModal';
import Image from 'next/image';
import GalleryImage from '@/components/GalleryImage';

// Sample photo data - in a real app, this would come from a CMS or API
const photos = [
  {
    id: 'photo1',
    title: 'Mountain Reflections',
    description: 'The still waters of the mountain lake perfectly mirror the majesty of the peaks.',
    date: 'October 2023',
    location: 'Canadian Rockies',
    src: '/images/gallery/photo1.jpg',
    alt: 'Mountain reflections in a lake with towering peaks mirrored in still waters',
    width: 1600,
    height: 1200,
  },
  {
    id: 'photo2',
    title: 'Urban Geometry',
    description: 'Abstract patterns in modern architecture create compelling visual rhythms.',
    date: 'November 2023',
    location: 'Downtown District',
    src: '/images/gallery/photo2.jpg',
    alt: 'Abstract geometric patterns formed by modern building architecture with strong lines and shadows',
    width: 1600, 
    height: 1200,
  },
  {
    id: 'photo3',
    title: 'Portrait in Natural Light',
    description: 'Soft natural light brings out the gentle expression in this portrait.',
    date: 'December 2023',
    location: 'Sunset Park',
    src: '/images/gallery/photo3.jpg',
    alt: 'Portrait of a person with soft natural lighting highlighting gentle facial features',
    width: 1200,
    height: 1600,
  },
  {
    id: 'photo4',
    title: 'Abstract Formations',
    description: 'Natural patterns create striking abstract compositions.',
    date: 'January 2024',
    location: 'Coastal Cliffs',
    src: '/images/gallery/photo4.jpg',
    alt: 'Abstract natural rock formations showing intricate patterns and textures',
    width: 1600,
    height: 1200,
  },
  {
    id: 'photo5',
    title: 'Coastal Dawn',
    description: 'First light illuminates the coastal landscape with a golden glow.',
    date: 'February 2024',
    location: 'Pacific Coast',
    src: '/images/gallery/photo5.jpg',
    alt: 'Coastal landscape at dawn with golden light illuminating the shoreline and ocean waves',
    width: 1600,
    height: 1067,
  },
  {
    id: 'photo6',
    title: 'Urban Portrait',
    description: 'City lights create a dramatic backdrop for this atmospheric portrait.',
    date: 'March 2024',
    location: 'City Center',
    src: '/images/gallery/photo6.jpg',
    alt: 'Portrait against a city skyline with bokeh lights creating a dramatic urban backdrop',
    width: 1200,
    height: 1600,
  }
];

export default function GalleryPage() {
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number>(-1);
  const [modalOpen, setModalOpen] = useState(false);
  const [filter, setFilter] = useState<string | null>(null);
  const [animatePhotos, setAnimatePhotos] = useState(false);

  useEffect(() => {
    // Start animation after component mounts
    const timer = setTimeout(() => {
      setAnimatePhotos(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  const filteredPhotos = filter 
    ? photos.filter(photo => 
        photo.title.toLowerCase().includes(filter.toLowerCase()) || 
        photo.description.toLowerCase().includes(filter.toLowerCase()) ||
        photo.location?.toLowerCase().includes(filter.toLowerCase())
      ) 
    : photos;

  const openModal = (index: number) => {
    setSelectedPhotoIndex(index);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const goToNextPhoto = () => {
    if (selectedPhotoIndex < filteredPhotos.length - 1) {
      setSelectedPhotoIndex(prev => prev + 1);
    }
  };

  const goToPrevPhoto = () => {
    if (selectedPhotoIndex > 0) {
      setSelectedPhotoIndex(prev => prev - 1);
    }
  };

  return (
    <div className="fade-in py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-4xl font-light tracking-wider mb-6 text-center">GALLERY</h1>
        <p className="text-lg font-light opacity-80 text-center max-w-3xl mx-auto mb-10">
          A collection of my favorite works showcasing the beauty of light, composition, and emotion.
        </p>
        
        {/* Search/filter input */}
        <div className="w-full max-w-md mx-auto mb-12">
          <div className="relative">
            <input
              type="text"
              placeholder="Search by title, description or location..."
              value={filter || ''}
              onChange={(e) => setFilter(e.target.value.length > 0 ? e.target.value : null)}
              className="w-full px-4 py-2 bg-black/30 border border-gray-700/50 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-photo-accent-300 placeholder-gray-500"
              aria-label="Search photos"
            />
            {filter && (
              <button 
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white" 
                onClick={() => setFilter(null)}
                aria-label="Clear search"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            )}
          </div>
        </div>
        
        {/* Gallery grid */}
        <div className="gallery-grid" role="list" aria-label="Photo gallery">
          <AnimatePresence>
            {filteredPhotos.map((photo, index) => (
              <motion.div 
              key={photo.id} 
                role="listitem"
                aria-label={photo.title}
                initial={{ opacity: 0, y: 20 }}
                animate={animatePhotos ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <GalleryImage
                  src={photo.src}
                  alt={photo.alt}
                  width={photo.width}
                  height={photo.height}
                  priority={index < 4}
                  onClick={() => openModal(index)}
                  captionData={{
                    title: photo.title,
                    location: photo.location,
                    date: photo.date
                  }}
                />
              </motion.div>
          ))}
          </AnimatePresence>
        </div>
        
        {/* No results message */}
        {filter && filteredPhotos.length === 0 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <p className="text-lg font-light opacity-70">No photos match your search criteria.</p>
            <button 
              onClick={() => setFilter(null)} 
              className="mt-4 px-4 py-2 border border-gray-700/50 rounded-md text-sm hover:bg-white/5"
            >
              Clear search
            </button>
          </motion.div>
        )}
      </div>

      {/* Photo modal with navigation */}
      {selectedPhotoIndex >= 0 && modalOpen && (
        <PhotoModal
          isOpen={modalOpen}
          onClose={closeModal}
          photoSrc={filteredPhotos[selectedPhotoIndex].src}
          photoAlt={filteredPhotos[selectedPhotoIndex].alt}
          photoInfo={{
            title: filteredPhotos[selectedPhotoIndex].title,
            description: filteredPhotos[selectedPhotoIndex].description,
            date: filteredPhotos[selectedPhotoIndex].date,
            location: filteredPhotos[selectedPhotoIndex].location
          }}
          onPrevious={goToPrevPhoto}
          onNext={goToNextPhoto}
          hasPrevious={selectedPhotoIndex > 0}
          hasNext={selectedPhotoIndex < filteredPhotos.length - 1}
        />
      )}
    </div>
  );
} 