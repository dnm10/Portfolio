import { Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Contact } from "@shared/schema";

interface FooterProps {
  contact: Contact;
}

export function Footer({ contact }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Achievements", href: "#achievements" },
    { name: "Extra Curricular", href: "#extracurricular" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="border-t border-border py-8 md:py-12 px-6 md:px-8 bg-white text-gray-900 dark:bg-[#0a0e17] dark:text-white transition-colors duration-100">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="text-sm text-muted-foreground" data-testid="text-copyright">
              © {currentYear} Portfolio. All rights reserved.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                data-testid={`footer-link-${link.name.toLowerCase()}`}
              >
                {link.name}
              </button>
            ))}
          </div>

          <div className="flex gap-3">
            <Button
              size="icon"
              variant="ghost"
              asChild
            >
              <a
                href={contact.github}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="footer-link-github"
              >
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button
              size="icon"
              variant="ghost"
              asChild
            >
              <a
                href={contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="footer-link-linkedin"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}
