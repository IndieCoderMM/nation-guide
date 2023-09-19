import { FiGithub, FiLinkedin } from 'react-icons/fi';
import { BiGlobe } from 'react-icons/bi';

export const SORTING_OPTIONS = {
  NAME_DESC: 'name-desc',
  NAME_ASC: 'name-asc',
  AREA_ASC: 'area-asc',
  AREA_DESC: 'area-desc',
};

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
