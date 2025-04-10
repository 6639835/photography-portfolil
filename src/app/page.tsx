"use client";

import Image from "next/image";
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useRef } from 'react';

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

export default function Home() {
  const constraintsRef = useRef(null);
  
  return (
    <div ref={constraintsRef}>
      {/* Hero section */}
      <motion.section 
        className="relative h-screen w-full overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70 z-[1]" />
        <div className="absolute inset-0">
          {/* Hero background image */}
          <Image
            src="/images/hero.jpg" 
            alt="Photography hero image"
            fill
            priority
            className="object-cover scale-[1.02] hover:scale-100 transition-transform duration-[30s]"
          />
        </div>
        <motion.div 
          className="relative z-[2] flex flex-col items-center justify-center h-full px-4 text-center"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-extralight tracking-[0.2em] mb-6"
            variants={fadeInUp}
          >
            IMMERSIVE<br className="md:hidden" /> PHOTOGRAPHY
          </motion.h1>
          <motion.div
            className="h-[1px] w-20 bg-white/60 my-6"
            variants={fadeInUp}
          />
          <motion.p 
            className="text-xl font-light max-w-2xl mx-auto opacity-80"
            variants={fadeInUp}
          >
            Capturing moments that tell stories and evoke emotions
          </motion.p>
          <motion.div 
            className="mt-10"
            variants={fadeInUp}
          >
            <Link href="/gallery" className="px-8 py-3 border border-white/30 hover:bg-white/10 transition-colors duration-300 text-sm tracking-wider">
              VIEW GALLERY
            </Link>
          </motion.div>
        </motion.div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="opacity-60">
            <path d="M12 5v14M19 12l-7 7-7-7"/>
          </svg>
        </div>
      </motion.section>

      {/* Gallery section */}
      <motion.section 
        className="py-32 px-6 bg-zinc-950"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <motion.div 
          className="max-w-7xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <span className="text-amber-50/60 uppercase tracking-widest text-xs">Explore</span>
            <h2 className="text-3xl md:text-4xl font-light tracking-wide mt-2">COLLECTIONS</h2>
            <div className="h-[1px] w-12 bg-white/20 mx-auto mt-6"></div>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-12"
            variants={staggerContainer}
          >
            {photoSeries.map((series) => (
              <motion.div key={series.id} variants={fadeInUp}>
                <Link 
                  href={`/gallery/${series.id}`} 
                  className="group cursor-pointer relative overflow-hidden block"
                >
                  <div className="aspect-[4/3] w-full relative overflow-hidden bg-zinc-900">
                    {/* Collection image */}
                    <Image 
                      src={series.coverImage}
                      alt={series.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  <div className="absolute bottom-0 left-0 p-6 w-full">
                    <h3 className="text-xl font-light tracking-wide group-hover:translate-y-0 translate-y-2 transition-transform duration-500">{series.title}</h3>
                    <p className="text-sm opacity-0 group-hover:opacity-80 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100">{series.description}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Featured photo section */}
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
            <span className="text-amber-50/60 uppercase tracking-widest text-xs">Highlight</span>
            <h2 className="text-3xl md:text-4xl font-light tracking-wide mt-2">FEATURED WORK</h2>
            <div className="h-[1px] w-12 bg-white/20 mx-auto mt-6"></div>
          </motion.div>
          
          <motion.div 
            className="grid md:grid-cols-2 gap-6 md:gap-12 items-center"
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="order-2 md:order-1 mt-8 md:mt-0">
              <h3 className="text-2xl font-light tracking-wide">Mountain Reflections</h3>
              <div className="h-[1px] w-12 bg-white/20 my-4"></div>
              <p className="text-sm opacity-70 max-w-lg">
                The still waters of the mountain lake perfectly mirror the majesty of the peaks.
                Captured at dawn to showcase the interplay of light and shadow.
              </p>
              <div className="mt-6">
                <Link href="/gallery/nature" className="text-sm tracking-wider opacity-80 hover:opacity-100 transition-opacity inline-flex items-center group">
                  VIEW SERIES 
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </Link>
              </div>
            </motion.div>
            
            <motion.div variants={fadeInUp} className="order-1 md:order-2">
              <div className="aspect-[4/3] w-full relative overflow-hidden bg-zinc-900 shadow-2xl">
                {/* Featured image */}
                <Image
                  src="/images/featured.jpg"
                  alt="Featured photography work"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover hover:scale-105 transition-transform duration-1000"
                />
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.section>
      
      {/* Call to action */}
      <motion.section 
        className="py-32 bg-zinc-950 relative"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <motion.div 
          className="max-w-3xl mx-auto px-6 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.h2 
            className="text-2xl md:text-4xl font-light tracking-wide"
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
            <Link href="/contact" className="px-8 py-3 border border-white/30 hover:bg-white/10 transition-colors duration-300 text-sm tracking-wider">
              GET IN TOUCH
            </Link>
          </motion.div>
        </motion.div>
      </motion.section>
    </div>
  );
}
