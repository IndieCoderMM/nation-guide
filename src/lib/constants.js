import { FiGithub, FiLinkedin } from 'react-icons/fi';
import { BiGlobe } from 'react-icons/bi';

export const sortingOptions = [
  { label: 'Area (asc)', value: 'area-asc' },
  { label: 'Area (desc)', value: 'area-desc' },
  { label: 'Name (asc)', value: 'name-asc' },
  { label: 'Name (desc)', value: 'name-desc' },
];

export const socialLinks = [
  {
    href: 'https://github.com/indiecodermm',
    label: 'GitHub',
    icon: <FiGithub />,
  },
  {
    href: 'https://linkedin.com/in/hthantoo',
    label: 'LinkedIn',
    icon: <FiLinkedin />,
  },
  {
    href: 'https://heinthantoo.me',
    label: 'Portfolio',
    icon: <BiGlobe />,
  },
];
