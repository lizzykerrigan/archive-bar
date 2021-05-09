import { useState } from 'react';
import { HeaderContainer } from './Header.styled';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const links = ['drinks', 'food', 'contact'];

  const toggle = () => setIsOpen(!isOpen);
  return (
    <HeaderContainer>
      <Sidebar toggle={toggle} isOpen={isOpen} links={links} />
      <Navbar toggle={toggle} links={links} />
    </HeaderContainer>
  );
};

export default Header;
