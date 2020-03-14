import React from "react";
import { HashLink as Link } from "react-router-hash-link";

const NavLink = ({element, icon, linkText}) => {
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
