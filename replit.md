# Portfolio Website

## Overview

This is a modern, full-stack portfolio website built with React, TypeScript, Express, and Drizzle ORM. The application showcases a developer's projects, skills, experience, and contact information through a clean, animated single-page interface. The design emphasizes professional minimalism with smooth animations, responsive layouts, and a content-first approach inspired by contemporary developer portfolios.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build System**
- **React with TypeScript**: Component-based UI using functional components and hooks
- **Vite**: Modern build tool providing fast HMR (Hot Module Replacement) and optimized production builds
- **Single Page Application (SPA)**: Client-side routing using Wouter for navigation without page reloads

**UI Component System**
- **shadcn/ui**: Comprehensive component library built on Radix UI primitives, configured in "new-york" style
- **Tailwind CSS**: Utility-first CSS framework with custom design tokens for colors, spacing, and typography
- **Design System**: Defined in `design_guidelines.md` featuring Inter and Space Grotesk/Cal Sans fonts, with specific type scales, spacing primitives, and grid systems
- **Animation Library**: Framer Motion for smooth, purposeful animations including scroll-triggered reveals and interactive transitions

**State Management & Data Fetching**
- **TanStack Query (React Query)**: Server state management with automatic caching, background refetching disabled (staleTime: Infinity)
- **Custom Query Client**: Centralized API request handling with credential management and error handling
- **Portfolio Data Model**: Strongly-typed schema using Zod for runtime validation of projects, skills, about info, and contact details

**Component Structure**
- **Page Components**: Portfolio landing page with error and loading states
- **Feature Components**: Navigation, Hero, About, Projects, Skills, Contact, Footer - each self-contained and reusable
- **Responsive Design**: Mobile-first approach with breakpoints at md (768px) and lg (1024px)

### Backend Architecture

**Server Framework**
- **Express.js**: Minimal REST API server with JSON middleware and request logging
- **Development Workflow**: Vite middleware integration for seamless HMR during development
- **Production Build**: esbuild bundles server code into ESM format for deployment

**API Design**
- **RESTful Endpoint**: Single `/api/portfolio` GET endpoint serving complete portfolio data
- **Error Handling**: Centralized error responses with appropriate HTTP status codes
- **Request Logging**: Custom middleware tracking request duration and response payloads for API routes

**Architecture Pattern**
- **Storage Abstraction**: Interface-based storage layer (IStorage) allowing future database implementations
- **In-Memory Storage**: MemStorage class currently provides mock portfolio data with structured project, skill, about, and contact information
- **Separation of Concerns**: Routes, storage, and server setup cleanly separated into distinct modules

### Data Storage Solutions

**Current Implementation**
- **In-Memory Storage**: Mock data stored in application memory for rapid development and prototyping
- **TypeScript Models**: Strongly-typed data structures matching Zod schemas ensure type safety across frontend and backend

**Database Configuration (Prepared)**
- **Drizzle ORM**: Schema-first ORM configured for PostgreSQL with migrations support
- **Neon Serverless**: PostgreSQL driver ready for serverless deployment
- **Migration System**: Drizzle Kit configured to generate migrations from schema definitions in `shared/schema.ts`
- **Environment-Based**: Database URL sourced from environment variables with validation

**Data Models**
- **Portfolio Schema**: Composite type containing about, contact, projects array, and skills array
- **Project Schema**: Includes id, title, description, thumbnail, tech stack array, URLs, and featured flag
- **Skill Schema**: Categorized by Languages, Frameworks, Tools, or Soft Skills with optional icons
- **About Schema**: Name, title, bio, location, availability, interests, and profile image
- **Contact Schema**: Email, GitHub, LinkedIn, and optional phone with URL validation

### External Dependencies

**UI & Styling**
- **Radix UI**: Comprehensive set of accessible, unstyled React primitives (accordion, dialog, dropdown, popover, tabs, toast, etc.)
- **Tailwind CSS**: Utility-first CSS framework with PostCSS and Autoprefixer for cross-browser compatibility
- **Framer Motion**: Animation library for smooth transitions and scroll-based animations
- **Embla Carousel**: Lightweight carousel component for potential image galleries
- **Lucide React**: Icon library providing consistent, customizable SVG icons

**Development Tools**
- **TypeScript**: Type safety across entire codebase with strict mode enabled
- **ESBuild**: Fast JavaScript bundler for production server builds
- **TSX**: TypeScript execution for development server
- **Drizzle Kit**: Database schema management and migration generation

**Third-Party Services (Ready for Integration)**
- **Google Fonts**: Inter and Space Grotesk/Cal Sans font families loaded via CDN
- **Neon Database**: Serverless PostgreSQL hosting (configuration present, awaiting activation)
- **Replit Plugins**: Development environment enhancements (cartographer, dev banner, runtime error overlay)

**Form & Validation**
- **React Hook Form**: Performance-optimized form state management
- **Zod**: Schema validation library with TypeScript inference for runtime type checking
- **@hookform/resolvers**: Integration between React Hook Form and Zod validation