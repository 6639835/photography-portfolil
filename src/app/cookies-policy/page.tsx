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

export default function CookiesPolicy() {
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
              Cookies Policy
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
              This Cookies Policy explains what cookies are and how Lens Photography ("we", "our", or "us") uses them on our website. We encourage you to read this policy to understand what cookies are, how we use them, the types of cookies we use, and how you can control or manage your cookie preferences.
            </p>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <h2 className="text-2xl font-light tracking-wide text-white mt-8 mb-4">What Are Cookies?</h2>
            <p className="text-white/70 leading-relaxed mb-6">
              Cookies are small text files that are stored on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and provide information to the website owners. Cookies can enhance your browsing experience by allowing sites to remember your preferences, understand how you use the site, and provide personalized content and recommendations.
            </p>
            <p className="text-white/70 leading-relaxed mb-6">
              Cookies are not harmful and do not contain viruses or personal information that could identify you personally without your knowledge or consent. They simply hold small amounts of data specific to our website and your interactions with it.
            </p>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <h2 className="text-2xl font-light tracking-wide text-white mt-8 mb-4">How We Use Cookies</h2>
            <p className="text-white/70 leading-relaxed mb-6">
              We use cookies for several reasons, including:
            </p>
            <ul className="list-disc pl-6 text-white/70 mb-6 space-y-2">
              <li>To ensure our website functions properly</li>
              <li>To improve your browsing experience</li>
              <li>To save your preferences for future visits</li>
              <li>To analyze how our website is used so we can continually improve it</li>
              <li>To personalize your experience</li>
              <li>To enable certain features and functionality</li>
            </ul>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <h2 className="text-2xl font-light tracking-wide text-white mt-8 mb-4">Types of Cookies We Use</h2>
            <p className="text-white/70 leading-relaxed mb-4">
              We use several types of cookies on our website:
            </p>
            
            <h3 className="text-xl font-light tracking-wide text-white mt-6 mb-3">Essential Cookies</h3>
            <p className="text-white/70 leading-relaxed mb-4">
              These cookies are necessary for the website to function properly. They enable basic functions like page navigation, secure areas access, and other essential features. The website cannot function properly without these cookies.
            </p>
            
            <h3 className="text-xl font-light tracking-wide text-white mt-6 mb-3">Preference Cookies</h3>
            <p className="text-white/70 leading-relaxed mb-4">
              These cookies allow our website to remember choices you have made in the past, like your language preference, region, username, or login information. They provide more personal features and options.
            </p>
            
            <h3 className="text-xl font-light tracking-wide text-white mt-6 mb-3">Analytics Cookies</h3>
            <p className="text-white/70 leading-relaxed mb-4">
              These cookies collect information about how visitors use our website, including which pages visitors go to most often and if they receive error messages. This information helps us improve our website and your browsing experience. All information these cookies collect is aggregated and anonymous.
            </p>
            
            <h3 className="text-xl font-light tracking-wide text-white mt-6 mb-3">Marketing Cookies</h3>
            <p className="text-white/70 leading-relaxed mb-6">
              These cookies track visitors across websites to display relevant and engaging advertisements. They are used to measure the effectiveness of our advertising campaigns and to limit how often you see an advertisement.
            </p>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <h2 className="text-2xl font-light tracking-wide text-white mt-8 mb-4">Third-Party Cookies</h2>
            <p className="text-white/70 leading-relaxed mb-6">
              In addition to our own cookies, we may also use various third-party cookies to report usage statistics, deliver advertisements, and so on. These third-party cookies may include:
            </p>
            <ul className="list-disc pl-6 text-white/70 mb-6 space-y-2">
              <li>
                <span className="text-white">Analytics providers:</span> Like Google Analytics, to help us understand how users interact with our website
              </li>
              <li>
                <span className="text-white">Social media platforms:</span> When you use social sharing buttons or login through social media accounts
              </li>
              <li>
                <span className="text-white">Advertising networks:</span> To help deliver relevant advertisements based on your interests
              </li>
            </ul>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <h2 className="text-2xl font-light tracking-wide text-white mt-8 mb-4">Managing Your Cookie Preferences</h2>
            <p className="text-white/70 leading-relaxed mb-4">
              You can control and manage cookies in various ways. Most web browsers allow you to manage your cookie preferences. You can:
            </p>
            <ul className="list-disc pl-6 text-white/70 mb-6 space-y-2">
              <li>Delete cookies from your device</li>
              <li>Block cookies by activating the setting on your browser that allows you to refuse all or some cookies</li>
              <li>Set your browser to notify you when you receive a cookie</li>
              <li>Use privacy-focused browser extensions</li>
            </ul>
            <p className="text-white/70 leading-relaxed mb-6">
              Please note that restricting cookies may impact your experience on our website, as some features may not function properly without cookies.
            </p>
            <p className="text-white/70 leading-relaxed mb-6">
              For more information about managing cookies, visit the help pages of your browser:
            </p>
            <ul className="list-disc pl-6 text-white/70 mb-6 space-y-2">
              <li>
                <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-photo-accent-300 hover:text-photo-accent-400 transition-colors">Google Chrome</a>
              </li>
              <li>
                <a href="https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer" target="_blank" rel="noopener noreferrer" className="text-photo-accent-300 hover:text-photo-accent-400 transition-colors">Mozilla Firefox</a>
              </li>
              <li>
                <a href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-photo-accent-300 hover:text-photo-accent-400 transition-colors">Microsoft Edge</a>
              </li>
              <li>
                <a href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-photo-accent-300 hover:text-photo-accent-400 transition-colors">Apple Safari</a>
              </li>
            </ul>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <h2 className="text-2xl font-light tracking-wide text-white mt-8 mb-4">Cookie Consent</h2>
            <p className="text-white/70 leading-relaxed mb-6">
              When you first visit our website, we may ask for your consent to use cookies through a cookie banner or consent management platform. You can choose to accept all cookies, only essential cookies, or customize your preferences. You can change your preferences at any time by accessing the cookie settings on our website.
            </p>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <h2 className="text-2xl font-light tracking-wide text-white mt-8 mb-4">Changes to Our Cookies Policy</h2>
            <p className="text-white/70 leading-relaxed mb-6">
              We may update this Cookies Policy from time to time to reflect changes in technology, regulation, or our business practices. Any changes will be posted on this page with an updated revision date. We encourage you to periodically review this page to stay informed about our use of cookies.
            </p>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <h2 className="text-2xl font-light tracking-wide text-white mt-8 mb-4">Contact Us</h2>
            <p className="text-white/70 leading-relaxed mb-6">
              If you have any questions or concerns about our Cookies Policy or our use of cookies, please contact us at:
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