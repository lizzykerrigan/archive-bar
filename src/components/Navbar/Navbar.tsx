import { FaBars } from 'react-icons/fa';
import {
  LogoImage,
  Nav,
  NavbarContainer,
  NavDropdown,
  NavItem,
  NavLogo,
  NavLink,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './Navbar.styled';

type Props = {
  links: string[];
  toggle: () => void;
};

const Navbar = ({ links, toggle }: Props) => (
  <Nav>
    <NavbarContainer>
      <NavLogo to="/">
        <LogoImage
          src="https://res.cloudinary.com/dpj3m4zwi/image/upload/f_auto,q_auto/v1577184645/archive_header_logo.png"
          alt=""
        />
      </NavLogo>
      <NavDropdown onClick={toggle}>
        <FaBars />
      </NavDropdown>
      <NavMenu>
        {links.map((link, index) => (
          <NavItem key={index.toString()}>
            <NavLink to={link}>{link}</NavLink>
          </NavItem>
        ))}
      </NavMenu>
      {false && (
        <NavBtn>
          <NavBtnLink to="/">Sign In</NavBtnLink>
        </NavBtn>
      )}
    </NavbarContainer>
  </Nav>
);

export default Navbar;
