import { useState } from 'react';
import { motion } from 'framer-motion';

interface GalleryImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  priority?: boolean;
  onClick?: () => void;
}

export default function GalleryImage({ 
  src, 
  alt, 
  width, 
  height, 
  priority = false,
  onClick 
}: GalleryImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <div 
      className="relative overflow-hidden" 
      style={{ aspectRatio: `${width}/${height}` }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
    >
      {/* Placeholder - in production would use next/image */}
      <div 
        className={`w-full h-full bg-gray-900 gallery-image transition-opacity duration-500 ${
          isLoaded ? 'opacity-0' : 'opacity-100'
        }`} 
      />
      
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900"
        initial={{ scale: 1 }}
        animate={{ scale: isHovered ? 1.05 : 1 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      />
      
      {/* In a real implementation, use Next.js Image component */}
      {/* 
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={`w-full h-full object-cover transition-opacity duration-500 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        onLoad={() => setIsLoaded(true)}
        priority={priority}
      />
      */}
      
      {isHovered && (
        <motion.div 
          className="absolute inset-0 bg-black/30 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <div className="text-white text-lg font-light tracking-wide">View</div>
        </motion.div>
      )}
    </div>
  );
} 