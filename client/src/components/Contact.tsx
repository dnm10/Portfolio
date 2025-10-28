import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Card } from "@/components/ui/card";
import { Mail, Github, Linkedin, Phone } from "lucide-react";
import type { Contact as ContactType } from "@shared/schema";

interface ContactProps {
  data: ContactType;
}

export function Contact({ data }: ContactProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: data.email,
      href: `mailto:${data.email}`,
      testId: "link-email",
    },
    {
      icon: Github,
      label: "GitHub",
      value: data.github.replace("https://", "").replace("github.com/", "@"),
      href: data.github,
      testId: "link-github",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Connect on LinkedIn",
      href: data.linkedin,
      testId: "link-linkedin",
    },
  ];

  if (data.phone) {
    contactMethods.push({
      icon: Phone,
      label: "Phone",
      value: data.phone,
      href: `tel:${data.phone}`,
      testId: "link-phone",
    });
  }

  return (
    <section id="contact" className="py-20 md:py-32 px-6 md:px-8 bg-[#0a0e17]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <div className="max-w-2xl mx-auto text-center">
            <h2
              className="text-4xl md:text-5xl font-bold font-display mb-6"
              data-testid="text-contact-heading"
            >
              Get In Touch
            </h2>
            <p
              className="text-base md:text-lg text-muted-foreground mb-12 leading-relaxed"
              data-testid="text-contact-description"
            >
              I'm always open to discussing new projects, creative ideas, or
              opportunities to be part of your vision.
            </p>
          </div>

          <div className="max-w-2xl mx-auto space-y-4">
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <motion.div
                  key={method.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                >
                  <Card className="hover-elevate transition-all duration-300">
                    <a
                      href={method.href}
                      target={method.label !== "Email" && method.label !== "Phone" ? "_blank" : undefined}
                      rel={method.label !== "Email" && method.label !== "Phone" ? "noopener noreferrer" : undefined}
                      className="flex items-center gap-4 p-6"
                      data-testid={method.testId}
                    >
                      <div className="flex-shrink-0 w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-medium mb-1" data-testid={`text-${method.label.toLowerCase()}-label`}>
                          {method.label}
                        </p>
                        <p className="text-sm text-muted-foreground truncate" data-testid={`text-${method.label.toLowerCase()}-value`}>
                          {method.value}
                        </p>
                      </div>
                    </a>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
