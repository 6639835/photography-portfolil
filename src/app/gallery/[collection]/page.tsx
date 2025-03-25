'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import PhotoModal from '@/components/PhotoModal';

// Collection data
const collections = {
  nature: {
    title: 'Nature Collection',
    description: 'Capturing the beauty of the natural world, from vast landscapes to tiny details'
  },
  urban: {
    title: 'Urban Collection',
    description: 'Exploring city life, architecture, and urban environments'
  },
  portraits: {
    title: 'Portrait Collection',
    description: 'Intimate portraits that tell stories and reveal character'
  },
  abstract: {
    title: 'Abstract Collection',
    description: 'Finding beauty in patterns, textures, and abstract forms'
  }
};

// Sample photo data - in a real app, this would come from a CMS or API
const allPhotos = {
  nature: [
    {
      id: 'nature-1',
      title: 'Mountain Lake',
      description: 'Reflections in a serene mountain lake at dawn.',
      date: 'October 2023',
      src: '/images/nature/nature-1.jpg',
      alt: 'Mountain reflections in a lake',
    },
    {
      id: 'nature-2',
      title: 'Forest Path',
      description: 'A winding path through an ancient forest.',
      date: 'October 2023',
      src: '/images/nature/nature-2.jpg',
      alt: 'Path through forest',
    },
    {
      id: 'nature-3',
      title: 'Sunset Over Mountains',
      description: 'Majestic mountains bathed in a golden sunset.',
      date: 'November 2023',
      src: '/images/nature/nature-3.jpg',
      alt: 'Sunset over mountains',
    },
    {
      id: 'nature-4',
      title: 'A village in Greenland',
      description: 'A beautiful village in Greenland.',
      date: 'November 2023',
      src: '/images/nature/nature-4.jpg',
      alt: 'A village in Greenland',
    }
  ],
  urban: [
    {
      id: 'urban-1',
      title: 'City Lights',
      description: 'The glow of city lights at dusk creates a dramatic skyline.',
      date: 'December 2023',
      src: '/images/urban/urban-1.jpg',
      alt: 'City skyline at night',
    },
    {
      id: 'urban-2',
      title: 'Urban Geometry',
      description: 'Abstract patterns in modern architecture.',
      date: 'January 2024',
      src: '/images/urban/urban-2.jpg',
      alt: 'Abstract architecture',
    },
    {
      id: 'urban-3',
      title: 'Urban Geometry',
      description: 'Abstract patterns in modern architecture.',
      date: 'January 2024',
      src: '/images/urban/urban-3.jpg',
      alt: 'Abstract architecture',
    },
    {
      id: 'urban-4',
      title: 'Urban Geometry',
      description: 'Abstract patterns in modern architecture.',
      date: 'January 2024',
      src: '/images/urban/urban-4.jpg',
      alt: 'Abstract architecture',
    }   
  ],
  portraits: [
    {
      id: 'portrait-1',
      title: 'Natural Light Portrait',
      description: 'Portrait using only natural window light.',
      date: 'February 2024',
      src: '/images/portraits/portrait-1.jpg',
      alt: 'Portrait in natural light',
    },
    {
      id: 'portrait-2',
      title: 'Natural Light Portrait',
      description: 'Portrait using only natural window light.',
      date: 'February 2024',
      src: '/images/portraits/portrait-2.jpg',
      alt: 'Portrait in natural light',
    },
    {
      id: 'portrait-3',
      title: 'Natural Light Portrait',
      description: 'Portrait using only natural window light.',
      date: 'February 2024',
      src: '/images/portraits/portrait-3.jpg',
      alt: 'Portrait in natural light',
    },
    {
      id: 'portrait-4',
      title: 'Natural Light Portrait',
      description: 'Portrait using only natural window light.',
      date: 'February 2024',
      src: '/images/portraits/portrait-4.jpg',
      alt: 'Portrait in natural light',
    }
  ],
  abstract: [
    {
      id: 'abstract-1',
      title: 'Abstract Patterns in W&B',
      description: 'A man standing in a field of abstract patterns.',
      date: 'March 2024',
      src: '/images/abstract/abstract-1.jpg',
      alt: 'Abstract Patterns in W&B',
    },
    {
      id: 'abstract-2',
      title: 'Time-lapse photography',
      description: 'A time-lapse of a cityscape at evening.',
      date: 'March 2024',
      src: '/images/abstract/abstract-2.jpg',
      alt: 'Time-lapse photography',
    },
    {
      id: 'abstract-3',
      title: 'Grand Canyon in Colorado',
      description: 'A view of the Grand Canyon in Colorado.',
      date: 'March 2024',
      src: '/images/abstract/abstract-3.jpg',
      alt: 'Grand Canyon in Colorado',
    },
    {
      id: 'abstract-4',
      title: 'Abstract Patterns in snow',
      description: 'A view of abstract patterns in snow.',
      date: 'March 2024',
      src: '/images/abstract/abstract-4.jpg',
      alt: 'Abstract Patterns in snow',
    }
  ]
};

export default function CollectionPage() {
  const params = useParams();
  const [collection, setCollection] = useState<string>('');
  const [collectionData, setCollectionData] = useState<any>(null);
  const [photos, setPhotos] = useState<any[]>([]);
  const [selectedPhoto, setSelectedPhoto] = useState<any>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Set isClient to true when component mounts (client-side only)
    setIsClient(true);
    
    if (params.collection) {
      const collectionId = params.collection as string;
      setCollection(collectionId);
      
      if (collections[collectionId as keyof typeof collections]) {
        setCollectionData(collections[collectionId as keyof typeof collections]);
        setPhotos(allPhotos[collectionId as keyof typeof allPhotos] || []);
      }
    }
  }, [params.collection]);

  const openModal = (photo: any) => {
    setSelectedPhoto(photo);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  // Don't render anything during SSR
  if (!isClient) {
    return <div className="py-24 text-center">Loading...</div>;
  }

  // Check if collection exists
  if (isClient && collection && !collectionData) {
    return (
      <div className="py-24 text-center">
        <h1 className="text-4xl font-light mb-4">Collection Not Found</h1>
        <p>The collection you're looking for doesn't exist.</p>
      </div>
    );
  }

  return (
    <div className="fade-in py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        {collectionData && (
          <>
            <h1 className="text-4xl font-light tracking-wider mb-4 text-center">{collectionData.title}</h1>
            <p className="text-lg font-light opacity-80 text-center max-w-3xl mx-auto mb-16">
              {collectionData.description}
            </p>
          </>
        )}
        
        {isClient && (
          <>
            {photos.length === 0 ? (
              <div className="text-center py-12">
                <p>No photos in this collection yet.</p>
                <p className="mt-4 text-sm opacity-70">
                  Add your photos to the /public/images folder and update this file to display them.
                </p>
              </div>
            ) : (
              <div className="gallery-grid">
                {photos.map((photo) => (
                  <div 
                    key={photo.id} 
                    className="cursor-pointer group"
                    onClick={() => openModal(photo)}
                  >
                    <div className="aspect-[4/3] w-full relative overflow-hidden bg-gray-900">
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
            )}
          </>
        )}
      </div>

      {/* Photo modal */}
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