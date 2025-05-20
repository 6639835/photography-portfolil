import { useEffect, useRef, useState } from 'react';
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
    location?: string;
  };
  onPrevious?: () => void;
  onNext?: () => void;
  hasNext?: boolean;
  hasPrevious?: boolean;
}

export default function PhotoModal({
  isOpen,
  onClose,
  photoSrc,
  photoAlt,
  photoInfo,
  onPrevious,
  onNext,
  hasNext = false,
  hasPrevious = false
}: PhotoModalProps) {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  
  // Focus the modal when it opens for better keyboard accessibility
  useEffect(() => {
    if (isOpen && modalRef.current) {
      modalRef.current.focus();
    }
  }, [isOpen]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      
      switch (e.key) {
        case 'Escape':
        onClose();
          break;
        case 'ArrowLeft':
          if (hasPrevious && onPrevious) {
            onPrevious();
          }
          break;
        case 'ArrowRight':
          if (hasNext && onNext) {
            onNext();
          }
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose, onPrevious, onNext, hasNext, hasPrevious]);

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
          transition={{ duration: 0.4 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/98 backdrop-blur-sm"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <motion.button 
            className="absolute top-6 right-6 text-white opacity-60 hover:opacity-100 transition-opacity z-10 flex items-center justify-center h-10 w-10 rounded-full border border-white/20 hover:border-white/40 hover:bg-white/5 transition-all"
            onClick={onClose}
            aria-label="Close modal"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </motion.button>
          
          <motion.div
            ref={modalRef}
            className="w-full max-w-7xl max-h-[90vh] relative outline-none"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
            tabIndex={0}
          >
            <div className="w-full h-[85vh] relative overflow-hidden rounded-sm">
              {/* Loading indicator */}
              {!isImageLoaded && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 border-t-2 border-white/30 rounded-full animate-spin"></div>
                </div>
              )}
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: isImageLoaded ? 1 : 0 }}
                transition={{ duration: 0.6 }}
                className="w-full h-full relative"
              >
                <Image
                  src={photoSrc}
                  alt={photoAlt}
                  fill
                  sizes="100vw"
                  className="object-contain"
                  priority
                  onLoad={() => setIsImageLoaded(true)}
                />
              </motion.div>
            </div>
            
            {/* Accessible status message for screen readers */}
            <div className="sr-only" aria-live="polite">
              Image loaded: {photoInfo?.title || photoAlt}. Use arrow keys to navigate between photos.
            </div>
            
            {photoInfo && (
              <motion.div 
                className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/90 to-transparent text-white"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.4 }}
              >
                <h3 id="modal-title" className="text-xl md:text-2xl font-light tracking-wide mb-2">{photoInfo.title}</h3>
                {photoInfo.description && (
                  <p className="text-sm opacity-80 max-w-2xl">{photoInfo.description}</p>
                )}
                <div className="flex flex-wrap gap-x-4 gap-y-2 mt-3 text-xs opacity-60">
                  {photoInfo.date && (
                    <div className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="mr-1" aria-hidden="true">
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                        <line x1="16" y1="2" x2="16" y2="6"></line>
                        <line x1="8" y1="2" x2="8" y2="6"></line>
                        <line x1="3" y1="10" x2="21" y2="10"></line>
                      </svg>
                      <span>{photoInfo.date}</span>
                    </div>
                  )}
                  {photoInfo.location && (
                    <div className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="mr-1" aria-hidden="true">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                      </svg>
                      <span>{photoInfo.location}</span>
                    </div>
                  )}
                </div>
              </motion.div>
            )}
            
            {/* Previous button with improved accessibility */}
            {hasPrevious && onPrevious && (
            <motion.div 
              className="absolute top-1/2 left-4 -translate-y-1/2 opacity-60 hover:opacity-100 transition-opacity"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 0.6, x: 0 }}
              transition={{ delay: 0.4 }}
            >
                <button 
                  className="p-2 rounded-full border border-white/20 hover:bg-white/10 transition-colors"
                  onClick={(e) => {
                    e.stopPropagation();
                    onPrevious();
                  }}
                  aria-label="Previous photo"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M15 18l-6-6 6-6"/>
                </svg>
              </button>
            </motion.div>
            )}
            
            {/* Next button with improved accessibility */}
            {hasNext && onNext && (
            <motion.div 
              className="absolute top-1/2 right-4 -translate-y-1/2 opacity-60 hover:opacity-100 transition-opacity"
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 0.6, x: 0 }}
              transition={{ delay: 0.4 }}
            >
                <button 
                  className="p-2 rounded-full border border-white/20 hover:bg-white/10 transition-colors"
                  onClick={(e) => {
                    e.stopPropagation();
                    onNext();
                  }}
                  aria-label="Next photo"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M9 18l6-6-6-6"/>
                </svg>
              </button>
              </motion.div>
            )}
            
            {/* Keyboard navigation indicator */}
            <motion.div
              className="absolute bottom-24 left-1/2 -translate-x-1/2 bg-black/60 backdrop-blur-sm px-5 py-2 rounded-full text-white text-xs"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ delay: 0.6 }}
            >
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1">
                  <kbd className="px-2 py-1 bg-white/10 rounded">←</kbd>
                  <span>Previous</span>
                </span>
                <span className="w-px h-4 bg-white/30"></span>
                <span className="flex items-center gap-1">
                  <kbd className="px-2 py-1 bg-white/10 rounded">→</kbd>
                  <span>Next</span>
                </span>
                <span className="w-px h-4 bg-white/30"></span>
                <span className="flex items-center gap-1">
                  <kbd className="px-2 py-1 bg-white/10 rounded">Esc</kbd>
                  <span>Close</span>
                </span>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
} 