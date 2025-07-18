import silaharImage from '../assets/project/silahar.png';
import Tabungan from '../assets/project/EventFundly.png';
import SilaharWeb from '../assets/project/SilaharWeb.png';

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: "web" | "mobile" | "ai";
  technologies: string[];
  demoUrl: string;
  githubUrl: string;
  featured: boolean;
}

export const projectsData: Project[] = [
  {
    id: 1,
    title: "Silahar Admin - Employee Daily Report Management",
    description: "A web-based admin dashboard for managing employee daily reports, including report verification, user roles, and activity monitoring.",
    image: SilaharWeb,
    category: "web",
    technologies: ["Next.js", "Tailwind CSS", "Node.js", "MySQL"],
    demoUrl: "https://silahar.ftp.sh",
    githubUrl: "#",
    featured: true
  },
  {
    id: 2,
    title: "EventFundly - Event & Fundraising Platform",
    description: "A web platform for managing events and fundraising campaigns, featuring real-time updates, donation tracking, and user engagement tools.",
    image: Tabungan,
    category: "web",
    technologies: ["React", "Firebase", "Tailwind CSS", "Node.js"],
    demoUrl: "#",
    githubUrl: "#",
    featured: true
  },
  {
    id: 3,
    title: "Silahar - Daily Report System",
    description: "A mobile application to record, manage, and monitor daily activity reports with photo upload, time input, and backend integration.",
    image: silaharImage,
    category: "mobile",
    technologies: ["Flutter", "Express.js", "MySQL", "REST API"],
    demoUrl: "#",
    githubUrl: "#",
    featured: true
  },
  {
    id: 4,
    title: "MyProject - AI-Powered Task Management",
    description: "An AI-driven task management system that automates task assignments and tracks progress using machine learning algorithms.",
    image: "#", // Placeholder for image
    category: "ai",
    technologies: ["Python", "TensorFlow", "Flask", "PostgreSQL"],
    demoUrl: "#",
    githubUrl: "#",
    featured: false
  }
];
