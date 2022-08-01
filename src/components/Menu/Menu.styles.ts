import styled from 'styled-components';

export const MenuWrapper = styled.nav`
  position: fixed;
  top: 0;
  right: 0;

  margin-top: 1rem;
`;

export const MenuUl = styled.ul`
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
