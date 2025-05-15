"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';

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

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black relative">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-photo-accent-400/5 rounded-full blur-3xl -translate-y-24 translate-x-24 mix-blend-soft-light pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-photo-accent-400/5 rounded-full blur-3xl translate-y-24 -translate-x-24 mix-blend-soft-light pointer-events-none"></div>
      
      <div className="relative pt-32 pb-24 px-6">
        <motion.div 
          className="max-w-6xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          {/* Hero section */}
          <motion.div variants={fadeInUp} className="relative">
            <div className="flex flex-col items-center mb-16">
              <span className="text-photo-accent-300 uppercase tracking-widest text-xs mb-3">The Photographer</span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-[0.15em] mb-6 text-center">ABOUT ME</h1>
              <div className="h-px w-20 bg-photo-accent-400/30 mb-8"></div>
            </div>
          </motion.div>
          
          {/* Photographer info with image */}
          <motion.div 
            variants={fadeInUp}
            className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-24 items-start"
          >
            <div className="md:col-span-2">
              {/* Profile image with decorative frame */}
              <div className="relative mx-auto max-w-sm">
                <div className="aspect-square w-full relative overflow-hidden mb-6">
                  <div className="absolute inset-0 border border-photo-accent-300/20 z-10"></div>
                  <div className="absolute -inset-0.5 border border-photo-accent-300/10 z-10 m-1"></div>
                  
                  {/* Corner decorations */}
                  <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-photo-accent-300/40 z-20"></div>
                  <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-photo-accent-300/40 z-20"></div>
                  <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-photo-accent-300/40 z-20"></div>
                  <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-photo-accent-300/40 z-20"></div>
                  
                  <Image 
                    src="/images/about/profile.jpg" 
                    alt="Alec Soth" 
                    width={500} 
                    height={500}
                    className="object-cover w-full h-full image-zoom"
                  />
                </div>
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-light tracking-wide mb-2 text-photo-accent-300">Alec Soth</h2>
                  <p className="text-sm font-light text-white/60 tracking-wider">PORTRAIT & LANDSCAPE PHOTOGRAPHER</p>
                </div>
                
                {/* Contact/social info */}
                <div className="flex justify-center space-x-6 pt-4 border-t border-white/10">
                  <a href="#" className="text-white/60 hover:text-photo-accent-300 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                  </a>
                  <a href="#" className="text-white/60 hover:text-photo-accent-300 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                    </svg>
                  </a>
                  <a href="#" className="text-white/60 hover:text-photo-accent-300 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            <div className="md:col-span-3 pt-4">
              <div className="glass-card p-8 md:p-10 h-full">
                <h3 className="text-xl font-light tracking-wide mb-6 text-photo-accent-300">Biography</h3>
                
                <div className="prose prose-invert max-w-none opacity-90 leading-relaxed text-base">
                  <p className="mb-6">
                    I am a dedicated photographer with a passion for capturing the extraordinary in everyday moments.
                    Based in New York City, my work focuses on landscape, portrait, and street photography.
                    Through my lens, I strive to reveal the hidden stories that surround us.
                  </p>
                  
                  <p className="mb-6">
                    My journey in photography began when I received my first camera 
                    as a teenager. Since then, I've developed a style that combines dramatic lighting with minimalist composition.
                    My influences range from classic portrait photographers like Richard Avedon to contemporary artists who push the boundaries of visual storytelling.
                  </p>
                  
                  <p>
                    When I'm not photographing, I explore hiking trails, study art history, and teach photography workshops. These experiences
                    continuously shape my perspective and enrich my visual storytelling. I believe that photography is not just about documenting what exists,
                    but rather about revealing what might otherwise remain unseen.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Philosophy and approach section */}
          <motion.div variants={fadeInUp} className="mb-24">
            <div className="relative mb-12">
              <div className="absolute inset-0 flex items-center">
                <div className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
              </div>
              <div className="relative flex justify-center">
                <h2 className="px-6 text-2xl font-light tracking-wider bg-black text-photo-accent-300">MY APPROACH</h2>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="glass-card hover-lift p-8">
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center bg-photo-accent-300/10 text-photo-accent-300 mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <circle cx="12" cy="12" r="6"></circle>
                      <circle cx="12" cy="12" r="2"></circle>
                    </svg>
                  </div>
                  <h3 className="text-lg font-light">Light & Composition</h3>
                </div>
                <p className="text-white/70 leading-relaxed">
                  My photography is guided by the interplay of light and shadow, authentic human connection, and finding beauty in simplicity.
                  I believe that powerful images don't just show what something looks like—they reveal how it feels to be there.
                </p>
              </div>
              
              <div className="glass-card hover-lift p-8">
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center bg-photo-accent-300/10 text-photo-accent-300 mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path>
                      <line x1="4" y1="22" x2="4" y2="15"></line>
                    </svg>
                  </div>
                  <h3 className="text-lg font-light">Storytelling</h3>
                </div>
                <p className="text-white/70 leading-relaxed">
                  Each project begins with careful observation and patience, building rapport with subjects, and studying the location's unique qualities.
                  This mindful approach allows me to create images that are both visually striking and emotionally resonant.
                </p>
              </div>
            </div>
          </motion.div>
          
          {/* Equipment and recognition sections side by side */}
          <motion.div variants={fadeInUp} className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <div className="border-b border-white/10 mb-6 pb-4">
                <h2 className="text-xl font-light tracking-wide text-photo-accent-300">EQUIPMENT</h2>
              </div>
              
              <ul className="space-y-3">
                {[
                  'Sony Alpha a7 IV',
                  'Fujifilm X-T4',
                  '24-70mm f/2.8',
                  '50mm f/1.4',
                  '85mm f/1.8',
                  'Profoto B10 lights, reflectors',
                  'Adobe Lightroom, Capture One Pro'
                ].map((item, index) => (
                  <li key={index} className="flex items-center text-white/80 hover:text-white transition-colors duration-300">
                    <span className="text-photo-accent-300 mr-3 text-sm">→</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <div className="border-b border-white/10 mb-6 pb-4">
                <h2 className="text-xl font-light tracking-wide text-photo-accent-300">RECOGNITION</h2>
              </div>
              
              <ul className="space-y-6">
                {[
                  {
                    title: 'Solo Exhibition: "Perspectives"',
                    details: 'Aperture Gallery, New York, 2023',
                  },
                  {
                    title: 'Finalist, International Photography Awards',
                    details: 'Portrait Category, 2022',
                  },
                  {
                    title: 'Featured in National Geographic',
                    details: 'Summer 2021 Issue',
                  },
                  {
                    title: 'Commercial work with Vogue',
                    details: 'Editorial Spread, May 2022',
                  }
                ].map((item, index) => (
                  <li key={index} className="group">
                    <h4 className="text-white/90 font-light tracking-wide group-hover:text-photo-accent-300 transition-colors duration-300">
                      {item.title}
                    </h4>
                    <p className="text-white/60 text-sm mt-1">{item.details}</p>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
          
          {/* Call to action section */}
          <motion.div variants={fadeInUp} className="mt-24 text-center">
            <div className="max-w-2xl mx-auto">
              <p className="text-xl text-white/80 mb-8 font-light">
                Interested in working together? Let's create something extraordinary.
              </p>
              <a href="/contact" className="btn-modern inline-block">
                GET IN TOUCH
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
} 