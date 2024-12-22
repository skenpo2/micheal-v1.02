import { nanoid } from 'nanoid';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { FaMessage } from 'react-icons/fa6';

export const social = [
  {
    id: nanoid(),
    name: 'git-hub',
    link: 'https://www.github',
    icon: FaGithub,
  },
  {
    id: nanoid(),
    name: 'twitter',
    link: 'https://www.github',
    icon: FaTwitter,
  },
  {
    id: nanoid(),
    name: 'message',
    link: 'https://www.github',
    icon: FaMessage,
  },
  {
    id: nanoid(),
    name: 'message',
    link: 'https://www.github',
    icon: FaLinkedin,
  },
];

export const navLinks = [
  { id: 1, name: 'Home', url: '#home' },
  { id: 2, name: 'About', url: '#about' },
  { id: 3, name: 'Projects', url: '#project' },
  { id: 4, name: 'Contact', url: '#contact' },
];

export const aboutMe = {
  title: 'About Me',
  description: `
    I’m a results-driven developer passionate about creating impactful, inclusive digital solutions. With a strong background in mathematics and programming, I excel at merging innovative design with efficient engineering to craft user-centric applications. My goal is to contribute to projects that drive technological advancements and make a meaningful difference.

    Currently, I am advancing my skills as a full-stack developer with a keen focus on blockchain and Web3 technologies. My experience spans responsive web application development and leadership.
    
    My journey includes mentoring and teaching, where I introduced students to programming through interactive tools like Scratch. Additionally, I create content on platforms like X (formerly Twitter), sharing insights and inspiring the tech community.

    Outside of work, I enjoy watching football, reading, listening to music, and exploring new ideas online. I’m motivated to bring my technical expertise, problem-solving skills, and enthusiasm for innovation to your team, helping build solutions that align with both user needs and business goals.
  `,
};
