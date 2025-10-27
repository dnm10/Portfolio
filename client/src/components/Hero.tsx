import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@assets/generated_images/Professional_developer_workspace_photo_b5c28806.png";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export function Hero() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center items-center relative px-6 md:px-8"
    >
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col lg:flex-row items-center justify-between gap-12"
        >
          <div className="flex-1 max-w-3xl">
            <motion.h1
              variants={itemVariants}
              className="text-6xl md:text-7xl lg:text-8xl font-bold font-display tracking-tight mb-6"
              data-testid="text-hero-title"
            >
              Hi, I'm a{" "}
              <span className="text-primary">Developer</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed"
              data-testid="text-hero-subtitle"
            >
              Building beautiful, functional, and user-centered digital experiences
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-base md:text-lg text-foreground/80 mb-12 leading-relaxed"
              data-testid="text-hero-description"
            >
              I specialize in creating modern web applications with a focus on clean code,
              intuitive design, and exceptional user experiences.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4"
            >
              <Button
                size="lg"
                onClick={() => scrollToSection("#projects")}
                data-testid="button-view-projects"
              >
                View Projects
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("#contact")}
                data-testid="button-contact"
              >
                Contact Me
              </Button>
            </motion.div>
          </div>

          <motion.div
            variants={itemVariants}
            className="hidden lg:block flex-1 max-w-md"
          >
            <div className="relative w-full aspect-[3/4] rounded-lg overflow-hidden border border-border">
              <img 
                src={heroImage} 
                alt="Professional workspace" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.button
          onClick={() => scrollToSection("#about")}
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="text-muted-foreground hover:text-foreground transition-colors"
          data-testid="button-scroll-down"
        >
          <ChevronDown className="h-8 w-8" />
        </motion.button>
      </motion.div>
    </section>
  );
}
