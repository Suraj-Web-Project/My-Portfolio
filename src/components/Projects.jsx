import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import image4 from "../assets/image4.png";
import image5 from "../assets/image5.png";
import image6 from "../assets/image6.png";
import image7 from "../assets/image7.png";
import image8 from "../assets/image8.png";
import image9 from "../assets/image9.png";



const Projects = () => {
  const projects = [
    {
      title: "Real-Time Chat Application",
      description:
        "Real-time chat application with instant messaging, user authentication, and responsive design for seamless communication across devices.",
      tech: ["React", "Node.js", "MongoDB", "Socket.io"],
      liveDemo: "https://chat-app-8ert.onrender.com/",
      github: "https://github.com/Suraj-Web-Project/Chat-App",
      image: image4,
    },
    {
      title: "AI Virtual Assistant",
      description:
        "AI-powered virtual assistant with conversational interface, task automation, and API integration for real-time responses.",
      tech: ["React", "Tailwind CSS", "JavaScript", "Google API"],
      liveDemo: "https://surajvirtualassistant.netlify.app/",
      github: "https://github.com/Suraj-Web-Project/Shifra-2.0",
      image: image5,
    },
    {
      title: "Food Delivery Web App",
      description:
        "Full-stack food delivery web application with restaurant browsing, cart management, and order placement features for smooth user experience.",
      tech: ["React", "JavaScript", "Tailwind CSS"],
      liveDemo: "https://khana-app.vercel.app/",
      github: "https://github.com/Suraj-Web-Project/KHANA-APP",
      image: image6,
    },
    {
      title: "Snake Game",
      description:
        "Interactive Snake game with dynamic gameplay, score tracking, and keyboard controls for engaging user interaction.",
      tech: ["Html", "CSS3", "JavaScript"],
      liveDemo: "https://suraj-web-project.github.io/Snake-Game/",
      github: "https://github.com/Suraj-Web-Project/Snake-Game",
      image: image7,
    },
    {
      title: "Agency.io",
      description:
        "Responsive agency website with service showcase, project portfolio, and smooth animations for modern web presence.",
      tech: ["React", "Tailwind CSS", "Framer Motion"],
      liveDemo: "https://designdock-app.netlify.app/",
      github: "https://github.com/Suraj-Web-Project/Agency.Ai",
      image: image8,
    },
    {
      title: "Food Delivery UI",
      description:
        "Visually appealing food delivery user interface with responsive design, intuitive navigation, and consistent layout for enhanced UX.",
      tech: ["React", "Tailwind CSS", "JavaScript"],
      liveDemo: "https://hungryhub-ui.netlify.app/",
      github: "https://github.com/Suraj-Web-Project/FOOD-DELIVERY-WEB",
      image: image9,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="projects" className="py-20 relative z-10">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-cyan-400">Projects</h2>
          <div className="w-24 h-1 bg-cyan-400 mx-auto"></div>
          <p className="text-gray-400 mt-4 text-lg">Some of my recent work</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-gray-800/50 border border-cyan-400/20 rounded-lg overflow-hidden hover:border-cyan-400/50 transition-all duration-300 backdrop-blur-sm w-full"
              whileHover={{ y: -5 }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 sm:h-56 object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
              </div>
              
              <div className="p-4 md:p-6">
                <h3 className="text-xl font-bold mb-3 text-pink-400">{project.title}</h3>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-cyan-400/10 text-cyan-400 text-xs rounded-full border border-cyan-400/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <motion.a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-4 py-2 bg-transparent border border-cyan-400 text-cyan-400 rounded hover:bg-cyan-400 hover:text-black transition-all duration-300 text-sm"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </motion.a>
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-4 py-2 bg-transparent border border-gray-500 text-gray-300 rounded hover:bg-gray-500 hover:text-white transition-all duration-300 text-sm"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github className="w-4 h-4" />
                    GitHub
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;