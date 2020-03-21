import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

type NavLinkTypes = {
  element: string;
  icon: string;
  linkText: string;
};

const NavLink = ({ element, icon, linkText }: NavLinkTypes) => {
  return (
    <>
      <Link
        smooth
        to={`/#${element}`}
        className="navigation-item w-nav-link hidden-responsive"
      >
        {linkText}
      </Link>
      <Link
        smooth
        to={`/#${element}`}
        className="navigation-item w-nav-link visible-responsive"
      >
        <img src={icon} className="nav-icon" aria-hidden />
      </Link>
    </>
  );
};

export default NavLink;
