import {
  FaCalendarAlt,
  FaFacebook,
  FaFolderOpen,
  FaHome,
  FaInstagram,
  FaLinkedin,
  FaReddit,
  FaTwitter,
} from 'react-icons/fa';
import { RiTeamFill } from 'react-icons/ri';
import { SiFiles } from 'react-icons/si';

export const navLinks = [
  { id: 1, to: '/', text: 'Home', icon: <FaHome /> },
  { id: 2, to: '/team', text: 'Team', icon: <RiTeamFill /> },
  { id: 3, to: '/projects', text: 'Projects', icon: <FaFolderOpen /> },
  { id: 4, to: '/calendar', text: 'Calendar', icon: <FaCalendarAlt /> },
  { id: 5, to: '/documents', text: 'Documents', icon: <SiFiles /> },
];

export const footerLinks = [
  { id: 1, href: 'https://facebook.com/', icon: <FaFacebook /> },
  { id: 2, href: 'https://twitter.com/', icon: <FaTwitter /> },
  { id: 3, href: 'https://instagram.com/', icon: <FaInstagram /> },
  { id: 4, href: 'https://linkedin.com/', icon: <FaLinkedin /> },
  { id: 5, href: 'https://reddit.com/', icon: <FaReddit /> },
];
