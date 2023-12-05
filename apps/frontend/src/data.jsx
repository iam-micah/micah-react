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

import Work1 from "./assets/Blocked.png";
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
        id: 6,
        title: "Personal YouTube : ",
        description: "@micahnettey",
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
        no: "2",
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
        year: "June 2023 - September 2023",
        title: "PRODUCT MANAGER INTERN <span> Raid The Room LLC </span>",
        desc: "Spearheaded the creation and launch of a metaverse game that thrives on teamwork. Through tailored challenges, I created an environment where collaboration is key, pushing players to rely on each other's strengths while navigating digital realms.",
        techstack: "React, Axios, HTML, TypeScript, Express",
    },

    {
        id: 2,
        category: "experience",
        icon: <FaBriefcase />,
        year: "June 2023 - August 2023",
        title: "SOFTWARE ENGINEERING INTERN <span> Equimpa </span>",
        desc: "My role focused on meticulous upkeep of code, executing smooth package upgrades and swiftly tackling any disruptive changes in the product (Blueprint). In parallel, I used the React library to create new frontend features to effectively enhanced the functionality of Blueprint",
        techstack: "React, Axios, HTML, TypeScript, JavaScript, CSS",
    },

    {
        id: 3,
        category: "experience",
        icon: <FaBriefcase />,
        year: "July 2022 - 2022",
        title: "SOFTWARE ENGINEERING INTERN <span> Raid the Room LLC </span>",
        desc: "Built a tool that tracks live user information, which includes amount of time a user spent talking to another user on the metaverse, the total area the user walked on the metaverse, and the different number of people a specific user interacted with on the metaverse. The tool was built using TypeScript and has been used for 5 different metaverse events hosted by 4 different client companies.",
        techstack: "TypeScript, Gather API",
    },

    {
        id: 4,
        category: "experience",
        icon: <FaBriefcase />,
        year: "July 2022 - August 2022",
        title: "RESEARCH ASSISTANT <span> MuLIP, Tufts University </span>",
        desc: "Built an external Wi-Fi module for SPIKE PRIME LEGO kit using the ESP8266 and MQTT protocol, and a web-based mobile application using Unity, C# and Python <br /> Developed an Augmented Reality Interface using Unity Engine and Vuforia libraries to create easy to use apps that teach K-12 students Reinforcement Learning concepts",
        techstack: "Reinforcement Learning, Python, Arduino, ROS",
    },

    {
        id: 5,
        category: "education",
        icon: <FaGraduationCap />,
        year: "2020 - 2024",
        title: "COMPUTER SCIENCE <span> Tufts University, Medford MA </span>",
        desc: "",
    },

    {
        id: 6,
        category: "education",
        icon: <FaGraduationCap />,
        year: "2020 - 2024",
        title: "ENTREPRENEURSHIP <span> Tufts Univeristy, Medford MA </span>",
        desc: "",
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

    // {
    //     id: 2,
    //     img: Work1,
    //     title: "Dashboard",
    //     details: [
    //         {
    //             icon: <FiFileText />,
    //             title: "Project : ",
    //             desc: "Website",
    //         },
    //         {
    //             icon: <FiUser />,
    //             title: "Client : ",
    //             desc: "Dribble",
    //         },
    //         {
    //             icon: <FaCode />,
    //             title: "Language : ",
    //             desc: "React JS",
    //         },
    //         {
    //             icon: <FiExternalLink />,
    //             title: "Preview : ",
    //             desc: "www.dribble.com",
    //         },
    //     ],
    // },

    // {
    //     id: 3,
    //     img: Work1,
    //     title: "Blocked.io",
    //     details: [
    //         {
    //             icon: <FiFileText />,
    //             title: "Project : ",
    //             desc: "Video",
    //         },
    //         {
    //             icon: <FiUser />,
    //             title: "Client : ",
    //             desc: "Dribble",
    //         },
    //         {
    //             icon: <FaCode />,
    //             title: "Language : ",
    //             desc: "Adobe Premium",
    //         },
    //         {
    //             icon: <FiExternalLink />,
    //             title: "Preview : ",
    //             desc: "www.dribble.com",
    //         },
    //     ],
    // },

    // {
    //     id: 4,
    //     img: Work1,
    //     title: "Jumboverse.io",
    //     details: [
    //         {
    //             icon: <FiFileText />,
    //             title: "Project : ",
    //             desc: "Video",
    //         },
    //         {
    //             icon: <FiUser />,
    //             title: "Client : ",
    //             desc: "Dribble",
    //         },
    //         {
    //             icon: <FaCode />,
    //             title: "Language : ",
    //             desc: "Adobe Premium",
    //         },
    //         {
    //             icon: <FiExternalLink />,
    //             title: "Preview : ",
    //             desc: "www.dribble.com",
    //         },
    //     ],
    // },

    // {
    //     id: 5,
    //     img: Work1,
    //     title: "MuLip",
    //     details: [
    //         {
    //             title: "Project : ",
    //             desc: "Website",
    //         },
    //         {
    //             title: "Client : ",
    //             desc: "Dribble",
    //         },
    //         {
    //             title: "Language : ",
    //             desc: "React JS, Node JS",
    //         },
    //         {
    //             title: "Preview : ",
    //             desc: "www.dribble.com",
    //         },
    //     ],
    // },

    // {
    //     id: 6,
    //     img: Work6,
    //     title: "Photo Editing",
    //     details: [
    //         {
    //             icon: <FiFileText />,
    //             title: "Project : ",
    //             desc: "Photo",
    //         },
    //         {
    //             icon: <FiUser />,
    //             title: "Client : ",
    //             desc: "Dribble",
    //         },
    //         {
    //             icon: <FaCode />,
    //             title: "Language : ",
    //             desc: "Adobe Photoshop",
    //         },
    //         {
    //             icon: <FiExternalLink />,
    //             title: "Preview : ",
    //             desc: "www.dibble.com",
    //         },
    //     ],
    // },
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
