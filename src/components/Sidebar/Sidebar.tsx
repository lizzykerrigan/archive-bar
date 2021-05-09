import {
  CloseIcon,
  Icon,
  SidebarContainer,
  SidebarLink,
  SidebarMenu,
  SidebarRoute,
  SidebarWrapper,
  SideBtnWrap,
} from './Sidebar.styled';
import React from 'react';

interface IProps {
  isOpen: boolean;
  links: string[];
  toggle: () => void;
}

const Sidebar = ({ isOpen, links, toggle }: IProps) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          {links.map((link, index) => (
            <li key={index.toString()}>
              <SidebarLink to={link}>{link}</SidebarLink>
            </li>
          ))}
        </SidebarMenu>
        {false && (
          <SideBtnWrap>
            <SidebarRoute to="/signin">Sign In</SidebarRoute>
          </SideBtnWrap>
        )}
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
