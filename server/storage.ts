import type { Portfolio, Project, Skill, About, Contact } from "@shared/schema";

export interface IStorage {
  getPortfolio(): Promise<Portfolio>;
}

export class MemStorage implements IStorage {
  private portfolio: Portfolio;

  constructor() {
    this.portfolio = {
      about: {
        name: "Your Name",
        title: "Full Stack Developer",
        bio: "I'm a passionate developer with expertise in building modern web applications. I love creating beautiful, functional, and user-centered digital experiences that make a difference.\n\nWith several years of experience in software development, I specialize in full-stack development using modern technologies like React, TypeScript, and Node.js. I'm constantly learning and exploring new technologies to stay at the forefront of web development.\n\nWhen I'm not coding, I enjoy contributing to open-source projects, writing technical blog posts, and mentoring aspiring developers. I believe in writing clean, maintainable code and following best practices to deliver high-quality software.",
        location: "San Francisco, CA",
        availability: "Open to new opportunities",
        interests: ["Open Source", "Web Performance", "UI/UX Design", "Technical Writing"],
        profileImage: "",
      },
      contact: {
        email: "your.email@example.com",
        github: "https://github.com/yourusername",
        linkedin: "https://linkedin.com/in/yourusername",
      },
      projects: [
        {
          id: "1",
          title: "E-Commerce Platform",
          description: "A full-featured e-commerce platform with shopping cart, payment integration, and admin dashboard. Built with modern best practices and scalable architecture.",
          techStack: ["React", "Node.js", "PostgreSQL", "Stripe", "TypeScript"],
          liveUrl: "https://example.com",
          githubUrl: "https://github.com/yourusername/ecommerce",
          featured: true,
        },
        {
          id: "2",
          title: "Task Management App",
          description: "A collaborative task management application with real-time updates, team workspaces, and advanced filtering. Perfect for remote teams.",
          techStack: ["React", "Firebase", "Tailwind CSS", "TypeScript"],
          githubUrl: "https://github.com/yourusername/tasks",
          featured: true,
        },
        {
          id: "3",
          title: "Weather Dashboard",
          description: "A beautiful weather dashboard with detailed forecasts, weather maps, and location-based alerts. Clean UI with smooth animations.",
          techStack: ["React", "OpenWeather API", "Framer Motion", "CSS"],
          liveUrl: "https://example.com/weather",
          githubUrl: "https://github.com/yourusername/weather",
          featured: false,
        },
        {
          id: "4",
          title: "Portfolio Template",
          description: "A modern, responsive portfolio template for developers. Features smooth animations, dark mode, and easy customization.",
          techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
          githubUrl: "https://github.com/yourusername/portfolio",
          featured: false,
        },
        {
          id: "5",
          title: "Blog Platform",
          description: "A headless CMS-powered blog platform with markdown support, SEO optimization, and analytics integration.",
          techStack: ["Next.js", "Sanity.io", "React", "TypeScript"],
          liveUrl: "https://example.com/blog",
          featured: false,
        },
        {
          id: "6",
          title: "Chat Application",
          description: "Real-time chat application with rooms, direct messages, and file sharing. Built with WebSockets for instant communication.",
          techStack: ["React", "Socket.io", "Express", "MongoDB"],
          githubUrl: "https://github.com/yourusername/chat",
          featured: false,
        },
      ],
      skills: [
        // Languages
        { id: "1", name: "JavaScript", category: "Languages" },
        { id: "2", name: "TypeScript", category: "Languages" },
        { id: "3", name: "Python", category: "Languages" },
        { id: "4", name: "HTML/CSS", category: "Languages" },
        { id: "5", name: "SQL", category: "Languages" },
        { id: "6", name: "GraphQL", category: "Languages" },
        
        // Frameworks
        { id: "7", name: "React", category: "Frameworks" },
        { id: "8", name: "Next.js", category: "Frameworks" },
        { id: "9", name: "Node.js", category: "Frameworks" },
        { id: "10", name: "Express", category: "Frameworks" },
        { id: "11", name: "Tailwind CSS", category: "Frameworks" },
        { id: "12", name: "Vue.js", category: "Frameworks" },
        
        // Tools
        { id: "13", name: "Git", category: "Tools" },
        { id: "14", name: "Docker", category: "Tools" },
        { id: "15", name: "PostgreSQL", category: "Tools" },
        { id: "16", name: "MongoDB", category: "Tools" },
        { id: "17", name: "AWS", category: "Tools" },
        { id: "18", name: "Figma", category: "Tools" },
        { id: "19", name: "VS Code", category: "Tools" },
        { id: "20", name: "Postman", category: "Tools" },
        
        // Soft Skills
        { id: "21", name: "Problem Solving", category: "Soft Skills" },
        { id: "22", name: "Team Collaboration", category: "Soft Skills" },
        { id: "23", name: "Communication", category: "Soft Skills" },
        { id: "24", name: "Agile/Scrum", category: "Soft Skills" },
      ],
    };
  }

  async getPortfolio(): Promise<Portfolio> {
    return this.portfolio;
  }
}

export const storage = new MemStorage();
