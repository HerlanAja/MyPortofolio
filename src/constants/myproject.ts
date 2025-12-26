import silaharImage from '../assets/project/MobileSilahar.png';
import Tabungan from '../assets/project/TugasMokup.png';
import SilaharWeb from '../assets/project/SilaharMokup.png';
import Conference from '../assets/project/ConfrenceMokup.png';
import Portfolio from '../assets/project/WebPortofolio.png';
import Sentimeter from '../assets/project/sentimeter.png';
import SelesReport from '../assets/project/selesreport.png'

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
  uploadDate: string; 
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
    featured: true,
    uploadDate: "2025-09-30" 
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
    featured: true,
    uploadDate: "2025-09-25"
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
    featured: true,
    uploadDate: "2025-09-28"
  },
  {
    id: 4,
    title: "Conference Internasional - Event Management System",
    description: "A web-based system for managing international conferences with participant registration, schedules, and agenda publication, built on WordPress for flexibility.",
    image: Conference,
    category: "web",
    technologies: ["Wodpress"],
    demoUrl: "https://icemac.nusaputra.ac.id/",
    githubUrl: "#",
    featured: false,
    uploadDate: "2025-10-1"
  },
  {
  "id": 5,
  "title": "Personal Portfolio Website",
  "description": "A personalized portfolio website created to highlight professional profiles, skills, and projects with a modern and responsive design.",
  "image": Portfolio,
  "category": "web",
  "technologies": ["React", "Tailwind CSS"],
  "demoUrl": "#",
  "githubUrl": "#",
  "featured": false,
  "uploadDate": "2025-9-29"
},
{
  "id": 6,
  "title": "SENTIMETER - Website Seminar Nasional Teknik Informatika",
  "description": "Development of the official website for SENTIMETER (National Seminar on Informatics Engineering). This website will serve as the primary information hub for participants, including event details, registration, and paper submission.",
  "image": Sentimeter,
  "category": "web",
  "technologies": ["WordPress", "Elementor"],
  "demoUrl": "https://sentimeter.nusaputra.ac.id/",
  "githubUrl": "#",
  "featured": false,
  "uploadDate": "2025-11-18"
},
{
  id: 7,
  title: "Seles Report - Admin Reporting Dashboard",
  description:
    "A modern web-based admin dashboard for managing reports, monitoring statistics, and visualizing data insights with a clean and professional UI.",
  image: SelesReport,
  category: "web",
  technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "MySQL"],
  demoUrl: "https://seles-report-hhjj.vercel.app/login",
  githubUrl: "#",
  featured: true,
  uploadDate: "2025-12-26"
}
];
