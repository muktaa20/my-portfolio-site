import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";
import PROFILE_PIC from "../../assets/images/signa.svg";

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const textVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, delay: 0.5, ease: "easeOut" },
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, delay: 0.7, ease: "easeOut" },
  },
};

export default function AboutSection() {
  const { isDarkMode } = useTheme();

  return (
    <section
      id="about"
      className={`py-16 md:py-24 transition-colors duration-500 ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-800"
      }`}
    >
      <div className="container mx-auto px-6 lg:px-12 max-w-5xl">
        {/* Heading */}
        <div className="text-center mb-16">
          <motion.p
            className={`text-sm md:text-base font-semibold tracking-widest uppercase mb-2 ${
              isDarkMode ? "text-blue-400" : "text-blue-600"
            }`}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            GET TO KNOW ME
          </motion.p>
          <motion.h2
            className={`text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight ${
              isDarkMode ? "text-white" : "text-gray-900"
            }`}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            About <span className="text-blue-500">Me</span>
          </motion.h2>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            className={`p-8 rounded-lg shadow-2xl ${
              isDarkMode ? "bg-gray-800" : "bg-white"
            }`}
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.h3
              className={`text-2xl font-bold mb-4 ${
                isDarkMode ? "text-white" : "text-gray-900"
              }`}
              variants={textVariants}
            >
              My Story & Mission
            </motion.h3>
            <motion.p
              className={`text-base md:text-lg mb-4 leading-relaxed ${
                isDarkMode ? "text-gray-300" : "text-gray-700"
              }`}
              variants={textVariants}
            >
              As a dedicated frontend developer, my mission is to transform
              creative ideas into stunning and intuitive web applications. I
              thrive on building seamless user experiences that are visually
              appealing and highly performant.
            </motion.p>
            <motion.p
              className={`text-base md:text-lg leading-relaxed ${
                isDarkMode ? "text-gray-300" : "text-gray-700"
              }`}
              variants={textVariants}
            >
              I specialize in modern technologies like <b>React</b>, <b>Next.js</b>, and{" "}
              <b>Tailwind CSS</b>, and I’m passionate about writing clean,
              maintainable, and scalable code.
            </motion.p>
          </motion.div>

          {/* Image Section */}
          <motion.div
            className="hidden md:flex justify-center md:justify-end"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.img
              src={PROFILE_PIC}
              alt="Developer Signature"
              className={`w-64 h-auto rounded-xl transition duration-500 ${
                isDarkMode ? "invert brightness-0" : "brightness-0 invert-0"
              }`}
              variants={imageVariants}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
