import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

interface PhotoModalProps {
  isOpen: boolean;
  onClose: () => void;
  photoSrc: string;
  photoAlt: string;
  photoInfo?: {
    title: string;
    description?: string;
    date?: string;
  };
}

export default function PhotoModal({
  isOpen,
  onClose,
  photoSrc,
  photoAlt,
  photoInfo
}: PhotoModalProps) {
  // Close modal on escape key press
  useEffect(() => {
    const handleEscKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleEscKey);
    
    return () => {
      window.removeEventListener('keydown', handleEscKey);
    };
  }, [isOpen, onClose]);

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95"
          onClick={onClose}
        >
          <button 
            className="absolute top-8 right-8 text-white opacity-70 hover:opacity-100 transition-opacity z-10"
            onClick={onClose}
            aria-label="Close modal"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
          
          <motion.div
            className="w-full max-w-6xl max-h-[90vh] relative"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-full h-[80vh] relative">
              <Image
                src={photoSrc}
                alt={photoAlt}
                fill
                sizes="100vw"
                className="object-contain"
                priority
              />
            </div>
            
            {photoInfo && (
              <div className="absolute bottom-0 left-0 w-full p-6 bg-black/70 text-white">
                <h3 className="text-xl font-light tracking-wide mb-2">{photoInfo.title}</h3>
                {photoInfo.description && (
                  <p className="text-sm opacity-80">{photoInfo.description}</p>
                )}
                {photoInfo.date && (
                  <p className="text-xs opacity-60 mt-2">{photoInfo.date}</p>
                )}
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
} 