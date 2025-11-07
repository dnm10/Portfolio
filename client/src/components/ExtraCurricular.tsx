"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Building2, ChevronLeft, ChevronRight } from "lucide-react";
import type { ExtraCurricular as ExtraCurricularType } from "@shared/schema";
import { Button } from "@/components/ui/button";

interface ExtraCurricularProps {
  data: ExtraCurricularType[];
}

export function ExtraCurricular({ data }: ExtraCurricularProps) {
  const ref = useRef(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  if (!data || data.length === 0) return null;

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.clientWidth * 0.8;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="extracurricular"
      className="relative py-20 md:py-32 px-6 md:px-8 bg-background text-foreground transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-16 text-center">
            Extra Curricular Activities
          </h2>

          {/* Arrows */}
          <div className="absolute left-8 top-1/2 transform -translate-y-1/2 z-10">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => scroll("left")}
              className="rounded-full bg-primary/10 hover:bg-primary/20"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
          </div>

          <div className="absolute right-8 top-1/2 transform -translate-y-1/2 z-10">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => scroll("right")}
              className="rounded-full bg-primary/10 hover:bg-primary/20"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>

          {/* Scrollable Container */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scroll-smooth scrollbar-hide pb-4"
          >
            {data.map((activity, index) => (
              <motion.div
                key={activity.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex-shrink-0 w-[320px]"
              >
                <Card className="p-6 h-full bg-card hover:shadow-xl transition-all duration-300">
                  <div className="flex flex-col gap-3 mb-3">
                    <h3 className="text-xl font-semibold">{activity.title}</h3>
                    <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Building2 className="h-4 w-4" />
                        <span>{activity.organization}</span>
                      </div>
                      <span className="opacity-60">•</span>
                      <span>{activity.period}</span>
                    </div>

                    {activity.role && (
                      <Badge variant="secondary" className="w-fit">
                        <Users className="h-3 w-3 mr-1" />
                        {activity.role}
                      </Badge>
                    )}
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed">
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
