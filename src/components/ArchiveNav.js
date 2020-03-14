import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import NavLink from "./NavLink";

export default class ArchiveNav extends Component {
  render() {
    return (
      <>
        <div
          data-collapse="medium"
          data-animation="default"
          data-duration="200"
          className="navigation w-nav"
        >
          <div className="navigation-wrap">
            <a href="/" className="logo-link w-nav-brand w--current">
              <img
                src="https://res.cloudinary.com/dpj3m4zwi/image/upload/f_auto,q_auto/v1577184645/archive_header_logo.png"
                alt=""
                className="logo-image"
              />
            </a>
            <div className="menu">
              <nav role="navigation" className="navigation-items w-nav-menu">
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
                  <NavLink
                    element="events"
                    linkText="Events"
                    icon="calendar.svg"
                  />
                  <NavLink
                    element="contact"
                    linkText="Contact"
                    icon="chat-alt.svg"
                  />
                </Router>
              </nav>
            </div>
            <div className="menu-button w-nav-button"></div>
          </div>
          <div className="w-nav-overlay" data-wf-ignore=""></div>
        </div>
      </>
    );
  }
}
