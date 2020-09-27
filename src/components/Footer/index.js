import React, { useState, useEffect } from 'react';
import LogoDigitalOcean from '../../assets/images/logo-digital-ocean.svg';
import LogoTwitter from '../../assets/images/footer-twitter.svg';
import LogoInstagram from '../../assets/images/footer-instagram.svg';
import LogoDiscord from '../../assets/images/footer-discord.svg';
import {
  Tag,
  LogoDigital,
  Details,
  Copyright,
  MenuList,
  MenuItem,
  MenuItemLink,
  LogoSocialNetworks,
} from './styles';

export default function Footer() {
  return (
    <Tag>
      <div className="do-logo">
        <MenuItemLink href="https://www.digitalocean.com">
          <LogoDigital src={LogoDigitalOcean} alt="DigitalOcean Logo" />
        </MenuItemLink>
      </div>
      <Details>
        <Copyright>© 2020 DigitalOcean, LLC. All rights reserved.</Copyright>
        <MenuList>
          <MenuItem>
            <MenuItemLink href="https://www.digitalocean.com/legal/terms-of-service-agreement/">
              Terms
            </MenuItemLink>
          </MenuItem>
          <MenuItem>
            <MenuItemLink href="https://www.digitalocean.com/legal/privacy-policy/">
              Privacy
            </MenuItemLink>
          </MenuItem>
          <MenuItem>
            <MenuItemLink href="https://do.co/hacktoberbrand">
              Brand Guidelines
            </MenuItemLink>
          </MenuItem>
          <MenuItem>
            <MenuItemLink href="https://twitter.com/hacktoberfest">
              <LogoSocialNetworks src={LogoTwitter} alt="Twitter" />
            </MenuItemLink>
            <MenuItemLink href="https://www.instagram.com/hacktoberfest/">
              <LogoSocialNetworks src={LogoInstagram} alt="Instagram" />
            </MenuItemLink>
            <MenuItemLink href="https://discord.gg/hacktoberfest">
              <LogoSocialNetworks src={LogoDiscord} alt="Discord" />
            </MenuItemLink>
          </MenuItem>
        </MenuList>
      </Details>
    </Tag>
  );
}
