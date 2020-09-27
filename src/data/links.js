import Twitter from '../assets/images/twitter.svg';
import Facebook from '../assets/images/facebook.svg';
import LinkedIn from '../assets/images/linkedln.svg';

import LogoTwitter from '../assets/images/footer-twitter.svg';
import LogoInstagram from '../assets/images/footer-instagram.svg';
import LogoDiscord from '../assets/images/footer-discord.svg';

export const connections = [
  {
    href: 'https://ctt.ac/60V6P',
    src: Twitter,
  },
  {
    href:
      'https://www.facebook.com/sharer/sharer.php?u=https://hacktoberfest.digitalocean.com/',
    src: Facebook,
  },
  {
    href:
      'https://www.linkedin.com/sharing/share-offsite/?url=https://hacktoberfest.digitalocean.com/',
    src: LinkedIn,
  },
];

export const legal = [
  {
    href: 'https://www.digitalocean.com/legal/terms-of-service-agreement/',
    name: 'Terms',
  },
  {
    href: 'https://www.digitalocean.com/legal/privacy-policy/',
    name: 'Privacy',
  },
  {
    href: 'https://do.co/hacktoberbrand',
    name: 'Brand Guidelines',
  },
];

export const socialConnections = [
  {
    href: 'https://twitter.com/hacktoberfest',
    src: LogoTwitter,
    alt: 'Twitter',
  },
  {
    href: 'https://www.instagram.com/hacktoberfest/"',
    src: LogoInstagram,
    alt: 'Instagram',
  },
  {
    href: 'https://discord.gg/hacktoberfest',
    src: LogoDiscord,
    alt: 'Discord',
  },
];
