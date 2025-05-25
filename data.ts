import { Project, Experience, Skill, Education, Certification, SocialLink } from '../types';

export const projects: Project[] = [
  {
    id: 1,
    title: "Ola Ride Performance Analysis",
    description: "Analyzed ride data and built dashboards to visualize user feedback and KPIs",
    tools: ["MySQL", "Power BI"],
    link: "https://github.com/Nithindomala/Ola-Ride-Performance-Analysis",
    image: "https://images.pexels.com/photos/7516363/pexels-photo-7516363.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 2,
    title: "Student Engagement Data Analysis",
    description: "Explored behavior trends of students using 365 Data Science engagement metrics",
    tools: ["Python", "Excel"],
    link: "https://github.com/Nithindomala/Student-Engagement-Data-Analysis",
    image: "https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 3,
    title: "Gold Price Time Series Forecasting",
    description: "Performed time series modeling to forecast price movements",
    tools: ["Python", "Pandas", "Seaborn", "Matplotlib"],
    link: "https://github.com/Nithindomala/Gold-Price-Time-Series-Forecasting",
    image: "https://images.pexels.com/photos/47047/gold-ingots-golden-treasure-47047.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 4,
    title: "Exploratory Sales Analysis",
    description: "Analyzed revenue trends and product performance across regions",
    tools: ["Python", "Tableau"],
    link: "https://github.com/Nithindomala/Exploratory-Sales-Analysis-with-Python-Tableau-Reporting",
    image: "https://images.pexels.com/photos/7947152/pexels-photo-7947152.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 5,
    title: "Sales Data Analysis with Power BI & MySQL",
    description: "This project analyzes sales data to extract key business insights, focusing on revenue trends, customer segmentation, and profitability.",
    tools: ["MySQL", "Power BI"],
    link: "https://github.com/Nithindomala/Sales-Data-Analysis-with-Power-BI-MySQL",
    image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  }
];

export const experiences: Experience[] = [
  {
    id: 1,
    title: "Project Management Associate Intern",
    company: "Excelerate",
    period: "April 2025 – Present",
    description: [
      "Evaluated AI tools like Notion AI, Asana, and Monday.com to enhance workflows",
      "Designed a project plan for Global Career Fair, reducing delegation time by 30%",
      "Authored AI Tool Testing Report based on performance and collaboration metrics"
    ]
  },
  {
    id: 2,
    title: "Data Visualization Analyst Intern",
    company: "Excelerate",
    period: "March 2025 – April 2025",
    description: [
      "Analyzed Facebook ad data for GlobalShala's event campaigns",
      "Identified underperforming campaigns and reduced inefficiencies by 18%",
      "Created dashboards using Power BI, Tableau, and Excel"
    ]
  }
];

export const skills: Skill[] = [
  { id: 1, name: "Python", category: "data", level: 4 },
  { id: 2, name: "SQL", category: "data", level: 5 },
  { id: 3, name: "Power BI", category: "data", level: 4 },
  { id: 4, name: "Tableau", category: "data", level: 4 },
  { id: 5, name: "Excel", category: "data", level: 5 },
  { id: 6, name: "Google Sheets", category: "data", level: 4 },
  { id: 7, name: "Canva", category: "other", level: 3 },
  { id: 8, name: "MoodleCloud", category: "other", level: 3 },
  { id: 9, name: "MS Word", category: "other", level: 4 },
  { id: 10, name: "Telugu", category: "language", level: 5 },
  { id: 11, name: "English", category: "language", level: 4 },
  { id: 12, name: "Hindi", category: "language", level: 3 }
];

export const education: Education[] = [
  {
    id: 1,
    institution: "Jagruthi Degree College",
    degree: "Bachelor of Commerce (B.Com), Business/Commerce",
    period: "August 2021 – July 2024"
  }
];

export const certifications: Certification[] = [
  {
    id: 1,
    title: "Complete Data Analyst Course – Beginner to Pro",
    issuer: "365 Data Science"
  },
  {
    id: 2,
    title: "Excel Skills",
    issuer: "JPMorgan Chase & Co. (Job Simulation)"
  },
  {
    id: 3,
    title: "Data Analytics & Visualization",
    issuer: "Accenture (Job Simulation)"
  },
  {
    id: 4,
    title: "Data Visualization Early Internship Certificate",
    issuer: "Excelerate"
  }
];

export const socialLinks: SocialLink[] = [
  {
    id: 1,
    name: "Email",
    url: "mailto:nithindomala7@gmail.com",
    icon: "mail"
  },
  {
    id: 2,
    name: "Phone",
    url: "tel:9390316274",
    icon: "phone"
  },
  {
    id: 3,
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/nithin-domala",
    icon: "linkedin"
  },
  {
    id: 4,
    name: "GitHub",
    url: "https://github.com/Nithindomala",
    icon: "github"
  }
];