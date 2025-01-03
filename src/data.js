import { nanoid } from 'nanoid';
import ColorGeneratorImage from './images/color-appr.png';
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaJsSquare,
  FaPython,
  FaHtml5,
  FaCss3,
  FaReact,
  FaNode,
} from 'react-icons/fa';
import {
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiMongodb,
  SiPostgresql,
} from 'react-icons/si';
import { FaMessage } from 'react-icons/fa6';

export const social = [
  {
    id: 1,
    name: 'git-hub',
    link: 'https://www.github',
    icon: FaGithub,
  },
  {
    id: 2,
    name: 'twitter',
    link: 'https://www.github',
    icon: FaTwitter,
  },
  {
    id: 3,
    name: 'message',
    link: 'https://www.github',
    icon: FaMessage,
  },
  {
    id: 4,
    name: 'linkedIn',
    link: 'https://www.github',
    icon: FaLinkedin,
  },
];

export const navLinks = [
  { id: 1, name: 'About', url: '#about' },
  { id: 2, name: 'Experience', url: '#experience' },
  { id: 3, name: 'Projects', url: '#projects' },
];

export const projects = [
  {
    id: 100,
    name: 'Color generator',
    image: ColorGeneratorImage,
    description:
      'A React app that generates color variations using value.js, copies color codes to the clipboard with browser navigation, and provides user feedback via React Toastify. It uses nanoid for generating unique keys while rendering the color list',
  },
];
export const aboutMe = {
  title: 'About Me',
  description: [
    'I’m a results-driven developer passionate about creating impactful, inclusive digital solutions. With a strong background in mathematics and programming, I excel at merging innovative design with efficient engineering to craft user-centric applications. My goal is to contribute to projects that drive technological advancements and make a meaningful difference.',
    'Currently, I am advancing my skills as a full-stack developer with a keen focus on blockchain and Web3 technologies. My experience spans responsive web application development and leadership.',
    'My journey includes mentoring and teaching, where I introduced students to programming through interactive tools like Scratch. Additionally, I create content on platforms like X (formerly Twitter), sharing insights and inspiring the tech community.',
    'Outside of work, I enjoy watching football, reading, listening to music, and exploring new ideas online. I’m motivated to bring my technical expertise, problem-solving skills, and enthusiasm for innovation to your team, helping build solutions that align with both user needs and business goals.',
  ],
};

export const skills = [
  {
    category: 'Languages',
    items: [
      {
        name: 'JavaScript',
        proficiency: 'Advanced',
        description:
          'Advanced proficiency in JavaScript, building dynamic and interactive web applications.',
        icon: FaJsSquare,
      },
      {
        name: 'Python',
        proficiency: 'Intermediate',
        description:
          'Intermediate knowledge in Python, applied in data analysis and backend scripting.',
        icon: FaPython,
      },
      {
        name: 'TypeScript',
        proficiency: 'Intermediate',
        description:
          'Intermediate proficiency in TypeScript, ensuring type safety and scalability in projects.',
        icon: SiTypescript,
      },
      {
        name: 'HTML',
        proficiency: 'Advanced',
        description:
          'Advanced skills in HTML, structuring web pages with semantic and accessible markup.',
        icon: FaHtml5,
      },
      {
        name: 'CSS',
        proficiency: 'Advanced',
        description:
          'Advanced expertise in CSS, crafting responsive and visually appealing designs.',
        icon: FaCss3,
      },
    ],
  },
  {
    category: 'Frameworks',
    items: [
      {
        name: 'React',
        proficiency: 'Advanced',
        description:
          'Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.',
        icon: FaReact,
      },
      {
        name: 'Next',
        proficiency: 'Intermediate',
        description:
          'Intermediate expertise in Next.js, building server-rendered and statically generated applications.',
        icon: SiNextdotjs,
      },
      {
        name: 'Node',
        proficiency: 'Intermediate',
        description:
          'Intermediate experience with Node.js, developing scalable and performant backend systems.',
        icon: FaNode,
      },
      {
        name: 'Tailwind',
        proficiency: 'Intermediate',
        description:
          'Intermediate knowledge of Tailwind CSS, creating utility-first and maintainable designs.',
        icon: SiTailwindcss,
      },
    ],
  },
  {
    category: 'Databases',
    items: [
      {
        name: 'MongoDB',
        proficiency: 'Intermediate',
        description:
          'Intermediate skills in MongoDB, managing NoSQL databases for efficient data storage and retrieval.',
        icon: SiMongodb,
      },
      {
        name: 'PostgreSQL',
        proficiency: 'Intermediate',
        description:
          'Intermediate experience with PostgreSQL, designing and querying relational databases.',
        icon: SiPostgresql,
      },
    ],
  },
];
