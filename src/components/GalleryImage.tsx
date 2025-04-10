import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface GalleryImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  priority?: boolean;
  onClick?: () => void;
  captionData?: {
    title?: string;
    location?: string;
  };
}

export default function GalleryImage({ 
  src, 
  alt, 
  width, 
  height, 
  priority = false,
  onClick,
  captionData
}: GalleryImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <motion.div 
      className="relative overflow-hidden group"
      style={{ aspectRatio: `${width}/${height}` }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      whileHover={{ scale: 1.005 }}
      transition={{ duration: 0.3 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: isLoaded ? 1 : 0 }}
      exit={{ opacity: 0 }}
    >
      {/* Loading placeholder */}
      <div 
        className={`absolute inset-0 bg-zinc-900 transition-opacity duration-700 ease-in-out ${
          isLoaded ? 'opacity-0' : 'opacity-100'
        }`} 
      />
      
      {/* Main image */}
      <div className="w-full h-full overflow-hidden">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          onLoad={() => setIsLoaded(true)}
          priority={priority}
        />
      </div>
      
      {/* Gradient overlay */}
      <div 
        className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-70 transition-opacity duration-300"
      />
      
      {/* Hover effect */}
      <motion.div 
        className="absolute inset-0 bg-black/30 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 0.4 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="text-white text-base font-light tracking-wide transform translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 delay-100 flex flex-col items-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="mb-2">
            <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"></path>
          </svg>
          <span>View Full Size</span>
        </div>
      </motion.div>
      
      {/* Caption - if provided */}
      {captionData && (
        <div className="absolute bottom-0 left-0 w-full p-4 transform translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 z-10">
          {captionData.title && (
            <h3 className="text-white text-base font-light">{captionData.title}</h3>
          )}
          {captionData.location && (
            <p className="text-white/70 text-sm font-light flex items-center mt-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              {captionData.location}
            </p>
          )}
        </div>
      )}
    </motion.div>
  );
} 