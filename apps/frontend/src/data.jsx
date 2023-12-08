import {
    FaHome,
    FaUser,
    FaFolderOpen,
    FaEnvelopeOpen,
    FaBriefcase,
    FaGraduationCap,
    FaCode,
} from "react-icons/fa";
import { FiFileText, FiUser, FiExternalLink } from "react-icons/fi";

import Work1 from "./assets/blocked.png";
// import Work2 from "./assets/project-2.jpg";
// import Work3 from "./assets/project-3.jpeg";
// import Work4 from "./assets/project-4.jpeg";
// import Work5 from "./assets/project-5.jpg";
// import Work6 from "./assets/project-6.jpg";

import Theme1 from "./assets/purple.png";
import Theme2 from "./assets/red.png";
import Theme3 from "./assets/blueviolet.png";
import Theme4 from "./assets/blue.png";
import Theme5 from "./assets/goldenrod.png";
import Theme6 from "./assets/magenta.png";
import Theme7 from "./assets/yellowgreen.png";
import Theme8 from "./assets/orange.png";
import Theme9 from "./assets/green.png";
import Theme10 from "./assets/yellow.png";

export const links = [
    {
        id: 1,
        name: "Home",
        icon: <FaHome className="nav__icon" />,
        path: "/",
    },

    {
        id: 2,
        name: "About",
        icon: <FaUser className="nav__icon" />,
        path: "/about",
    },

    {
        id: 3,
        name: "Portfolio",
        icon: <FaFolderOpen className="nav__icon" />,
        path: "/portfolio",
    },

    {
        id: 4,
        name: "Contact",
        icon: <FaEnvelopeOpen className="nav__icon" />,
        path: "/contact",
    },
];

export const personalInfo = [
    {
        id: 1,
        title: "First Name : ",
        description: "Micah",
    },

    {
        id: 2,
        title: "Last Name : ",
        description: "Akai-Nettey",
    },

    {
        id: 3,
        title: "Job Status : ",
        description: "Searching",
    },

    {
        id: 4,
        title: "Email : ",
        description: "micah@micahnettey.com",
    },

    {
        id: 5,
        title: "Personal YouTube : ",
        description:
            "<a href='https://www.youtube.com/@micahnettey/' target='_blank'> @micahnettey </a>",
    },
];

export const stats = [
    {
        id: 1,
        no: "1+",
        title: "Years of <br /> Experience",
    },

    {
        id: 2,
        no: "4",
        title: "Completed <br /> Projects",
    },

    {
        id: 3,
        no: "3",
        title: "SWE <br /> Internships",
    },

    {
        id: 4,
        no: "1",
        title: " Research <br /> Paper",
    },
];

export const resume = [
    {
        id: 1,
        category: "experience",
        icon: <FaBriefcase />,
        year: "June 2022 - Present",
        title: "SOFTWARE ENGINEERING INTERN <span> Raid The Room LLC </span>",
        desc: "<ul><li>Built backend tool that tracks live user information such as user-to-user communication time and exploration time metrics on the platform.</li> <li> Created a browser based environment using the Gather API to create a collaborative game that was used by 20+ users.<li></ul>",
        techstack: "React, Axios, HTML, TypeScript, Express, Gather API",
    },

    {
        id: 2,
        category: "experience",
        icon: <FaBriefcase />,
        year: "June 2023 - September 2023",
        title: "SOFTWARE ENGINEERING INTERN <span> Equimpa </span>",
        desc: "<ul><li>Build new React components for displaying dashboard information for a web-app product using ChartJS, ReactJS, Material-UI.</li><li>Executed package upgrades and fixed disruptive changes while running code maintenance for a legacy code base.</li>",
        techstack:
            "React, Axios, HTML, TypeScript, JavaScript, CSS, Material-UI, ChartJS",
    },

    {
        id: 3,
        category: "experience",
        icon: <FaBriefcase />,
        year: "July 2022 - August 2022",
        title: "RESEARCH ASSISTANT <span> MuLIP, Tufts University </span>",
        desc: "<ul><li>Created a mobile and web-based augmented reality application for rendering Reinforcement Learning backend methodologies using Unity, Vuforia Studions, Python, JavaScript, C#.</li><li>Built an external Wi-Fi connection module for Spike Prime LEGO kit using ESP8266 and MQTT</li></ul>",
        techstack:
            "Reinforcement Learning, Python, Arduino, ROS, Unity, C#, JavaScript, MQTT, ESP8266, Vuforia",
    },

    {
        id: 4,
        category: "education",
        icon: <FaGraduationCap />,
        year: "2020 - 2024",
        title: "COMPUTER SCIENCE <span> Tufts University, Medford MA </span>",
        desc: "<ul><li>Algorithms</li><li>Human Computer Interaction</li><li>Security</li><li>Database Systems</li><li>Programming Languages</li><li>Data Structures</li><li>Computation Theory</li><li>Probability and Statistics</li></ul>",
    },

    {
        id: 5,
        category: "education",
        icon: <FaGraduationCap />,
        year: "2020 - 2024",
        title: "ENTREPRENEURSHIP <span> Tufts Univeristy, Medford MA </span>",
        desc: "<ul><li>Entrepreneurial Business Planning</li><li>Entrepreneurial Business Law</li><li>Entrepreneurial Marketing</li><li>Entrepreneurial Finance</li><li>Entrepreneurial Leadership</li></ul>",
    },
];

export const skills = [
    {
        title: "JavaScript",
        icon: "FaJsSquare",
    },
    {
        title: "HTML",
        icon: "FaHtml5",
    },
    {
        title: "CSS",
        icon: "FaCss3Alt",
    },
    {
        title: "Python",
        icon: "FaPython",
    },
    {
        title: "TypeScript",
        icon: "FaJsSquare",
    },
    {
        title: "React",
        icon: "FaReact",
    },
    {
        title: "Node",
        icon: "FaNodeJs",
    },
    {
        title: "C++",
        icon: "FaCuttlefish",
    },
];

export const portfolio = [
    {
        id: 1,
        img: Work1,
        title: "Blocked.io",
        details: [
            {
                icon: <FiFileText />,
                title: "Project : ",
                desc: "Collaboration Game",
            },
            {
                icon: <FiUser />,
                title: "Company : ",
                desc: "Raid The Room LLC",
            },
            {
                icon: <FaCode />,
                title: "Language : ",
                desc: "TypeScript, HTML, Express",
            },
            {
                icon: <FiExternalLink />,
                title: "Preview : ",
                desc: "<a href='https://app.gather.town/app/NSRdC2aSPzLib8Zu/micah_cursors' target='_blank'>Game Link</a>",
            },
        ],
    },
];

export const themes = [
    {
        id: 1,
        img: Theme1,
        color: "hsl(252, 35%, 51%)",
    },

    {
        id: 2,
        img: Theme2,
        color: "hsl(4, 93%, 54%)",
    },

    {
        id: 3,
        img: Theme3,
        color: "hsl(271, 76%, 53%)",
    },

    {
        id: 4,
        img: Theme4,
        color: "hsl(225, 73%, 57%)",
    },

    {
        id: 5,
        img: Theme5,
        color: "hsl(43, 74%, 49%)",
    },

    {
        id: 6,
        img: Theme6,
        color: "hsl(339, 81%, 66%)",
    },

    {
        id: 7,
        img: Theme7,
        color: "hsl(80, 61%, 50%)",
    },

    {
        id: 8,
        img: Theme8,
        color: "hsl(19, 96%, 52%)",
    },

    {
        id: 9,
        img: Theme9,
        color: "hsl(88, 65%, 43%)",
    },

    {
        id: 10,
        img: Theme10,
        color: "hsl(42, 100%, 50%)",
    },
];
