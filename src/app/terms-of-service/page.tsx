"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function TermsOfService() {
  return (
    <div className="pt-32 pb-20 bg-photo-dark-975">
      {/* Header with gold accent line */}
      <div className="w-full bg-black py-10 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-photo-dark-950 to-black"></div>
        <div className="absolute left-0 bottom-0 w-full h-[1px] bg-gradient-to-r from-transparent via-photo-accent-300/50 to-transparent"></div>
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="text-center"
          >
            <motion.h1 
              variants={fadeInUp} 
              className="text-3xl md:text-4xl font-light tracking-wider mb-4"
            >
              Terms of Service
            </motion.h1>
            <motion.div
              variants={fadeInUp}
              className="h-[1px] w-16 bg-photo-accent-300/30 mx-auto"
            />
            <motion.p 
              variants={fadeInUp} 
              className="mt-6 text-white/60 max-w-2xl mx-auto text-sm"
            >
              Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="prose prose-invert max-w-none"
        >
          <motion.div variants={fadeInUp}>
            <h2 className="text-2xl font-light tracking-wide text-white mt-8 mb-4">Introduction</h2>
            <p className="text-white/70 leading-relaxed mb-6">
              Welcome to Lens Photography. These Terms of Service ("Terms") govern your access to and use of our website, products, and services. By accessing or using our website, you agree to be bound by these Terms. If you do not agree to these Terms, please do not use our website or services.
            </p>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <h2 className="text-2xl font-light tracking-wide text-white mt-8 mb-4">Definitions</h2>
            <ul className="list-disc pl-6 text-white/70 mb-6 space-y-2">
              <li>"Website" refers to Lens Photography's website, accessible at www.lensphotography.com</li>
              <li>"Services" refers to the photography services offered by Lens Photography</li>
              <li>"Content" refers to all material displayed, published, or made available on our website</li>
              <li>"User", "You", and "Your" refers to the person accessing or using our website and services</li>
              <li>"We", "Us", and "Our" refers to Lens Photography</li>
            </ul>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <h2 className="text-2xl font-light tracking-wide text-white mt-8 mb-4">Account Registration</h2>
            <p className="text-white/70 leading-relaxed mb-6">
              To access certain features of our website or services, you may be required to create an account. When you create an account, you agree to provide accurate, current, and complete information. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account.
            </p>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <h2 className="text-2xl font-light tracking-wide text-white mt-8 mb-4">Photography Services</h2>
            <p className="text-white/70 leading-relaxed mb-4">
              Photography services are subject to separate service agreements that will be provided prior to booking. By booking our services, you agree to the terms specified in those agreements, which may include:
            </p>
            <ul className="list-disc pl-6 text-white/70 mb-6 space-y-2">
              <li>Booking procedures and payment terms</li>
              <li>Rescheduling and cancellation policies</li>
              <li>Image delivery timeframes</li>
              <li>Copyright and usage rights</li>
              <li>Privacy considerations for subjects</li>
            </ul>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <h2 className="text-2xl font-light tracking-wide text-white mt-8 mb-4">Intellectual Property Rights</h2>
            <p className="text-white/70 leading-relaxed mb-6">
              All content on our website, including but not limited to photographs, images, text, graphics, logos, icons, and software, is the property of Lens Photography or its content suppliers and is protected by copyright, trademark, and other intellectual property laws.
            </p>
            <p className="text-white/70 leading-relaxed mb-6">
              You may not reproduce, distribute, modify, create derivative works from, publicly display, publicly perform, republish, download, store, or transmit any of the material on our website without our written consent.
            </p>
            <p className="text-white/70 leading-relaxed mb-6">
              Photographs and images displayed in our portfolio are for viewing purposes only and may not be used, reproduced, or distributed without our explicit permission.
            </p>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <h2 className="text-2xl font-light tracking-wide text-white mt-8 mb-4">User Content</h2>
            <p className="text-white/70 leading-relaxed mb-6">
              If you submit, upload, or share any content on our website (such as comments or reviews), you grant us a non-exclusive, royalty-free, perpetual, irrevocable, and fully sublicensable right to use, reproduce, modify, adapt, publish, translate, create derivative works from, distribute, and display such content throughout the world in any media.
            </p>
            <p className="text-white/70 leading-relaxed mb-6">
              You represent and warrant that you own or control all rights to the content you post, that the content is accurate, and that use of the content does not violate these Terms or any applicable laws.
            </p>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <h2 className="text-2xl font-light tracking-wide text-white mt-8 mb-4">Prohibited Uses</h2>
            <p className="text-white/70 leading-relaxed mb-4">
              You agree not to use our website or services:
            </p>
            <ul className="list-disc pl-6 text-white/70 mb-6 space-y-2">
              <li>In any way that violates any applicable federal, state, local, or international law or regulation</li>
              <li>To impersonate any person or entity, or falsely state or otherwise misrepresent your affiliation with a person or entity</li>
              <li>To engage in any conduct that restricts or inhibits anyone's use or enjoyment of the website</li>
              <li>To attempt to gain unauthorized access to our systems or networks</li>
              <li>To use any automated means to access the website or collect any information from the website</li>
              <li>To transmit any viruses, malware, or other harmful code</li>
            </ul>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <h2 className="text-2xl font-light tracking-wide text-white mt-8 mb-4">Third-Party Links</h2>
            <p className="text-white/70 leading-relaxed mb-6">
              Our website may contain links to third-party websites or services that are not owned or controlled by Lens Photography. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party websites or services. You further acknowledge and agree that we shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any such content, goods, or services available on or through any such websites or services.
            </p>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <h2 className="text-2xl font-light tracking-wide text-white mt-8 mb-4">Disclaimer of Warranties</h2>
            <p className="text-white/70 leading-relaxed mb-6">
              Our website and services are provided on an "as is" and "as available" basis, without any warranties of any kind, either express or implied. We disclaim all warranties, express or implied, including but not limited to implied warranties of merchantability, fitness for a particular purpose, and non-infringement.
            </p>
            <p className="text-white/70 leading-relaxed mb-6">
              We do not warrant that our website will be uninterrupted or error-free, that defects will be corrected, or that our website or the server that makes it available are free of viruses or other harmful components.
            </p>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <h2 className="text-2xl font-light tracking-wide text-white mt-8 mb-4">Limitation of Liability</h2>
            <p className="text-white/70 leading-relaxed mb-6">
              To the maximum extent permitted by law, in no event shall Lens Photography, its directors, employees, partners, agents, suppliers, or affiliates be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from (i) your access to or use of or inability to access or use the website or services; (ii) any conduct or content of any third party on the website; (iii) any content obtained from the website; and (iv) unauthorized access, use, or alteration of your transmissions or content, whether based on warranty, contract, tort (including negligence), or any other legal theory, whether or not we have been informed of the possibility of such damage.
            </p>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <h2 className="text-2xl font-light tracking-wide text-white mt-8 mb-4">Indemnification</h2>
            <p className="text-white/70 leading-relaxed mb-6">
              You agree to defend, indemnify, and hold harmless Lens Photography, its directors, employees, partners, agents, suppliers, and affiliates from and against any claims, liabilities, damages, judgments, awards, losses, costs, expenses, or fees (including reasonable attorneys' fees) arising out of or relating to your violation of these Terms or your use of the website or services.
            </p>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <h2 className="text-2xl font-light tracking-wide text-white mt-8 mb-4">Governing Law</h2>
            <p className="text-white/70 leading-relaxed mb-6">
              These Terms shall be governed by and construed in accordance with the laws of [Your State/Country], without regard to its conflict of law provisions. Any legal action or proceeding arising out of or relating to these Terms shall be brought exclusively in the courts of [Your Jurisdiction], and you consent to the personal jurisdiction of such courts.
            </p>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <h2 className="text-2xl font-light tracking-wide text-white mt-8 mb-4">Changes to Terms of Service</h2>
            <p className="text-white/70 leading-relaxed mb-6">
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. We will provide notice of any significant changes by posting the new Terms on our website and updating the "Last updated" date. Your continued use of our website or services after such changes constitutes your acceptance of the new Terms.
            </p>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <h2 className="text-2xl font-light tracking-wide text-white mt-8 mb-4">Contact Us</h2>
            <p className="text-white/70 leading-relaxed mb-6">
              If you have any questions about these Terms of Service, please contact us at:
            </p>
            <div className="bg-black/30 p-6 border border-white/5 rounded-sm mb-8">
              <p className="text-white/70 leading-relaxed mb-2">Lens Photography</p>
              <p className="text-white/70 leading-relaxed mb-2">Email: legal@lensphotography.com</p>
              <p className="text-white/70 leading-relaxed">Phone: (555) 123-4567</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Return link */}
        <div className="mt-16 text-center">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-white/60 hover:text-photo-accent-300 transition-colors btn-hover text-sm tracking-wider"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
            RETURN TO HOME
          </Link>
        </div>
      </div>
    </div>
  );
} 