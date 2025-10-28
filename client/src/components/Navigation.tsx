"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";

const navLinks = [
  { name: "Home", href: "#hero" },
  { name: "Services", href: "#services" },
  { name: "Resume", href: "#resume" },
  { name: "Works", href: "#works" },
  { name: "Skills", href: "#skills" },
  { name: "Testimonial", href: "#testimonial" },
  { name: "Contact", href: "#contact" },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, setTheme } = useTheme();
  useEffect(() => {
  console.log("🌗 Current theme:", theme);
}, [theme]);


  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <>
      <motion.nav
        initial={false}
        animate={{ y: 0 }}
        transition={{ duration: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "backdrop-blur-md border-b border-border bg-white/95 dark:bg-[#0f0f0f]/95"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <button
              onClick={() => scrollToSection("#hero")}
              className="text-2xl font-bold font-display transition-colors text-gray-900 dark:text-white hover:text-primary dark:hover:text-primary"
            >
              SAJAL
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="text-sm font-medium transition-colors text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary"
                >
                  {link.name}
                </button>
              ))}

              {/* Theme Toggle */}
              <Button
                size="icon"
                variant="ghost"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="ml-2 text-gray-800 dark:text-gray-200 hover:text-primary"
              >
                {theme === "dark" ? (
                  <Sun className="h-5 w-5" />
                ) : (
                  <Moon className="h-5 w-5" />
                )}
              </Button>
            </div>

            {/* Mobile Controls */}
            <div className="flex items-center gap-2 md:hidden">
              <Button
                size="icon"
                variant="ghost"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="text-gray-800 dark:text-gray-200"
              >
                {theme === "dark" ? (
                  <Sun className="h-5 w-5" />
                ) : (
                  <Moon className="h-5 w-5" />
                )}
              </Button>

              <Button
                size="icon"
                variant="ghost"
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-800 dark:text-gray-200"
              >
                {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 backdrop-blur-lg bg-white/95 dark:bg-[#0f0f0f]/95 md:hidden"
          >
            {navLinks.map((link, index) => (
              <motion.button
                key={link.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => scrollToSection(link.href)}
                className="text-2xl font-semibold transition-colors text-gray-800 dark:text-gray-100 hover:text-primary dark:hover:text-primary"
              >
                {link.name}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
