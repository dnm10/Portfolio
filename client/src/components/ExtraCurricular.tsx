import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Building2 } from "lucide-react";
import type { ExtraCurricular as ExtraCurricularType } from "@shared/schema";

interface ExtraCurricularProps {
  data: ExtraCurricularType[];
}

export function ExtraCurricular({ data }: ExtraCurricularProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  if (!data || data.length === 0) {
    return null;
  }

  return (
    <section id="extracurricular" className="py-20 md:py-32 px-6 md:px-8 bg-background text-foreground transition-colors duration-500">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2
            className="text-4xl md:text-5xl font-bold font-display mb-16 text-center"
            data-testid="text-extracurricular-heading"
          >
            Extra Curricular Activities
          </h2>

          <div className="max-w-4xl mx-auto space-y-6">
            {data.map((activity, index) => (
              <motion.div
                key={activity.id}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card
                  className="p-6 hover-elevate transition-all duration-300"
                  data-testid={`card-activity-${activity.id}`}
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                    <div className="flex-1">
                      <h3
                        className="text-xl md:text-2xl font-semibold mb-2"
                        data-testid={`text-activity-title-${activity.id}`}
                      >
                        {activity.title}
                      </h3>
                      <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground mb-3">
                        <div className="flex items-center gap-2">
                          <Building2 className="h-4 w-4" />
                          <span data-testid={`text-activity-org-${activity.id}`}>
                            {activity.organization}
                          </span>
                        </div>
                        <span className="text-muted-foreground/50">•</span>
                        <span data-testid={`text-activity-period-${activity.id}`}>
                          {activity.period}
                        </span>
                      </div>
                    </div>

                    {activity.role && (
                      <Badge
                        variant="secondary"
                        className="self-start"
                        data-testid={`badge-role-${activity.id}`}
                      >
                        <Users className="h-3 w-3 mr-1" />
                        {activity.role}
                      </Badge>
                    )}
                  </div>

                  <p
                    className="text-base text-foreground/80 leading-relaxed"
                    data-testid={`text-activity-description-${activity.id}`}
                  >
                    {activity.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
