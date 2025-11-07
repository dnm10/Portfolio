"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Card } from "@/components/ui/card";
import { Briefcase, MapPin } from "lucide-react";
import type { Experience as ExperienceType } from "@shared/schema";

interface ExperienceProps {
  data: ExperienceType[];
}

export function Experience({ data }: ExperienceProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  if (!data || data.length === 0) return null;

  return (
    <section
      id="experience"
      className="relative py-20 md:py-32 px-6 md:px-8 bg-white text-gray-900 dark:bg-[#0a0e17] dark:text-white overflow-hidden"
    >

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-16 text-center">
            Work Experience
          </h2>

          {/* Timeline line */}
          <div className="relative before:absolute before:top-0 before:left-1/2 before:w-[2px] before:h-full before:bg-gradient-to-b before:from-blue-500/70 before:via-purple-500/60 before:to-blue-500/70 before:transform before:-translate-x-1/2">
            {data.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className={`relative mb-16 md:w-1/2 ${
                  index % 2 === 0
                    ? "md:ml-auto md:pl-12"
                    : "md:mr-auto md:pr-12 text-right"
                }`}
              >
                <Card className="p-6 backdrop-blur-md bg-white/10 dark:bg-[#0a0e17]/70 shadow-md hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center gap-3 mb-3">
                    <Briefcase className="h-5 w-5 text-primary" />
                    <h3 className="text-xl md:text-2xl font-semibold">
                      {exp.title}
                    </h3>
                  </div>

                  <p className="text-sm text-muted-foreground mb-2">
                    {exp.company} • {exp.period}
                  </p>

                  {exp.location && (
                    <p className="flex items-center gap-1 text-sm text-muted-foreground mb-3">
                      <MapPin className="h-4 w-4" /> {exp.location}
                    </p>
                  )}

                  <p className="text-base text-foreground/80 leading-relaxed mb-3">
                    {exp.description}
                  </p>

                  {exp.technologies && (
                    <div className="flex flex-wrap gap-2 mt-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
