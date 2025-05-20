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

export default function PrivacyPolicy() {
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
              Privacy Policy
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
              Lens Photography ("we", "our", or "us") respects your privacy and is committed to protecting your personal data. This privacy policy explains how we collect, use, process, and share your information when you use our website, services, or interact with us.
            </p>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <h2 className="text-2xl font-light tracking-wide text-white mt-8 mb-4">Information We Collect</h2>
            <p className="text-white/70 leading-relaxed mb-4">
              We may collect personal information that you provide directly to us, including:
            </p>
            <ul className="list-disc pl-6 text-white/70 mb-6 space-y-2">
              <li>Contact information (name, email address, phone number)</li>
              <li>Communication preferences and inquiries</li>
              <li>Information provided when you contact us</li>
              <li>Subscription details for our newsletter</li>
              <li>Photography services booking information</li>
            </ul>
            <p className="text-white/70 leading-relaxed mb-6">
              We may also automatically collect certain information about your device and how you interact with our website, including:
            </p>
            <ul className="list-disc pl-6 text-white/70 mb-6 space-y-2">
              <li>IP address and browser information</li>
              <li>Device type and operating system</li>
              <li>Pages viewed and time spent on our website</li>
              <li>Referral source and navigation paths</li>
              <li>Cookies and similar tracking technologies</li>
            </ul>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <h2 className="text-2xl font-light tracking-wide text-white mt-8 mb-4">How We Use Your Information</h2>
            <p className="text-white/70 leading-relaxed mb-4">
              We use the information we collect for various purposes, including:
            </p>
            <ul className="list-disc pl-6 text-white/70 mb-6 space-y-2">
              <li>Providing, operating, and maintaining our website and services</li>
              <li>Communicating with you regarding inquiries and bookings</li>
              <li>Sending you our newsletter (if you've subscribed)</li>
              <li>Improving our website and services</li>
              <li>Analyzing usage patterns and trends</li>
              <li>Protecting against fraudulent or unauthorized transactions</li>
              <li>Complying with legal obligations</li>
            </ul>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <h2 className="text-2xl font-light tracking-wide text-white mt-8 mb-4">Sharing Your Information</h2>
            <p className="text-white/70 leading-relaxed mb-6">
              We may share your information with third parties in the following circumstances:
            </p>
            <ul className="list-disc pl-6 text-white/70 mb-6 space-y-2">
              <li>With service providers who perform services on our behalf (such as email delivery, hosting, payment processing)</li>
              <li>To comply with legal obligations or valid legal processes</li>
              <li>To protect our rights, privacy, safety, or property</li>
              <li>In connection with a business transfer or transaction</li>
              <li>With your consent or at your direction</li>
            </ul>
            <p className="text-white/70 leading-relaxed mb-6">
              We do not sell your personal information to third parties.
            </p>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <h2 className="text-2xl font-light tracking-wide text-white mt-8 mb-4">Your Rights and Choices</h2>
            <p className="text-white/70 leading-relaxed mb-4">
              Depending on your location, you may have rights regarding your personal information, including:
            </p>
            <ul className="list-disc pl-6 text-white/70 mb-6 space-y-2">
              <li>Accessing, correcting, or deleting your personal information</li>
              <li>Withdrawing consent where processing is based on consent</li>
              <li>Restricting or objecting to certain processing</li>
              <li>Data portability rights</li>
              <li>Lodging a complaint with a supervisory authority</li>
            </ul>
            <p className="text-white/70 leading-relaxed mb-6">
              To exercise these rights, please contact us using the information provided in the "Contact Us" section below.
            </p>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <h2 className="text-2xl font-light tracking-wide text-white mt-8 mb-4">Data Security</h2>
            <p className="text-white/70 leading-relaxed mb-6">
              We implement appropriate technical and organizational measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. However, no method of transmission over the Internet or electronic storage is completely secure, so we cannot guarantee absolute security.
            </p>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <h2 className="text-2xl font-light tracking-wide text-white mt-8 mb-4">International Transfers</h2>
            <p className="text-white/70 leading-relaxed mb-6">
              Your information may be transferred to, and processed in, countries other than the country in which you reside. These countries may have data protection laws that are different from the laws of your country. We take steps to ensure adequate safeguards are in place to protect your information when it is transferred internationally.
            </p>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <h2 className="text-2xl font-light tracking-wide text-white mt-8 mb-4">Changes to This Privacy Policy</h2>
            <p className="text-white/70 leading-relaxed mb-6">
              We may update this privacy policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by posting the updated policy on our website and updating the "Last updated" date.
            </p>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <h2 className="text-2xl font-light tracking-wide text-white mt-8 mb-4">Contact Us</h2>
            <p className="text-white/70 leading-relaxed mb-6">
              If you have any questions, concerns, or requests regarding this privacy policy or our privacy practices, please contact us at:
            </p>
            <div className="bg-black/30 p-6 border border-white/5 rounded-sm mb-8">
              <p className="text-white/70 leading-relaxed mb-2">Lens Photography</p>
              <p className="text-white/70 leading-relaxed mb-2">Email: privacy@lensphotography.com</p>
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