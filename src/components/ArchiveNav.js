import React, { Component } from "react";

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
                <a href="#drinks-menu" className="navigation-item w-nav-link hidden-responsive">
                  Drinks
                </a>
                <a href="#drinks-menu" className="navigation-item w-nav-link visible-responsive">
                  <img src="wine.svg" aria-hidden />
                </a>
                <a href="#food-menu" className="navigation-item w-nav-link hidden-responsive">
                  Food
                </a>
                <a href="#food-menu" className="navigation-item w-nav-link visible-responsive">
                  <img src="restaurant.svg" aria-hidden />
                </a>
                <a href="#contact" className="navigation-item w-nav-link hidden-responsive">
                  Contact
                </a>
                <a href="#contact" className="navigation-item w-nav-link visible-responsive">
                  <img src="chat-alt.svg" aria-hidden />
                </a>
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
