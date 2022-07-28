import React from 'react';

import { Link } from 'react-scroll';
import { MenuWrapper, MenuUl } from './styles';

function MenuItem(prop: { item: string; target: string }) {
  return (
    <Link
      activeClass="active"
      to={prop.target}
      spy={true}
      smooth={true}
      duration={1000}
      className="menuItem"
    >
      {prop.item}
    </Link>
  );
}

export default function Menu() {
  return (
    <MenuWrapper>
      <MenuUl>
        <li>
          <MenuItem key="home" target="home" item="Início" />
        </li>
        <li>
          <MenuItem key="about-me" target="about-me" item="Sobre" />
        </li>
        <li>
          <MenuItem key="skills" target="skills" item="Habilidades" />
        </li>
        <li>
          <MenuItem key="contact" target="contact" item="Contato" />
        </li>
      </MenuUl>
    </MenuWrapper>
  );
}
