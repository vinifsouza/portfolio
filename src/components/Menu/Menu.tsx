import React from 'react';

import { Link } from 'react-scroll';
import { MenuWrapper, MenuUl } from './Menu.styles';

function MenuItem(prop: { item: string; target: string }) {
  const { target, item } = prop;

  return (
    <Link
      activeClass="active"
      to={target}
      spy
      smooth
      duration={1000}
      className="menuItem"
    >
      {item}
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
