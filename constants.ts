import { Project, Experience, SocialLink } from './types';

export const PERSONAL_INFO = {
  name: "Thilina Dinelka",
  role: "Full-Stack Software Engineer",
  email: "dinelkathilina3@gmail.com",
  location: "Katuwana, Sri Lanka",
  summary: "Results-driven Software Engineer with 8 months of professional experience specializing in full-stack web development with Next.js and Nest.js. Proven track record of delivering enterprise-level applications, scalable architecture, and user experience enhancement.",
  education: {
    degree: "Bachelor of Computer Science (BCS)",
    university: "University of Ruhuna, Matara, Sri Lanka",
    period: "2021-2025"
  }
};

export const SKILLS = {
  frontend: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Shadcn", "HeroUI"],
  backend: ["Nest.js", "C#", "Entity Framework Core", "RESTful APIs"],
  database: ["PostgreSQL", "Microsoft SQL Server"],
  tools: ["GCP", "Docker", "Git", "Figma", "Postman", "Linux"]
};

export const EXPERIENCE: Experience[] = [
  {
    company: "DxDy Company",
    role: "Software Engineer Intern",
    period: "Jan 2025 - Aug 2025",
    points: [
      "Built responsive, mobile-first UI components using HeroUI & Next.js.",
      "Implemented role-based user management with JWT security.",
      "Fixed mobile layout breaks and improved accessibility using Tailwind.",
      "Developed RESTful APIs using NestJS with PostgreSQL."
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    title: "Operations Management System",
    description: "Enterprise app with role-based access control and secure JWT authentication.",
    tech: ["Next.js", "HeroUI", "NestJS", "PostgreSQL"],
    color: "bg-neo-blue",
    link: "#"
  },
  {
    title: "Student Attendance System",
    description: "Full-stack app with QR code check-in for university attendance tracking.",
    tech: ["React.js", ".NET 8", "SQL Server", "Azure/GCP"],
    color: "bg-neo-yellow",
    link: "#"
  },
  {
    title: "Corporate Website",
    description: "High-performance corporate site with custom animations and form handling.",
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    color: "bg-neo-pink",
    link: "#"
  },
  {
    title: "More on GitHub",
    description: "Check out my repositories for more code examples and experiments.",
    tech: ["GitHub", "Open Source"],
    color: "bg-neo-purple",
    link: "https://github.com/dinelkathilina"
  }
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/thilina-dinelka-778855258"
  },
  {
    name: "GitHub",
    url: "https://github.com/dinelkathilina"
  },
  {
    name: "Email",
    url: "mailto:dinelkathilina3@gmail.com"
  }
];