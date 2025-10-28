import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Card } from "@/components/ui/card";
import {
  Code2,
  Layers,
  Wrench,
  Users,
  type LucideIcon,
} from "lucide-react";
import type { Skill } from "@shared/schema";

interface SkillsProps {
  data: Skill[];
}

const categoryIcons: Record<string, LucideIcon> = {
  Languages: Code2,
  Frameworks: Layers,
  Tools: Wrench,
  "Soft Skills": Users,
};

export function Skills({ data }: SkillsProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const categories = ["Languages", "Frameworks", "Tools", "Soft Skills"];
  const groupedSkills = categories.reduce((acc, category) => {
    acc[category] = data.filter((skill) => skill.category === category);
    return acc;
  }, {} as Record<string, Skill[]>);

  return (
    <section id="skills" className="py-20 md:py-32 px-6 md:px-8 bg-[#0a0e17]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2
            className="text-4xl md:text-5xl font-bold font-display mb-16 text-center"
            data-testid="text-skills-heading"
          >
            Skills & Technologies
          </h2>

          <div className="space-y-12">
            {categories.map((category, categoryIndex) => {
              const skills = groupedSkills[category];
              if (!skills || skills.length === 0) return null;

              const Icon = categoryIcons[category];

              return (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                >
                  <div className="flex items-center gap-3 mb-6">
                    <Icon className="h-6 w-6 text-primary" />
                    <h3
                      className="text-2xl md:text-3xl font-semibold"
                      data-testid={`text-category-${category.toLowerCase().replace(' ', '-')}`}
                    >
                      {category}
                    </h3>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.id}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{
                          duration: 0.3,
                          delay: categoryIndex * 0.1 + skillIndex * 0.05,
                        }}
                      >
                        <Card
                          className="p-6 text-center hover-elevate transition-all duration-300"
                          data-testid={`card-skill-${skill.id}`}
                        >
                          <p
                            className="font-medium text-sm md:text-base"
                            data-testid={`text-skill-name-${skill.id}`}
                          >
                            {skill.name}
                          </p>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
