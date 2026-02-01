import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Heart } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/Suraj-Web-Project",
      label: "GitHub",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/surajnayak-web/",
      label: "LinkedIn",
    },
    { icon: Twitter, href: "#", label: "Twitter" },
  ];

  return (
    <footer className="py-8 md:py-12 bg-gray-900/50 border-t border-cyan-400/20 relative z-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center space-y-6 md:space-y-8">
          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex space-x-4 md:space-x-6"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 md:w-12 md:h-12 bg-gray-800 border border-cyan-400/30 rounded-full flex items-center justify-center text-cyan-400 hover:bg-cyan-400 hover:text-black transition-all duration-300"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                aria-label={social.label}
              >
                <social.icon className="w-4 h-4 md:w-5 md:h-5" />
              </motion.a>
            ))}
          </motion.div>

          {/* Navigation Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4 md:gap-6 text-xs md:text-sm"
          >
            {['Home', 'About', 'Projects', 'Resume', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => {
                  const element = document.getElementById(item.toLowerCase());
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
              >
                {item}
              </button>
            ))}
          </motion.div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center text-gray-400 text-xs md:text-sm"
          >
            <p className="flex items-center justify-center gap-2">
              Made with <Heart className="w-3 h-3 md:w-4 md:h-4 text-red-500" /> by Suraj
            </p>
            <p className="mt-2">
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </motion.div>

          {/* Scroll to Top */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="w-8 h-8 md:w-10 md:h-10 bg-cyan-400/10 border border-cyan-400/30 rounded-full flex items-center justify-center text-cyan-400 hover:bg-cyan-400 hover:text-black transition-all duration-300"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;