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

// Achievement Schema
export const achievementSchema = z.object({
  id: z.string(),
  title: z.string(),
  issuer: z.string(),
  date: z.string(),
  description: z.string().optional(),
  certificateUrl: z.string().url().optional(),
  credentialId: z.string().optional(),
});
export type Achievement = z.infer<typeof achievementSchema>;

// Extra Curricular Schema
export const extraCurricularSchema = z.object({
  id: z.string(),
  title: z.string(),
  organization: z.string(),
  period: z.string(),
  description: z.string(),
  role: z.string().optional(),
});
export type ExtraCurricular = z.infer<typeof extraCurricularSchema>;


// ✅ Experience Schema (new)
export const experienceSchema = z.object({
  id: z.string(),
  title: z.string(), // e.g., "Frontend Developer Intern"
  company: z.string(), // e.g., "Google"
  period: z.string(), // e.g., "Jun 2024 – Aug 2024"
  location: z.string().optional(),
  description: z.string(),
  technologies: z.array(z.string()).optional(),
});
export type Experience = z.infer<typeof experienceSchema>;


// ✅ Portfolio Data Schema (complete portfolio)
export const portfolioSchema = z.object({
  about: aboutSchema,
  contact: contactSchema,
  projects: z.array(projectSchema),
  skills: z.array(skillSchema),
  achievements: z.array(achievementSchema),
  extraCurricular: z.array(extraCurricularSchema),
  experience: z.array(experienceSchema), // ✅ added here
});

export type Portfolio = z.infer<typeof portfolioSchema>;
