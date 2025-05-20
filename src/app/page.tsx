"use client";

import Image from "next/image";
import Link from 'next/link';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

// Sample photo data - in a real app, this would come from a CMS or API
const photoSeries = [
  {
    id: 'nature',
    title: 'Nature',
    coverImage: '/images/nature-cover.jpg',
    description: 'Capturing the beauty of the natural world'
  },
  {
    id: 'urban',
    title: 'Urban',
    coverImage: '/images/urban-cover.jpg',
    description: 'City life through the lens'
  },
  {
    id: 'portraits',
    title: 'Portraits',
    coverImage: '/images/portrait-cover.jpg',
    description: 'Intimate portraits that tell a story'
  },
  {
    id: 'abstract',
    title: 'Abstract',
    coverImage: '/images/abstract-cover.jpg',
    description: 'Finding beauty in the abstract'
  }
];

// Additional featured photos
const featuredPhotos = [
  {
    title: "Mountain Reflections",
    description: "The still waters of the mountain lake perfectly mirror the majesty of the peaks. Captured at dawn to showcase the interplay of light and shadow.",
    image: "/images/featured.jpg", 
    link: "/gallery/nature"
  },
  {
    title: "Urban Geometry",
    description: "Architectural lines and patterns create striking geometric compositions in this urban exploration series.",
    image: "/images/urban-cover.jpg",
    link: "/gallery/urban"
  }
];

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

// Text split animation
interface SplitTextProps {
  text: string;
  className?: string;
}

const SplitText = ({ text, className = "" }: SplitTextProps) => {
  return (
    <div className="overflow-hidden inline-block">
      <motion.span
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`inline-block ${className}`}
      >
        {text}
      </motion.span>
    </div>
  );
};

export default function Home() {
  const constraintsRef = useRef(null);
  const [scrollY, setScrollY] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef(null);
  
  // Button animation states
  const [exploreClicked, setExploreClicked] = useState(false);
  const [viewSeriesClicked, setViewSeriesClicked] = useState(false);
  const [getInTouchClicked, setGetInTouchClicked] = useState(false);
  const [clickedCardId, setClickedCardId] = useState<string | null>(null);
  const [clickedIndicator, setClickedIndicator] = useState<number | null>(null);
  const [ripplePosition, setRipplePosition] = useState({ x: 0, y: 0 });

  // Scroll animations
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.4, 0.6], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [50, 0, 0, -50]);
  
  // Handle button click animations
  const handleButtonClick = (e: React.MouseEvent<HTMLAnchorElement>, setClickState: React.Dispatch<React.SetStateAction<boolean>>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setRipplePosition({ x, y });
    setClickState(true);
    
    setTimeout(() => {
      setClickState(false);
    }, 800);
  };

  // Handle card click animations
  const handleCardClick = (e: React.MouseEvent<HTMLAnchorElement>, cardId: string, link: string) => {
    e.preventDefault();
    setClickedCardId(cardId);
    
    // Navigate after animation
    setTimeout(() => {
      window.location.href = link;
    }, 600);
  };
  
  // Carousel effect for featured works
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % featuredPhotos.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  // Add scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  // Handle indicator click
  const handleIndicatorClick = (idx: number) => {
    // Only animate if changing to a different slide
    if (idx !== activeIndex) {
      setClickedIndicator(idx);
      
      // Slight delay before changing slide
      setTimeout(() => {
        setActiveIndex(idx);
        setClickedIndicator(null);
      }, 300);
    }
  };

  return (
    <div ref={constraintsRef}>
      {/* Hero section with enhanced parallax and animations */}
      <motion.section 
        className="relative h-screen w-full overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/80 z-[1]" />
        <div className="absolute inset-0">
          {/* Hero background image with enhanced parallax */}
          <motion.div
            style={{ 
              y: scrollY * 0.4,
              scale: 1 + (scrollY * 0.0003),
            }}
            className="absolute inset-0 will-change-transform"
          >
            <Image
              src="/images/hero.jpg" 
              alt="Photography hero image"
              fill
              priority
              className="object-cover"
            />
            {/* Overlay texture */}
            <div className="absolute inset-0 bg-[url('/images/grain.png')] opacity-10 mix-blend-overlay"></div>
          </motion.div>
        </div>
        
        {/* Cinematic bars */}
        <div className="absolute top-0 w-full h-[5vh] bg-black z-[2]"></div>
        <div className="absolute bottom-0 w-full h-[5vh] bg-black z-[2]"></div>
        
        {/* Floating particles/light effect */}
        <div className="absolute inset-0 z-[1] pointer-events-none">
          <motion.div
            className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-white/30 blur-sm"
            animate={{ 
              y: [0, -20, 0], 
              opacity: [0.2, 0.6, 0.2],
              scale: [1, 1.2, 1]
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute top-2/3 right-1/3 w-1 h-1 rounded-full bg-photo-accent-300/40 blur-sm"
            animate={{ 
              y: [0, -15, 0], 
              opacity: [0.1, 0.4, 0.1],
              scale: [1, 1.5, 1]
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          />
          <motion.div
            className="absolute top-1/2 right-1/4 w-1.5 h-1.5 rounded-full bg-white/20 blur-sm"
            animate={{ 
              y: [0, -25, 0], 
              opacity: [0.1, 0.5, 0.1],
              scale: [1, 1.3, 1]
            }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          />
        </div>
        
        <motion.div 
          className="relative z-[2] flex flex-col items-center justify-center h-full px-4 text-center"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.div
            className="overflow-hidden mb-4"
            variants={fadeInUp}
          >
            <SplitText 
              text="IMMERSIVE" 
              className="text-5xl md:text-7xl lg:text-8xl font-extralight tracking-[0.2em] text-gradient-dynamic"
            />
          </motion.div>
          
          <motion.div
            className="overflow-hidden"
            variants={fadeInUp}
          >
            <SplitText 
              text="PHOTOGRAPHY" 
              className="text-5xl md:text-7xl lg:text-8xl font-extralight tracking-[0.2em]"
            />
          </motion.div>
          
          <motion.div
            className="h-[1px] w-20 bg-photo-accent-300/60 my-8"
            variants={fadeInUp}
          />
          
          <motion.p 
            className="text-lg md:text-xl font-light max-w-2xl mx-auto opacity-80"
            variants={fadeInUp}
          >
            Capturing moments that tell stories and evoke emotions
          </motion.p>
          
          <motion.div 
            className="mt-10"
            variants={fadeInUp}
          >
            <div className="relative inline-block">
              <Link 
                href="/gallery" 
                className="group"
                onClick={(e) => {
                  e.preventDefault();
                  handleButtonClick(e, setExploreClicked);
                  // Navigate after animation
                  setTimeout(() => window.location.href = '/gallery', 500);
                }}
              >
                <span className={`btn-fancy uppercase tracking-wider text-sm relative ${exploreClicked ? 'btn-glow text-expand' : ''}`}>
                  Explore Gallery
                  <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-photo-accent-300/60 opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity"></span>
                </span>
              </Link>
              {exploreClicked && (
                <span 
                  className="btn-fancy-click-effect active" 
                  style={{ 
                    left: `${ripplePosition.x}px`, 
                    top: `${ripplePosition.y}px` 
                  }}
                ></span>
              )}
            </div>
          </motion.div>
          
          {/* Enhanced decorative elements */}
          <motion.div
            className="absolute left-6 md:left-20 top-1/2 -translate-y-1/2 flex flex-col items-center space-y-6"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 0.6, x: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <div className="h-[100px] w-[1px] bg-gradient-to-b from-transparent via-photo-accent-300/50 to-transparent"></div>
            <div className="h-[1px] w-[1px] bg-photo-accent-300/80 rounded-full floating-element"></div>
            <div className="h-[60px] w-[1px] bg-gradient-to-b from-transparent via-white/30 to-transparent"></div>
          </motion.div>
          
          <motion.div
            className="absolute right-6 md:right-20 top-1/2 -translate-y-1/2 flex flex-col items-center space-y-6"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 0.6, x: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <div className="h-[60px] w-[1px] bg-gradient-to-b from-transparent via-white/30 to-transparent"></div>
            <div className="h-[1px] w-[1px] bg-photo-accent-300/80 rounded-full floating-element"></div>
            <div className="h-[100px] w-[1px] bg-gradient-to-b from-transparent via-photo-accent-300/50 to-transparent"></div>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="absolute bottom-16 left-1/2 -translate-x-1/2 z-10 animate-bounce"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.8 }}
          transition={{ delay: 1.5 }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="opacity-80">
            <path d="M12 5v14M19 12l-7 7-7-7"/>
          </svg>
        </motion.div>
      </motion.section>

      {/* Introduction section */}
      <motion.section
        className="py-24 bg-gradient-to-b from-photo-dark-975 to-photo-dark-950"
        ref={containerRef}
      >
        <motion.div 
          className="max-w-4xl mx-auto px-6 text-center"
          style={{ opacity, y }}
        >
          <h2 className="text-3xl md:text-4xl font-light tracking-wide text-gradient-gold mb-8">The Art of Visual Storytelling</h2>
          <p className="text-lg text-white/70 leading-relaxed mb-8 max-w-3xl mx-auto">
            Through the lens, we capture fleeting moments that tell powerful stories. Each photograph is a carefully crafted blend of composition, light, and emotion – preserving memories that would otherwise fade with time.
          </p>
          <div className="flex justify-center space-x-1 my-10">
            <span className="block h-1 w-1 rounded-full bg-photo-accent-300/80"></span>
            <span className="block h-1 w-1 rounded-full bg-photo-accent-300/60"></span>
            <span className="block h-1 w-1 rounded-full bg-photo-accent-300/40"></span>
          </div>
        </motion.div>
      </motion.section>

      {/* Gallery section with enhanced layout */}
      <motion.section 
        className="py-32 px-6 bg-photo-dark-950 relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-black/50 to-transparent pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-black/50 to-transparent pointer-events-none"></div>
        <div className="absolute top-1/4 right-0 w-[25vw] h-[50vh] bg-photo-accent-300/5 blur-[120px] rounded-full mix-blend-screen pointer-events-none"></div>
        <div className="absolute bottom-1/4 left-0 w-[25vw] h-[40vh] bg-photo-teal-300/5 blur-[100px] rounded-full mix-blend-screen pointer-events-none"></div>
        
        <motion.div 
          className="max-w-7xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <span className="text-photo-accent-300 uppercase tracking-widest text-xs">Explore</span>
            <h2 className="text-3xl md:text-5xl font-light tracking-wide mt-2">COLLECTIONS</h2>
            <div className="h-[1px] w-12 bg-photo-accent-300/20 mx-auto mt-6"></div>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-12"
            variants={staggerContainer}
          >
            {photoSeries.map((series, index) => (
              <motion.div key={series.id} variants={fadeInUp} 
                whileHover={{ y: -8 }}
                transition={{ duration: 0.4 }}
                className={clickedCardId === series.id ? 'btn-glow' : ''}
              >
                <Link 
                  href={`/gallery/${series.id}`} 
                  className="group cursor-pointer relative overflow-hidden block"
                  onClick={(e) => handleCardClick(e, series.id, `/gallery/${series.id}`)}
                >
                  <div className={`aspect-[4/3] w-full relative overflow-hidden bg-photo-gray-800 glass-card ${clickedCardId === series.id ? 'scale-[0.98] transition-transform duration-500' : ''}`}>
                    {/* Collection image */}
                    <Image 
                      src={series.coverImage}
                      alt={series.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className={`object-cover transition-transform duration-700 ${clickedCardId === series.id ? 'scale-110' : 'group-hover:scale-110'}`}
                    />
                    
                    {/* Series number indicator */}
                    <div className="absolute top-4 left-4 bg-black/40 backdrop-blur-md text-2xl font-light px-4 py-2 rounded-sm border border-white/10">
                      <span className="text-xs text-photo-accent-300 block -mb-1">SERIES</span>
                      {(index + 1).toString().padStart(2, '0')}
                    </div>
                    
                    <div className={`absolute inset-0 bg-gradient-to-b from-transparent to-black/70 ${clickedCardId === series.id ? 'opacity-100' : 'opacity-80 group-hover:opacity-100'} transition-opacity duration-500`} />

                    {/* Click overlay animation */}
                    {clickedCardId === series.id && (
                      <div className="absolute inset-0 bg-photo-accent-300/20 z-10 animate-pulse"></div>
                    )}
                  </div>
                  <div className="absolute bottom-0 left-0 p-6 w-full">
                    <h3 className={`text-xl font-light tracking-wide ${clickedCardId === series.id ? 'translate-y-0 text-photo-accent-300' : 'group-hover:translate-y-0 translate-y-2'} transition-all duration-500 text-white`}>
                      {series.title}
                    </h3>
                    <p className={`text-sm ${clickedCardId === series.id ? 'opacity-90 translate-y-0' : 'opacity-0 group-hover:opacity-80 transform translate-y-4 group-hover:translate-y-0'} transition-all duration-500 delay-100 text-white/70`}>
                      {series.description}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Featured photo section with carousel */}
      <motion.section 
        className="py-32 bg-black relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black z-0" />
        <motion.div 
          className="max-w-7xl mx-auto px-6 relative z-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <span className="text-photo-accent-300 uppercase tracking-widest text-xs">Highlight</span>
            <h2 className="text-3xl md:text-5xl font-light tracking-wide mt-2">FEATURED WORK</h2>
            <div className="h-[1px] w-12 bg-photo-accent-300/20 mx-auto mt-6"></div>
          </motion.div>
          
          <div className="relative h-[600px]">
            {featuredPhotos.map((photo, idx) => (
              <AnimatePresence key={idx}>
                {activeIndex === idx && (
                  <motion.div
                    className="absolute inset-0 grid md:grid-cols-2 gap-6 md:gap-12 items-center"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <div className="order-2 md:order-1 mt-8 md:mt-0">
                      <h3 className="text-2xl font-light tracking-wide text-gradient-gold">{photo.title}</h3>
                      <div className="h-[1px] w-12 bg-photo-accent-300/40 my-4"></div>
                      <p className="text-sm opacity-70 max-w-lg">
                        {photo.description}
                      </p>
                      <div className="mt-6">
                        <div className="relative inline-block">
                          <Link 
                            href={photo.link} 
                            className="text-sm tracking-wider opacity-80 hover:opacity-100 transition-opacity inline-flex items-center group btn-hover"
                            onClick={(e) => {
                              e.preventDefault();
                              handleButtonClick(e, setViewSeriesClicked);
                              // Navigate after animation
                              setTimeout(() => window.location.href = photo.link, 500);
                            }}
                          >
                            <span className={viewSeriesClicked ? 'text-expand' : ''}>VIEW SERIES</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className={`ml-2 transform group-hover:translate-x-1 transition-transform duration-300 ${viewSeriesClicked ? 'translate-x-1' : ''}`}>
                              <path d="M5 12h14M12 5l7 7-7 7"/>
                            </svg>
                          </Link>
                          {viewSeriesClicked && (
                            <span 
                              className="btn-fancy-click-effect active" 
                              style={{ 
                                left: `${ripplePosition.x}px`, 
                                top: `${ripplePosition.y}px` 
                              }}
                            ></span>
                          )}
                        </div>
                      </div>
                    </div>
                    
                    <div className="order-1 md:order-2">
                      <div className="aspect-[4/3] w-full relative overflow-hidden bg-photo-gray-800 image-cinematic shadow-2xl">
                        <Image
                          src={photo.image}
                          alt={photo.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 50vw"
                          className="object-cover hover:scale-105 transition-transform duration-1000"
                        />
                        <div className="absolute inset-0 bg-gradient-to-l from-black/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            ))}
            
            {/* Carousel indicators */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex space-x-3 z-20">
              {featuredPhotos.map((_, idx) => (
                <button 
                  key={idx}
                  onClick={() => handleIndicatorClick(idx)}
                  className={`relative w-10 h-1 rounded-full transition-all duration-300 overflow-hidden ${
                    activeIndex === idx ? 'bg-photo-accent-300' : 'bg-white/20'
                  } ${clickedIndicator === idx ? 'scale-125' : ''}`}
                  aria-label={`View featured photo ${idx + 1}`}
                >
                  {clickedIndicator === idx && (
                    <motion.div 
                      className="absolute inset-0 bg-photo-accent-300"
                      initial={{ x: '-100%' }}
                      animate={{ x: '0%' }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                    />
                  )}
                </button>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.section>
      
      {/* Enhanced statistics section */}
      <motion.section
        className="py-24 bg-gradient-to-b from-black to-photo-dark-975 relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="absolute inset-0 bg-[url('/images/grain.png')] opacity-10 mix-blend-overlay"></div>
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="group"
            >
              <p className="text-4xl md:text-5xl font-light text-photo-accent-300 mb-2 group-hover:scale-110 transition-transform duration-300">10+</p>
              <p className="text-sm uppercase tracking-wider text-white/60">Years Experience</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="group"
            >
              <p className="text-4xl md:text-5xl font-light text-photo-accent-300 mb-2 group-hover:scale-110 transition-transform duration-300">250+</p>
              <p className="text-sm uppercase tracking-wider text-white/60">Projects Completed</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="group"
            >
              <p className="text-4xl md:text-5xl font-light text-photo-accent-300 mb-2 group-hover:scale-110 transition-transform duration-300">15K+</p>
              <p className="text-sm uppercase tracking-wider text-white/60">Photos Delivered</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="group"
            >
              <p className="text-4xl md:text-5xl font-light text-photo-accent-300 mb-2 group-hover:scale-110 transition-transform duration-300">98%</p>
              <p className="text-sm uppercase tracking-wider text-white/60">Client Satisfaction</p>
            </motion.div>
          </div>
        </div>
      </motion.section>
      
      {/* Enhanced call to action */}
      <motion.section 
        className="py-32 bg-photo-dark-975 relative"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-black to-transparent"></div>
        
        {/* CTA background image */}
        <div className="absolute inset-0 opacity-10">
          <Image
            src="/images/abstract-cover.jpg"
            alt="Abstract photography"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-photo-dark-975/90"></div>
        </div>
        
        <motion.div 
          className="max-w-3xl mx-auto px-6 text-center relative z-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.h2 
            className="text-2xl md:text-4xl font-light tracking-wide text-gradient-gold"
            variants={fadeInUp}
          >
            Ready to collaborate on your next project?
          </motion.h2>
          <motion.p 
            className="mt-4 text-lg opacity-70 max-w-xl mx-auto"
            variants={fadeInUp}
          >
            Let's create something extraordinary together.
          </motion.p>
          <motion.div 
            className="mt-10"
            variants={fadeInUp}
          >
            <div className="relative inline-block">
              <Link 
                href="/contact" 
                className="group"
                onClick={(e) => {
                  e.preventDefault();
                  handleButtonClick(e, setGetInTouchClicked);
                  // Navigate after animation
                  setTimeout(() => window.location.href = '/contact', 500);
                }}
              >
                <span className={`btn-fancy uppercase tracking-wider text-sm px-10 py-4 group-hover:shadow-[0_0_20px_rgba(var(--accent-color),0.3)] transition-all duration-500 ${getInTouchClicked ? 'btn-glow text-expand' : ''}`}>
                  Get In Touch
                </span>
              </Link>
              {getInTouchClicked && (
                <span 
                  className="btn-fancy-click-effect active" 
                  style={{ 
                    left: `${ripplePosition.x}px`, 
                    top: `${ripplePosition.y}px` 
                  }}
                ></span>
              )}
            </div>
          </motion.div>
          
          {/* Floating circle decorations */}
          <motion.div 
            className="absolute -left-4 -top-4 md:left-0 md:top-0 w-24 h-24 rounded-full border border-photo-accent-300/20"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          />
          <motion.div 
            className="absolute -right-4 -bottom-4 md:right-0 md:bottom-0 w-32 h-32 rounded-full border border-photo-accent-300/10"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
        </motion.div>
      </motion.section>
    </div>
  );
}
