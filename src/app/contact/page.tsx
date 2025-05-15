'use client';

import { useState, FormEvent, ChangeEvent } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

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

// Custom validation errors animation
const errorAnimation = {
  initial: { opacity: 0, y: -10 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.2 } },
  exit: { opacity: 0, y: -10, transition: { duration: 0.2 } }
};

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [touched, setTouched] = useState({
    name: false,
    email: false,
    subject: false,
    message: false
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const validateField = (name: string, value: string) => {
    let errorMessage = '';
    
    switch (name) {
      case 'name':
        if (!value.trim()) {
          errorMessage = 'Your name is required';
        } else if (value.trim().length < 2) {
          errorMessage = 'Name should be at least 2 characters';
        }
        break;
        
      case 'email':
        if (!value.trim()) {
          errorMessage = 'Email address is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          errorMessage = 'Please enter a valid email';
        }
        break;
        
      case 'subject':
        if (!value.trim()) {
          errorMessage = 'Please add a subject';
        }
        break;
        
      case 'message':
        if (!value.trim()) {
          errorMessage = 'Please write your message';
        } else if (value.trim().length < 10) {
          errorMessage = 'Message should be at least 10 characters';
        }
        break;
        
      default:
        break;
    }
    
    return errorMessage;
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    
    setFormState(prev => ({
      ...prev,
      [id]: value
    }));
    
    // Clear error when user starts typing
    if (errors[id as keyof typeof errors]) {
      setErrors(prev => ({
        ...prev,
        [id]: ''
      }));
    }
  };
  
  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    
    // Mark field as touched
    setTouched(prev => ({
      ...prev,
      [id]: true
    }));
    
    // Validate on blur
    const errorMessage = validateField(id, value);
    setErrors(prev => ({
      ...prev,
      [id]: errorMessage
    }));
  };

  const validateForm = () => {
    const newErrors = {
      name: validateField('name', formState.name),
      email: validateField('email', formState.email),
      subject: validateField('subject', formState.subject),
      message: validateField('message', formState.message)
    };
    
    setErrors(newErrors);
    
    // Mark all fields as touched
    setTouched({
      name: true,
      email: true,
      subject: true,
      message: true
    });
    
    // Check if there are any errors
    return !Object.values(newErrors).some(error => error !== '');
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Validate all fields before submission
    const isValid = validateForm();
    
    if (isValid) {
      setIsSubmitting(true);
      
      // Simulate form submission
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitSuccess(true);
        
        // Reset form after showing success message
        setTimeout(() => {
          setSubmitSuccess(false);
          setFormState({
            name: '',
            email: '',
            subject: '',
            message: ''
          });
          setTouched({
            name: false,
            email: false,
            subject: false,
            message: false
          });
        }, 3000);
      }, 1500);
    }
  };

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
          <motion.div variants={fadeInUp} className="relative mb-16">
            <div className="flex flex-col items-center">
              <span className="text-photo-accent-300 uppercase tracking-widest text-xs mb-3">Let's connect</span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-[0.15em] mb-6 text-center">CONTACT</h1>
              <div className="h-px w-20 bg-photo-accent-400/30 mb-8"></div>
              <p className="text-center max-w-xl text-white/70 font-light leading-relaxed">
                Interested in collaborating or have questions about my work? I'd love to hear from you.
              </p>
            </div>
          </motion.div>
          
          <motion.div 
            variants={fadeInUp}
            className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start"
          >
            {/* Contact form section - wider on desktop */}
            <div className="lg:col-span-7 order-2 lg:order-1">
              <div className="glass-card p-8 md:p-10 backdrop-blur-md">
                <h2 className="text-xl font-light tracking-wide mb-8 text-photo-accent-300">Send a Message</h2>
                
                {submitSuccess ? (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-photo-accent-300/10 border border-photo-accent-300/20 p-6 text-center"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto mb-4 text-photo-accent-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M5 13l4 4L19 7" />
                    </svg>
                    <h3 className="text-lg text-photo-accent-300 mb-2">Message Sent!</h3>
                    <p className="text-white/70">Thank you for reaching out. I'll get back to you soon.</p>
                  </motion.div>
                ) : (
                  <form className="space-y-6" onSubmit={handleSubmit} noValidate>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-light text-white/60 mb-2">
                          Name
                        </label>
                        <div className="relative">
                          <input
                            type="text"
                            id="name"
                            value={formState.name}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={`w-full bg-black/50 border ${errors.name && touched.name ? 'border-red-400/50' : 'border-white/10'} rounded-none px-4 py-3 focus:outline-none focus:border-photo-accent-300/50 transition-colors`}
                          />
                          {errors.name && touched.name && (
                            <motion.div 
                              className="text-xs text-red-400 mt-1 ml-1"
                              {...errorAnimation}
                            >
                              {errors.name}
                            </motion.div>
                          )}
                        </div>
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-light text-white/60 mb-2">
                          Email
                        </label>
                        <div className="relative">
                          <input
                            type="email"
                            id="email"
                            value={formState.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={`w-full bg-black/50 border ${errors.email && touched.email ? 'border-red-400/50' : 'border-white/10'} rounded-none px-4 py-3 focus:outline-none focus:border-photo-accent-300/50 transition-colors`}
                          />
                          {errors.email && touched.email && (
                            <motion.div 
                              className="text-xs text-red-400 mt-1 ml-1"
                              {...errorAnimation}
                            >
                              {errors.email}
                            </motion.div>
                          )}
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-sm font-light text-white/60 mb-2">
                        Subject
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          id="subject"
                          value={formState.subject}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className={`w-full bg-black/50 border ${errors.subject && touched.subject ? 'border-red-400/50' : 'border-white/10'} rounded-none px-4 py-3 focus:outline-none focus:border-photo-accent-300/50 transition-colors`}
                        />
                        {errors.subject && touched.subject && (
                          <motion.div 
                            className="text-xs text-red-400 mt-1 ml-1"
                            {...errorAnimation}
                          >
                            {errors.subject}
                          </motion.div>
                        )}
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-light text-white/60 mb-2">
                        Message
                      </label>
                      <div className="relative">
                        <textarea
                          id="message"
                          rows={6}
                          value={formState.message}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className={`w-full bg-black/50 border ${errors.message && touched.message ? 'border-red-400/50' : 'border-white/10'} rounded-none px-4 py-3 focus:outline-none focus:border-photo-accent-300/50 transition-colors`}
                        ></textarea>
                        {errors.message && touched.message && (
                          <motion.div 
                            className="text-xs text-red-400 mt-1 ml-1"
                            {...errorAnimation}
                          >
                            {errors.message}
                          </motion.div>
                        )}
                      </div>
                    </div>
                    
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-modern w-full py-4 flex items-center justify-center group"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center">
                          <div className="w-5 h-5 border-t-2 border-photo-accent-400 rounded-full animate-spin mr-3"></div>
                          <span>SENDING...</span>
                        </div>
                      ) : (
                        <div className="flex items-center">
                          <span>SEND MESSAGE</span>
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </div>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
            
            {/* Contact info section */}
            <div className="lg:col-span-5 order-1 lg:order-2">
              <div className="mb-10">
                <div className="relative mb-8 overflow-hidden image-mask-diagonal aspect-video">
                  <Image 
                    src="/images/featured.jpg" 
                    alt="Photography studio" 
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-2000"
                  />
                </div>
              
                <div className="space-y-8 mb-12">
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center bg-photo-accent-300/10 text-photo-accent-300 mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                        <polyline points="22,6 12,13 2,6"></polyline>
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-white/40 mb-1">Email</p>
                      <a href="mailto:info@photographyportfolio.com" className="text-white hover:text-photo-accent-300 transition-colors">
                        info@photographyportfolio.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center bg-photo-accent-300/10 text-photo-accent-300 mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-white/40 mb-1">Phone</p>
                      <a href="tel:+15551234567" className="text-white hover:text-photo-accent-300 transition-colors">
                        +1 (555) 123-4567
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center bg-photo-accent-300/10 text-photo-accent-300 mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-white/40 mb-1">Studio Address</p>
                      <address className="not-italic text-white">
                        123 Photo Street<br />
                        New York, NY 10001
                      </address>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-light mb-6 text-photo-accent-300">Connect With Me</h3>
                  <div className="flex space-x-5">
                    <a href="#" className="w-10 h-10 rounded-full flex items-center justify-center border border-white/10 text-white/60 hover:text-photo-accent-300 hover:border-photo-accent-300/30 transition-all">
                      <span className="sr-only">Instagram</span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                      </svg>
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full flex items-center justify-center border border-white/10 text-white/60 hover:text-photo-accent-300 hover:border-photo-accent-300/30 transition-all">
                      <span className="sr-only">Facebook</span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                      </svg>
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full flex items-center justify-center border border-white/10 text-white/60 hover:text-photo-accent-300 hover:border-photo-accent-300/30 transition-all">
                      <span className="sr-only">Pinterest</span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M8 12a4 4 0 0 1 8 0c0 1.48-.804 2.773-2 3.465V20l-2-1.5-2 1.5v-4.535C8.804 14.773 8 13.48 8 12zm.5-3a2.5 2.5 0 0 0 0 5 2.5 2.5 0 0 0 0-5zm7 0a2.5 2.5 0 0 0 0 5 2.5 2.5 0 0 0 0-5z" />
                      </svg>
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full flex items-center justify-center border border-white/10 text-white/60 hover:text-photo-accent-300 hover:border-photo-accent-300/30 transition-all">
                      <span className="sr-only">LinkedIn</span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                        <rect x="2" y="9" width="4" height="12"></rect>
                        <circle cx="4" cy="4" r="2"></circle>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* FAQ section */}
          <motion.div variants={fadeInUp} className="mt-24">
            <div className="relative mb-12">
              <div className="absolute inset-0 flex items-center">
                <div className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
              </div>
              <div className="relative flex justify-center">
                <h2 className="px-6 text-2xl font-light tracking-wider bg-black text-photo-accent-300">FAQ</h2>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="glass-card p-6">
                <h3 className="text-lg font-light mb-3 text-white/90">What services do you offer?</h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  I specialize in portrait, landscape, and architectural photography for both personal and commercial projects. I also offer post-processing and retouching services.
                </p>
              </div>
              
              <div className="glass-card p-6">
                <h3 className="text-lg font-light mb-3 text-white/90">How far in advance should I book?</h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  For commercial projects, 2-3 weeks notice is ideal. For personal sessions, I can sometimes accommodate shorter timeframes depending on my schedule.
                </p>
              </div>
              
              <div className="glass-card p-6">
                <h3 className="text-lg font-light mb-3 text-white/90">Do you travel for shoots?</h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  Yes, I'm available for travel both domestically and internationally. Travel expenses will be included in your custom quote.
                </p>
              </div>
              
              <div className="glass-card p-6">
                <h3 className="text-lg font-light mb-3 text-white/90">How will I receive my photos?</h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  All photos are delivered through a private online gallery where you can download high-resolution images and share them with friends and family.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
} 