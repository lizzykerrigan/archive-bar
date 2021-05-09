import styled from 'styled-components';
import { FaTimes } from 'react-icons/fa';
import { Link as RouterLink } from 'react-router-dom';

interface IProps {
  isOpen: boolean;
}

export const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: #000;
  display: grid;
  align-items: center;
  transition: 0.2s ease;
  opacity: ${({ isOpen }: IProps) => (isOpen ? '100%' : '0')};
  right: ${({ isOpen }: IProps) => (isOpen ? '0' : '-100%')};
`;

export const CloseIcon = styled(FaTimes)`
  color: #fff;
`;

export const Icon = styled.button`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

export const SidebarWrapper = styled.div`
  color: #fff;
`;

export const SidebarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 80px);
  text-align: center;
  list-style: none;

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(6, 60px);
  }
`;

export const SidebarLink = styled(RouterLink)`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  text-transform: capitalize;
  list-style: none;
  transition: 0.2s ease;
  color: #fff;
  cursor: pointer;

  &:hover,
  &:focus {
    text-decoration: underline;
    transition: 0.2s ease;
  }
`;

export const SideBtnWrap = styled.div`
  display: flex;
  justify-content: center;
`;

export const SidebarRoute = styled(RouterLink)`
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

  &:hover,
  &:focus {
    transition: all 0.1s ease;
    background: #fff;
    color: #000;
  }
`;
