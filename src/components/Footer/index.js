import React from 'react';
import LogoDigitalOcean from '../../assets/images/logo-digital-ocean.svg';
import { legal, socialConnections } from '../../data/links';

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
          {legal.map(({ href, name }, index) => (
            <MenuItem key={index}>
              <MenuItemLink href={href}>{name}</MenuItemLink>
            </MenuItem>
          ))}
          <MenuItem>
            {socialConnections.map(({ href, src, alt }, index) => (
              <MenuItemLink key={index} href={href}>
                <LogoSocialNetworks src={src} alt={alt} />
              </MenuItemLink>
            ))}
          </MenuItem>
        </MenuList>
      </Details>
    </Tag>
  );
}