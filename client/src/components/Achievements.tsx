import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Award, ExternalLink, Calendar } from "lucide-react";
import type { Achievement } from "@shared/schema";

interface AchievementsProps {
  data: Achievement[];
}

export function Achievements({ data }: AchievementsProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  if (!data || data.length === 0) {
    return null;
  }

  return (
    <section id="achievements" className="py-20 md:py-32 px-6 md:px-8 bg-background text-foreground transition-colors duration-500">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2
            className="text-4xl md:text-5xl font-bold font-display mb-16 text-center"
            data-testid="text-achievements-heading"
          >
            Achievements & Certifications
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.map((achievement, index) => (
              <motion.div
                key={achievement.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card
                  className="p-6 h-full flex flex-col hover-elevate transition-all duration-300"
                  data-testid={`card-achievement-${achievement.id}`}
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center">
                      <Award className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3
                        className="font-semibold text-lg mb-1"
                        data-testid={`text-achievement-title-${achievement.id}`}
                      >
                        {achievement.title}
                      </h3>
                      <p
                        className="text-sm text-muted-foreground"
                        data-testid={`text-achievement-issuer-${achievement.id}`}
                      >
                        {achievement.issuer}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 mb-3">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <p
                      className="text-sm text-muted-foreground"
                      data-testid={`text-achievement-date-${achievement.id}`}
                    >
                      {achievement.date}
                    </p>
                  </div>

                  {achievement.description && (
                    <p
                      className="text-sm text-foreground/80 mb-4 flex-1"
                      data-testid={`text-achievement-description-${achievement.id}`}
                    >
                      {achievement.description}
                    </p>
                  )}

                  {achievement.credentialId && (
                    <p className="text-xs text-muted-foreground mb-3">
                      ID: {achievement.credentialId}
                    </p>
                  )}

                  {achievement.certificateUrl && (
                    <Button
                      variant="outline"
                      size="sm"
                      asChild
                      className="mt-auto"
                    >
                      <a
                        href={achievement.certificateUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-testid={`link-certificate-${achievement.id}`}
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        View Certificate
                      </a>
                    </Button>
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
