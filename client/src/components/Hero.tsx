"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ParticlesBackground } from "./ParticlesBackground";
import AIChatbot from "@/components/AIChatbot";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { useTheme } from "next-themes"; // ✅ Correct hook import

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

export function Hero() {
  const { theme } = useTheme(); 

  const [text] = useTypewriter({
    words: ["Machine Learning Engineer", "AI Engineer", "Full-stack Developer", "Tech Enthusiast"],
    loop: true,
    delaySpeed: 2000,
  });

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className={`relative min-h-screen flex flex-col justify-center items-center overflow-hidden px-6 md:px-8 transition-colors duration-500 ${
        theme === "dark"
          ? "bg-[#0a0e17] text-white" 
          : "bg-gradient-to-b from-white  text-gray-900" // light theme
      }`}
    >


      {/* ✅ Particle background reacts to theme */}
      <ParticlesBackground key={theme} />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex flex-col items-center justify-center text-center"
      >
        <motion.img
          src="/your-photo.jpg"
          alt="Profile"
          className={`w-24 h-24 rounded-full border-2 mb-6 ${
            theme === "dark" ? "border-gray-400" : "border-gray-600"
          }`}
          variants={itemVariants}
        />

        <motion.h1
          variants={itemVariants}
          className="text-4xl md:text-6xl font-bold leading-tight mb-4"
        >
          Creating web products,
          <br />
          brands, and experiences.
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className={`text-lg md:text-xl ${
            theme === "dark" ? "text-gray-300" : "text-gray-600"
          }`}
        >
          Hi! I’m{" "}
          <span className="text-primary font-semibold">Sajal</span> — A Passionate{" "}
          <span
            className={`${
              theme === "dark" ? "text-cyan-400" : "text-blue-600"
            }`}
          >
            {text}
          </span>
          <Cursor />
        </motion.p>

        <motion.div variants={itemVariants} className="mt-8">
          <Button
            size="lg"
            onClick={() => scrollToSection("#works")}
            className="px-8 py-3 text-lg"
          >
            See my work
          </Button>
        </motion.div>
      </motion.div>

      {/* Scroll Down Arrow */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.button
          onClick={() => scrollToSection("#about")}
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className={`transition-colors ${
            theme === "dark"
              ? "text-gray-400 hover:text-white"
              : "text-gray-600 hover:text-gray-900"
          }`}
        >
          <ChevronDown className="h-8 w-8" />
        </motion.button>
      </motion.div>
      <AIChatbot />
    </section>
  );
}
