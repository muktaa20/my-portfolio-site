import {
  Code2,
  GraduationCap,
  Briefcase,
  Award,
  Rocket,
  Heart,
  Coffee,
  BookOpen,
  Zap,
  Database,
  Server,
  Cloud,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";

import PROJECT_IMG_1 from "../assets/images/PROJECT_IMG_1.png";
import PROJECT_IMG_2 from "../assets/images/PROJECT_IMG_2.png";
import PROJECT_IMG_3 from "../assets/images/PROJECT_IMG_3.png";
import PROJECT_IMG_4 from "../assets/images/PROJECT_IMG_4.png";
import PROJECT_IMG_5 from "../assets/images/PROJECT_IMG_5.png";
import PROJECT_IMG_6 from "../assets/images/PROJECT_IMG_6.png";






export const JOURNEY_STEPS = [
  {
    year: "2021",
    title: "Started Coding Journey",
    company: "Self-taught",
    description:
      "Began learning web development with HTML, CSS, and JavaScript. Built my first website and fell in love with creating interactive user experiences.",
    icon: Code2,
    color: "bg-blue-500",
  },
  {
    year: "2022",
    title: "First Internship",
    company: "TechStart Inc.",
    description:
      "Joined as a frontend intern, working with React and learning modern development practices. Contributed to multiple team projects and improved coding skills.",
    icon: Briefcase,
    color: "bg-green-500",
  },
  {
    year: "2022",
    title: "Computer Science Degree",
    company: "University of Technology",
    description:
      "Pursued a Bachelor's degree in Computer Science, focusing on software development, algorithms, and project-based learning.",
    icon: GraduationCap,
    color: "bg-purple-500",
  },
];

export const PASSIONS = [
  {
    icon: Heart,
    title: "User Experience",
    description: "Crafting intuitive interfaces that users love",
  },
  {
    icon: Coffee,
    title: "Problem Solving",
    description: "Turning complex challenges into elegant solutions",
  },
  {
    icon: BookOpen,
    title: "Continuous Learning",
    description: "Always exploring new technologies and best practices",
  },
];

export const SOCIAL_LINKS = [
  {
    name: "GitHub",
    icon: FiGithub,
    url: "https://github.com",
    color: "hover:text-gray-400",
    bgColor: "hover:bg-gray-800",
  },
  {
    name: "LinkedIn",
    icon: FiLinkedin,
    url: "https://linkedin.com",
    color: "hover:text-blue-400",
    bgColor: "hover:bg-blue-500/10",
  },
  {
    name: "Email",
    icon: Mail,
    url: "mailto:alex@example.com",
    color: "hover:text-green-400",
    bgColor: "hover:bg-green-500/10",
  },
];

export const CONTACT_INFO = [
  {
    icon: MapPin,
    label: "Location",
    value: "San Francisco, CA",
  },
  {
    icon: Mail,
    label: "Email",
    value: "alex@timetoprogram.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+1 (555) 123-4567",
  },
];






