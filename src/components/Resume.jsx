import React from "react";
import { motion } from "framer-motion";
import { Download, Briefcase, GraduationCap, Award } from "lucide-react";

const Resume = () => {
  const experience = [
    {
      title: "Software Developer & Testing Engineer (Fresher)",
      company: "Self Projects / Academic Work",
      duration: "2026 - Present",
      description:
        "Developed and tested web applications using the MERN stack through academic and self-driven projects. Built RESTful APIs, integrated frontend and backend, performed manual and API testing, and used Git/GitHub for version control while following clean coding practices.",
    },
    {
      title: "Full Stack Developer Intern",
      company: "Mind Brain Innovation",
      duration: "May 2025 - Sep 2025",
      description:
        "Designed and tested 15+ REST API endpoints with Node.js and Express.js for secure and efficient frontend–backend integration.",
    },
    {
      title: "Frontend Developer",
      company: "Personal Projects",
      duration: "2023 - 2024",
      description:
        "Developed 10+ responsive web applications using HTML, CSS, JavaScript, and React.js, adhering to usability and accessibility standards.",
    },
  ];

  const education = [
    {
      degree: "Master of Computer Application",
      school: "Gandhi Engineering College",
      duration: "2024 - 2026",
      description: "Specialized in Operating System and Computer Network.",
    },
    {
      degree: "Bachelor of Computer Application",
      school: "Presidency College",
      duration: "2021 - 2024",
      description: "Specialized in software engineering and web development.",
    },
  ];

  const certifications = [
    {
      name: "Frontend Development Certification",
      issuer: "IBM",
      date: "2025",
    },
    {
      name: "Introduction to Back-End Development",
      issuer: "Coursera",
      date: "2025",
    },
    {
      name: "Complete Core Java",
      issuer: "Quality Coder",
      date: "2025",
    },
  ];

  const TimelineItem = ({ item, icon: Icon, isLast }) => (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="relative flex items-start mb-8"
    >
      <div className="flex flex-col items-center mr-4">
        <div className="w-12 h-12 bg-cyan-400 rounded-full flex items-center justify-center">
          <Icon className="w-6 h-6 text-black" />
        </div>
        {!isLast && <div className="w-0.5 h-16 bg-cyan-400/30 mt-2"></div>}
      </div>
      <div className="flex-1">
        <h3 className="text-xl font-bold text-cyan-400 mb-1">
          {item.title || item.degree || item.name}
        </h3>
        <p className="text-pink-400 font-semibold mb-2">
          {item.company || item.school || item.issuer}
        </p>
        <p className="text-gray-400 text-sm mb-2">
          {item.duration || item.date}
        </p>
        <p className="text-gray-300">{item.description}</p>
      </div>
    </motion.div>
  );

  return (
    <section id="resume" className="py-20 relative z-10">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-cyan-400">
            Resume
          </h2>
          <div className="w-24 h-1 bg-cyan-400 mx-auto"></div>
          <p className="text-gray-400 mt-4 text-lg">My professional journey</p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Experience & Education */}
          <div className="lg:col-span-2 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold mb-8 text-pink-400 flex items-center gap-2">
                <Briefcase className="w-6 h-6" />
                Experience
              </h3>
              {experience.map((item, index) => (
                <TimelineItem
                  key={index}
                  item={item}
                  icon={Briefcase}
                  isLast={index === experience.length - 1}
                />
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold mb-8 text-pink-400 flex items-center gap-2">
                <GraduationCap className="w-6 h-6" />
                Education
              </h3>
              {education.map((item, index) => (
                <TimelineItem
                  key={index}
                  item={item}
                  icon={GraduationCap}
                  isLast={index === education.length - 1}
                />
              ))}
            </motion.div>
          </div>

          {/* Certifications & Download */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3 className="text-2xl font-bold mb-6 text-pink-400 flex items-center gap-2">
                <Award className="w-6 h-6" />
                Certifications
              </h3>

              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="p-3 md:p-4 bg-gray-800/50 border border-cyan-400/20 rounded-lg"
                  >
                    <h4 className="font-semibold text-cyan-400 text-sm md:text-base">
                      {cert.name}
                    </h4>
                    <p className="text-gray-400 text-sm">{cert.issuer}</p>
                    <p className="text-gray-500 text-xs">{cert.date}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Download Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <motion.button
                className="w-full px-6 py-3 bg-transparent border-2 border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  const link = document.createElement("a");
                  link.href =
                    "https://drive.google.com/uc?export=download&id=1X5KFGGa8CW7nu9LM8PJb5ADdo2VBbIPr";
                  link.download = "Suraj_Nayak_Resume.pdf";
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
              >
                <Download className="w-5 h-5" />
                Download Resume
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
