import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card } from "@/components/ui/card";
import { MapPin, Calendar, Heart } from "lucide-react";
import type { About as AboutType } from "@shared/schema";

interface AboutProps {
  data: AboutType;
}

export function About({ data }: AboutProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 md:py-32 px-6 md:px-8 bg-white text-gray-900 dark:bg-[#0a0e17] dark:text-white transition-colors duration-100">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2
            className="text-4xl md:text-5xl font-bold font-display mb-16 text-center"
            data-testid="text-about-heading"
          >
            About Me
          </h2>

          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-6"
            >
              <div className="text-base md:text-lg leading-relaxed space-y-4">
                {data.bio.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="text-foreground/80" data-testid={`text-bio-paragraph-${index}`}>
                    {paragraph}
                  </p>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Card className="p-6 space-y-6" data-testid="card-quick-facts">
                <h3 className="text-2xl md:text-3xl font-semibold mb-4">
                  Quick Facts
                </h3>

                {data.location && (
                  <div className="flex items-start gap-4">
                    <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Location</p>
                      <p className="text-sm text-muted-foreground" data-testid="text-location">
                        {data.location}
                      </p>
                    </div>
                  </div>
                )}

                {data.availability && (
                  <div className="flex items-start gap-4">
                    <Calendar className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Availability</p>
                      <p className="text-sm text-muted-foreground" data-testid="text-availability">
                        {data.availability}
                      </p>
                    </div>
                  </div>
                )}

                {data.interests && data.interests.length > 0 && (
                  <div className="flex items-start gap-4">
                    <Heart className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Interests</p>
                      <p className="text-sm text-muted-foreground" data-testid="text-interests">
                        {data.interests.join(", ")}
                      </p>
                    </div>
                  </div>
                )}
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
