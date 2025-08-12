export const siteConfig = {
  name: "Abd Ur Rehman",
  title: "Software Engineer",
  description: "Portfolio",
  accentColor: "#1d4ed8",
  social: {
    email: "abdurehman.dev@gmail.com",
    linkedin: "https://linkedin.com/in/a-noob-in-coding/",
    github: "https://github.com/A-noob-in-Coding",
    leetcode: "https://leetcode.com/u/A-noob-in-Coding/",
    codewars: "https://www.codewars.com/users/A-noob-in-Coding",
    fiverr: "https://www.fiverr.com/s/lj1LkkQ"
  },
  aboutMe:
    "Currently studying Software Engineering at FAST NUCES, I combine AWS certifications, competitive programming experience, and a strong computer science background to build everything from sleek, responsive interfaces to reliable backend systems using MERN Stack and Spring Boot. I also freelance on Fiverr, turning client ideas into polished, deployment-ready web apps.",
  skills: [
    "C", "C++", "JavaScript", "Kotlin", "Python", "Go",
    "HTML", "CSS", "SASS", "React", "Chakra UI",
    "Node.js", "Express.js", "Spring",
    "MongoDB", "PostgreSQL", "SQLite", "Redis",
    "Pandas", "NumPy",
    "Git", "Docker", "Vercel", "Vite", "NeoVim", "DBeaver", "Markdown"
  ],
  projects: [
    {
      name: "Lost and Found Portal",
      description:
        `A campus-focused web application that allows students and staff to report, search, and manage
lost or found items efficiently.It features secure user login, item posting with images,
      automated email notifications, and a real- time chat system for coordination between users.
Designed to improve communication and recovery of lost belongings within the FAST NUCES
community. `,
      link: "https://github.com/A-noob-in-Coding/lost-and-found",
      skills: ["React", "Node.js", "ExpressJS", "PostgreSQL", "Cloudinary", "NeonDB"],
    },
    {
      name: "Quizify",
      description:
        `An educational web platform that enables teachers to create and evaluate quizzes with
automatic grading and instant results. It includes authentication, leaderboard-based
performance tracking, and a built-in chat system for student-teacher interaction. The project
simplifies assessments and boosts engagement in academic environments`,
      link: "https://github.com/SDATEAM4/Quizify",
      skills: ["React", "Spring Boot", "PostgreSQL", "Cloudinary", "NeonDB"],
    },
    {
      name: "Github Stalker",
      description:
        `Lightweight CLI that fetches recent public events for any GitHub user and prints readable,
colorized summaries (PushEvent: branch/commit SHA/message; CreateEvent: repo details;
ReleaseEvent: tag/release notes). Fast, low-footprint, and masks emails by default (--show-
emails to reveal).`,
      link: "https://github.com/A-noob-in-Coding/ghstalker",
      skills: ["GO", "Github-API", "gjson"],
    },
    {
      name: "RediGO",
      description: `A mini-project demonstrating the working of a reverse caching proxy using Go and Redis.`,
      link: "https://github.com/A-noob-in-Coding/RediGo",
      skills: ["GO", "Redis", "DevOps"]
    },
    {
      name: "Sky-Cache",
      description: `WeatherAPI CLI is a lightning-fast command-line tool written in Go for fetching real-time weather data from the Visual Crossing API, with built-in Redis caching to skip redundant API calls. Redis runs inside a Docker container via Docker Compose, so setup is quick and hassle-free.`,
      link: "https://github.com/A-noob-in-Coding/Sky-Cache",
      skills: ["GO", "Redis", "API", "DevOps"]
    }
  ],
  experience: [
    {
      title: "Speed programming Competitions",
      bullets: [
        "Learning competitive programming through real-world contests.",
        "Participated in ACM Coding Competition, Digital Pakistan Hackathon, ITU Code Rush and UCP Taakra.", "Using these events to practice, improve, and gain experience."
      ]
    }
  ],
  education: [
    {
      school: "FAST NUCES Lahore",
      degree: "Bachelor of Science in Software Engineering",
      dateRange: "2023- 2027",
    },
  ],
  certification: [
    {
      name: "AWS Cloud Practitioner Essentials",
      by: "AWS",
      description: `Foundational certification demonstrating knowledge of AWS Cloud concepts,
services, and basic security.`
    }, {
      name: "Cisco Linux Essentials",
      by: "Cicso Networking Academy",
      description: `oundational certification in Linux system operations, command-line skills, and
open-source concepts`
    }
    ,
    {
      name: "Getting Started with DevOps on AWS",
      by: "AWS",
      description: `Explored CI/CD, infrastructure as code, and automation using AWS DevOps
tools.`
    }, {
      name: "Introduction to Containers by AWS",
      by: "AWS",
      description: `Learned basics of Docker, container orchestration`
    }, {
      name: "Cisco Linux Unhatched",
      by: "Cicso Networking Academy",
      description: `covered basic Linux commands, navigation, and file management`
    }



  ]
};
