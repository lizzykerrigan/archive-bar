import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import NavLink from '../NavLink';

const ArchiveNav = () => {
  const [scrollY, setScrollY] = useState(0);

  const scrollPos = 780;

  const handleScroll = () => {
    setScrollY(window.pageYOffset);
  };

  useEffect(() => {
    const watchScroll = () => {
      window.addEventListener('scroll', handleScroll);
    };

    watchScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  return (
    <>
      <div
        className={`fixed w-full h-16 px-4 py-10 flex items-center z-50 ${
          scrollY < scrollPos ? 'bg-transparent' : 'bg-archive-500'
        }`}
      >
        <div className="flex flex-auto relative max-w-screen-xl items-center justify-between mx-auto">
          <a href="/">
            <img
              src="https://res.cloudinary.com/dpj3m4zwi/image/upload/f_auto,q_auto/v1577184645/archive_header_logo.png"
              alt=""
              className="block w-28"
            />
          </a>
          <nav
            role="navigation"
            className="absolute left-auto top-auto right-0 bottom-0 navigation-items w-nav-menu"
          >
            <Router>
              <NavLink
                element="drinks-menu"
                linkText="Drinks"
                icon="wine.svg"
              />
              <NavLink
                element="food-menu"
                linkText="Food"
                icon="restaurant.svg"
              />
              {/* <NavLink element="events" linkText="Events" icon="calendar.svg" /> */}
              <NavLink
                element="contact"
                linkText="Contact"
                icon="chat-alt.svg"
              />
            </Router>
          </nav>
        </div>
      </div>
    </>
  );
};

export default ArchiveNav;
