import { Link } from 'react-scroll';
import React from 'react';
import styled from 'styled-components';

const MenuWrapper = styled.nav`
  position: fixed;
  top: 0;
  right: 0;

  margin-top: 1rem;
`;

const MenuUl = styled.ul`
  color: white;

  list-style-type: none;
  display: flex;

  li:not(:first-child):before {
    content: ' | ';
  }

  .menuItem {
    margin-right: 1rem;
    :hover {
      opacity: 30%;
    }
  }
`;

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
          <MenuItem key="projects" target="projects" item="Projetos" />
        </li>
        <li>
          <MenuItem key="contact" target="contact" item="Contato" />
        </li>
      </MenuUl>
    </MenuWrapper>
  );
}
