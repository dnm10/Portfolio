import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import type { Project } from "@shared/schema";

interface ProjectsProps {
  data: Project[];
}

export function Projects({ data }: ProjectsProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-20 md:py-32 px-6 md:px-8 bg-background text-foreground transition-colors duration-500">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2
            className="text-4xl md:text-5xl font-bold font-display mb-16 text-center"
            data-testid="text-projects-heading"
          >
            Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card
                  className="overflow-hidden h-full flex flex-col hover-elevate transition-all duration-300 hover:-translate-y-2"
                  data-testid={`card-project-${project.id}`}
                >
                  <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 relative overflow-hidden">
                    {project.thumbnail ? (
                      <img
                        src={project.thumbnail}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <p className="text-4xl font-bold text-primary/20">
                          {project.title.charAt(0)}
                        </p>
                      </div>
                    )}
                  </div>

                  <div className="p-6 flex-1 flex flex-col">
                    <h3
                      className="text-xl md:text-2xl font-semibold mb-3"
                      data-testid={`text-project-title-${project.id}`}
                    >
                      {project.title}
                    </h3>

                    <p
                      className="text-sm md:text-base text-muted-foreground mb-4 flex-1 leading-relaxed"
                      data-testid={`text-project-description-${project.id}`}
                    >
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.techStack.map((tech, techIndex) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="text-xs"
                          data-testid={`badge-tech-${project.id}-${techIndex}`}
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex gap-3 mt-auto">
                      {project.liveUrl && (
                        <Button
                          variant="default"
                          size="sm"
                          asChild
                          className="flex-1"
                        >
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            data-testid={`link-live-${project.id}`}
                          >
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Live Demo
                          </a>
                        </Button>
                      )}
                      {project.githubUrl && (
                        <Button
                          variant="outline"
                          size="sm"
                          asChild
                          className="flex-1"
                        >
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            data-testid={`link-github-${project.id}`}
                          >
                            <Github className="h-4 w-4 mr-2" />
                            Code
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
