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
    date?: string;
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
      className="relative overflow-hidden group cursor-pointer"
      style={{ aspectRatio: `${width}/${height}` }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      whileHover={{ scale: 1.005 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      initial={{ opacity: 0 }}
      animate={{ opacity: isLoaded ? 1 : 0 }}
      exit={{ opacity: 0 }}
    >
      {/* Loading placeholder with subtle pulse animation */}
      <div 
        className={`absolute inset-0 bg-zinc-900 transition-opacity duration-700 ease-in-out ${
          isLoaded ? 'opacity-0' : 'opacity-100'
        }`} 
      >
        {!isLoaded && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-10 h-10 border-t-2 border-photo-accent-400/30 rounded-full animate-spin"></div>
          </div>
        )}
      </div>
      
      {/* Main image */}
      <div className="w-full h-full overflow-hidden">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.07]"
          onLoad={() => setIsLoaded(true)}
          priority={priority}
          quality={90}
        />
      </div>
      
      {/* Elegant gradient overlay */}
      <div 
        className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
      />
      
      {/* Hover effect with decorative corner lines */}
      <motion.div 
        className="absolute inset-0 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="text-white flex flex-col items-center justify-center z-10">
          <motion.div 
            className="relative mb-3 p-6"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: isHovered ? 1 : 0.9, opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            {/* Decorative corner lines */}
            <div className="absolute top-0 left-0 w-6 h-6 border-t border-l border-photo-accent-300 opacity-80"></div>
            <div className="absolute top-0 right-0 w-6 h-6 border-t border-r border-photo-accent-300 opacity-80"></div>
            <div className="absolute bottom-0 left-0 w-6 h-6 border-b border-l border-photo-accent-300 opacity-80"></div>
            <div className="absolute bottom-0 right-0 w-6 h-6 border-b border-r border-photo-accent-300 opacity-80"></div>
            
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="opacity-90">
              <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"></path>
            </svg>
          </motion.div>
          <motion.span 
            className="font-light tracking-wider text-sm"
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: isHovered ? 0 : 10, opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            View Full Size
          </motion.span>
        </div>
      </motion.div>
      
      {/* Caption - if provided */}
      {captionData && (
        <motion.div 
          className="absolute bottom-0 left-0 w-full p-6 z-10"
          initial={{ y: 20, opacity: 0 }}
          animate={{ 
            y: isHovered ? 0 : 20, 
            opacity: isHovered ? 1 : 0
          }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          {captionData.title && (
            <h3 className="text-white text-lg font-light tracking-wide">{captionData.title}</h3>
          )}
          <div className="flex flex-wrap text-white/70 text-xs font-light mt-2 gap-3">
            {captionData.location && (
              <p className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="mr-1 text-photo-accent-300">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                {captionData.location}
              </p>
            )}
            {captionData.date && (
              <p className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="mr-1 text-photo-accent-300">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="16" y1="2" x2="16" y2="6"></line>
                  <line x1="8" y1="2" x2="8" y2="6"></line>
                  <line x1="3" y1="10" x2="21" y2="10"></line>
                </svg>
                {captionData.date}
              </p>
            )}
          </div>
        </motion.div>
      )}
    </motion.div>
  );
} 