import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Github, Linkedin, Twitter } from 'lucide-react';
import ScrambledText from './ScrambledText';
import hero from "../assets/hero.jpg"; // Assuming you have a hero image

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/Suraj-Web-Project",
      label: "GitHub",
      color: "hover:text-gray-300",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/surajnayak-web/",
      label: "LinkedIn",
      color: "hover:text-blue-400",
    },
    {
      icon: Twitter,
      href: "#",
      label: "Twitter",
      color: "hover:text-blue-400",
    },
  ];

  const roles = [
    'QA Engineer',
    'Web Developer', 
    'Frontend Developer',
    'Backend Developer'
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative z-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Mobile: Photo First */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center lg:hidden order-1"
          >
            <div className="relative">
              <motion.div 
                className="w-64 h-80 sm:w-72 sm:h-90 rounded-3xl bg-gradient-to-br from-cyan-400 to-pink-500 p-1"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="w-full h-full rounded-3xl bg-gray-900 flex items-center justify-center overflow-hidden">
                  <img
                    src={hero}
                    alt="Suraj Nayak - MERN Stack Developer"
                    className="w-full h-full rounded-3xl object-cover"
                  />
                </div>
              </motion.div>
              {/* Floating elements for mobile */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-3 -right-3 w-8 h-8 bg-cyan-400 rounded-full opacity-60"
              />
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                className="absolute -bottom-3 -left-3 w-6 h-6 bg-pink-500 rounded-full opacity-60"
              />
            </div>
          </motion.div>

          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4 lg:space-y-6 text-center lg:text-left order-2 lg:order-1"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
              Suraj Nayak
            </h1>
            
            <div className="text-xl sm:text-2xl lg:text-3xl font-semibold min-h-[2.5rem] lg:min-h-[3rem] flex items-center justify-center lg:justify-start">
              <ScrambledText 
                texts={roles}
                className="font-bold"
              />
            </div>
            
            <p className="text-lg sm:text-xl text-gray-300 max-w-lg leading-relaxed mx-auto lg:mx-0">
              Passionate full-stack developer crafting innovative web solutions with 
              modern technologies and creative problem-solving.
            </p>
            
            {/* Social Media Links */}
            <div className="flex gap-4 sm:gap-6 pt-4 justify-center lg:justify-start">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 sm:w-12 sm:h-12 bg-gray-800 border border-cyan-400/30 rounded-full flex items-center justify-center text-cyan-400 hover:bg-cyan-400 hover:text-black transition-all duration-300`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Desktop: Profile Photo */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:flex justify-center lg:justify-end order-3 lg:order-2"
          >
            <div className="relative">
              <motion.div 
                className="w-80 h-96 md:w-96 md:h-[28rem] rounded-3xl bg-gradient-to-br from-cyan-400 to-pink-500 p-1"
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="w-full h-full rounded-3xl bg-gray-900 flex items-center justify-center overflow-hidden">
                  <img
                    src={hero}
                    alt="Suraj Nayak - MERN Stack Developer"
                    className="w-full h-full rounded-3xl object-cover"
                  />
                </div>
              </motion.div>
              {/* Floating elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -right-4 w-12 h-12 bg-cyan-400 rounded-full opacity-60"
              />
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                className="absolute -bottom-4 -left-4 w-10 h-10 bg-pink-500 rounded-full opacity-60"
              />
              <motion.div
                animate={{ x: [0, 15, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
                className="absolute top-1/2 -left-6 w-8 h-8 bg-green-400 rounded-full opacity-60"
              />
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="cursor-pointer"
            onClick={() => scrollToSection('about')}
          >
            <ChevronDown className="w-6 h-6 sm:w-8 sm:h-8 text-cyan-400" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;