import { z } from "zod";

// Portfolio Project Schema
export const projectSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
  thumbnail: z.string().optional(),
  techStack: z.array(z.string()),
  liveUrl: z.string().url().optional(),
  githubUrl: z.string().url().optional(),
  featured: z.boolean().default(false),
});

export type Project = z.infer<typeof projectSchema>;

// Skills Schema
export const skillSchema = z.object({
  id: z.string(),
  name: z.string(),
  category: z.enum(["Languages", "Frameworks", "Tools", "Soft Skills"]),
  icon: z.string().optional(),
});

export type Skill = z.infer<typeof skillSchema>;

// About Info Schema
export const aboutSchema = z.object({
  name: z.string(),
  title: z.string(),
  bio: z.string(),
  location: z.string().optional(),
  availability: z.string().optional(),
  interests: z.array(z.string()).optional(),
  profileImage: z.string().optional(),
});

export type About = z.infer<typeof aboutSchema>;

// Contact Info Schema
export const contactSchema = z.object({
  email: z.string().email(),
  github: z.string().url(),
  linkedin: z.string().url(),
  phone: z.string().optional(),
});

export type Contact = z.infer<typeof contactSchema>;

// Portfolio Data Schema (complete portfolio)
export const portfolioSchema = z.object({
  about: aboutSchema,
  contact: contactSchema,
  projects: z.array(projectSchema),
  skills: z.array(skillSchema),
});

export type Portfolio = z.infer<typeof portfolioSchema>;
