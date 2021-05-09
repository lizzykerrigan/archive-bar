import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';
import { theme } from '../../styles/theme';

export const LogoImage = styled.img`
  display: block;
  width: 108px;
`;

export const Nav = styled.nav`
  font-family: ${theme.fontFamily};
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: sticky;
  top: 0;
  z-index: 10;
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1280px;
`;

export const NavLogo = styled(RouterLink)`
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  font-weight: 800;
  text-decoration: none;
`;

export const NavDropdown = styled.button.attrs({
  'aria-label': 'Click to show/hide navigation menu',
})`
  display: none;

  @media screen and (max-width: 992px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;

  @media screen and (max-width: 992px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
`;

export const NavLink = styled(RouterLink)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  font-size: 1.2rem;
  text-transform: capitalize;
  text-decoration: underline 0.05em rgba(255, 255, 255, 0);
  transition: text-decoration-color 300ms;

  &:hover,
  &:focus,
  &:active {
    text-decoration-color: #fff;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 992px) {
    display: none;
  }
`;

export const NavBtnLink = styled(RouterLink)`
  border-radius: 0;
  background: transparent;
  white-space: nowrap;
  padding: 10px 20px;
  color: #fff;
  font-size: 1rem;
  outline: none;
  border: 1px solid #fff;
  cursor: pointer;
  transition: all 0.1s ease;
  text-decoration: none;

  &:hover {
    transition: all 0.1s ease;
    background: #fff;
    color: #000;
  }
`;
