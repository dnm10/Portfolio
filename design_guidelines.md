# Portfolio Website Design Guidelines

## Design Approach

**Reference-Based Approach**: Drawing inspiration from modern developer portfolios (Vercel team members, Linear careers page, and contemporary Awwwards-winning developer portfolios) with emphasis on bold typography, generous whitespace, and sophisticated simplicity.

**Core Principles**:
- Content-first hierarchy with strong typographic presence
- Strategic use of cards and containers for project showcases
- Professional minimalism balanced with creative personality
- Smooth, purposeful animations that enhance rather than distract

---

## Typography System

**Font Families** (via Google Fonts):
- Primary: "Inter" - All body text, navigation, UI elements (weights: 400, 500, 600, 700)
- Accent: "Space Grotesk" or "Cal Sans" - Large headings and hero text (weights: 500, 700)

**Type Scale**:
- Hero Heading: text-6xl md:text-7xl lg:text-8xl, font-bold, tracking-tight
- Section Headings: text-4xl md:text-5xl, font-bold
- Subsection Headings: text-2xl md:text-3xl, font-semibold
- Project Titles: text-xl md:text-2xl, font-semibold
- Body Text: text-base md:text-lg, font-normal, leading-relaxed
- Small Text: text-sm, font-medium

---

## Layout System

**Spacing Primitives**: Tailwind units of 4, 6, 8, 12, 16, 20, 24 (e.g., p-4, mb-8, py-20)

**Container Strategy**:
- Outer container: max-w-7xl mx-auto px-6 md:px-8
- Content sections: py-20 md:py-32 for vertical rhythm
- Hero section: min-h-screen with natural flex centering

**Grid System**:
- Projects: grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8
- Skills: grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6
- Single column content: max-w-3xl mx-auto for About/Contact

---

## Component Library

### Navigation Bar
- Fixed top navigation: sticky top-0 z-50 backdrop-blur-md
- Horizontal layout: flex justify-between items-center py-4
- Logo/Name: text-xl font-bold
- Navigation links: flex gap-8, text-sm font-medium
- Mobile: Hamburger menu (Heroicons menu icon), full-screen overlay navigation
- Smooth scroll behavior on all anchor links

### Hero Section
**Layout**: Full viewport height (min-h-screen), flex flex-col justify-center
**Content Structure**:
- Large hero heading with name/title
- Subtitle/tagline: text-xl md:text-2xl with muted styling
- Brief one-liner about expertise
- CTA buttons: Primary "View Projects" + Secondary "Contact Me"
- Scroll indicator at bottom (animated down arrow from Heroicons)

**Image**: Large professional headshot or workspace image positioned on right side (hidden on mobile, visible lg:block), occupying 40% width with rounded corners

### About Me Section
**Layout**: Two-column on desktop (lg:grid-cols-2 gap-16)
- Left: Expanded bio content (3-4 paragraphs), professional background
- Right: Quick facts card with bordered container, includes location, availability, interests
- Profile image if not in hero: Circular avatar, size w-32 h-32 md:w-48 md:h-48

### Projects Section
**Card Design**:
- Container: Bordered cards with hover lift effect (transition-transform hover:-translate-y-2)
- Project thumbnail: aspect-video ratio, rounded-t-lg, overflow-hidden
- Content padding: p-6
- Structure: Project title → Brief description → Tech stack tags → Link/buttons

**Tech Stack Tags**: Inline flex-wrap gap-2, small pill-shaped badges (px-3 py-1 rounded-full text-xs)

**Links**: Icon + text combinations (Heroicons arrow-top-right-on-square for external links, GitHub icon for repos)

**Grid**: 3 columns on desktop, 2 on tablet, 1 on mobile with consistent gap-8

### Skills Section
**Layout**: Category-based organization
- Grid of skill cards: grid-cols-2 md:grid-cols-3 lg:grid-cols-4
- Each card: Centered text, icon from Heroicons above skill name, bordered container p-6
- Categories: "Languages", "Frameworks", "Tools", "Soft Skills"
- Visual grouping with section dividers or subtle background treatment

### Contact Section
**Layout**: Centered content with max-w-2xl
- Section heading with encouraging subtext
- Primary contact methods in card format:
  - Email with icon (Heroicons envelope)
  - GitHub profile link with icon
  - LinkedIn profile link with icon
- Each contact: flex items-center gap-4, hover state with subtle background
- Optional: Simple contact form (name, email, message fields) with submit button

### Footer
**Structure**: Three-zone layout (desktop), stacked on mobile
- Left: Copyright text with current year, name
- Center: Quick navigation links (About, Projects, Skills, Contact)
- Right: Social media icons (GitHub, LinkedIn) as icon buttons
- Container: border-t with py-8 md:py-12, text-sm

---

## Animation Guidelines (Framer Motion)

**Entry Animations** (minimal, purposeful):
- Hero elements: Staggered fade-in from bottom (y: 20 → 0)
- Section headings: Fade-in on scroll
- Project cards: Staggered appearance (delay based on index)
- Navigation: Slide-in from top on mount

**Interaction Animations**:
- Card hover: Scale 1.02 and lift (translateY: -8px)
- Button hover: Slight scale (1.05)
- Link underlines: Width animation 0 → 100%

**Page Transitions**: Smooth fade between routes (200ms duration)

**Performance**: Use `will-change` sparingly, prefer transform/opacity animations

---

## Responsive Behavior

**Breakpoints**:
- Mobile: base (< 768px) - Single column, stacked navigation
- Tablet: md (768px+) - Two-column grids, horizontal navigation
- Desktop: lg (1024px+) - Full multi-column layouts, larger spacing

**Mobile Optimizations**:
- Hero: Reduced text sizes, single column, hidden images revealed in About
- Navigation: Full-screen hamburger overlay
- Projects: Single column cards with full-width images
- Skills: Two-column grid maximum
- Reduced padding/margins (py-12 vs py-20)

---

## Icons

**Library**: Heroicons (outline style) via CDN
**Common Icons**:
- Navigation: menu, x-mark (hamburger)
- External links: arrow-top-right-on-square
- Contact: envelope, phone
- Social: Custom GitHub/LinkedIn SVGs or Font Awesome icons
- Scroll indicator: chevron-down (animated)

---

## Images

**Hero Section**: Professional headshot or creative workspace photo, positioned on right side (desktop only), approximately 500x600px, rounded-lg corners

**Project Thumbnails**: Screenshot or mockup for each project, aspect-video ratio (16:9), high-quality images at 800x450px minimum

**About Section**: Optional secondary profile image if not used in hero, circular format

**Image Treatment**: All images use rounded corners (rounded-lg or rounded-xl), subtle shadow on hover for project cards

---

## Key Design Decisions

1. **Hierarchy**: Bold, oversized typography for hero and section headings creates strong visual anchors
2. **Whitespace**: Generous padding (py-20 to py-32) between sections prevents cramped feeling
3. **Cards**: Consistent bordered card pattern for projects and contact items provides cohesive structure
4. **Navigation**: Sticky header maintains context while browsing long-form portfolio
5. **Animations**: Subtle, performance-focused animations enhance without distraction
6. **Content Density**: Balanced approach - not sparse, not cluttered, each section fully developed

This design creates a professional yet personable developer portfolio that showcases work effectively while maintaining modern web standards.