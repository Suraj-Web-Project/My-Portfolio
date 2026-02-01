import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import image1 from '../assets/imag1.png';
import image2 from '../assets/image2.png';
import image3 from '../assets/image3.jpeg';
const About = () => {
  const profileImages = [
    image1,image2,image3
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % profileImages.length
      );
    }, 1000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [profileImages.length]);

  const skills = [
    'MongoDB', 'Express.js', 'React.js', 'Node.js', 'JavaScript',
    'TypeScript', 'Java', 'Git', 'GitHub', 'Manual Testing', 'Jira', 'Redux', 'Bugasura',
    'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap', 'RESTful APIs', 'Agile Methodologies'
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="about" className="py-20 relative z-10">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-cyan-400">
            About Me
          </h2>
          <div className="w-24 h-1 bg-cyan-400 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="relative inline-block">
              <motion.div className="w-72 h-80 md:w-80 md:h-96 rounded-3xl bg-gradient-to-br from-cyan-400 to-pink-500 p-1 mx-auto">
                <div className="w-full h-full rounded-3xl bg-gray-900 flex items-center justify-center">
                  <motion.img
                    key={currentImageIndex}
                    src={profileImages[currentImageIndex]}
                    alt="Profile"
                    className="w-full h-full rounded-3xl object-cover"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <p className="text-gray-300 text-lg leading-relaxed">
              I’m a MERN Stack Developer with hands-on experience building
              responsive web applications. I enjoy creating clean user
              interfaces and developing reliable backend features while
              continuously learning and improving my skills.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              My journey in web development started with a curiosity about how
              websites work, and it has evolved into a deep passion for creating
              innovative digital solutions. I'm always eager to learn new
              technologies and take on challenging projects.
            </p>

            <div className="mt-8">
              <h3 className="text-2xl font-bold mb-6 text-pink-400">
                Skills & Technologies
              </h3>
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                className="flex flex-wrap gap-3"
              >
                {skills.map((skill, index) => (
                  <motion.span
                    key={index}
                    variants={itemVariants}
                    className="px-4 py-2 bg-gray-800 border border-cyan-400 text-cyan-400 rounded-full hover:bg-cyan-400 hover:text-black transition-all duration-300 cursor-pointer"
                    whileHover={{ scale: 1.05 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;