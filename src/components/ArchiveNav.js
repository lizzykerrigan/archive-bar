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
                src="https://uploads-ssl.webflow.com/5df20ac39bca42668d1d0fac/5df2b31406c48279515ed98f_53169366_249289682676967_8442834466077933568_n%20(1)%20(1).png"
                width="107"
                sizes="107px"
                alt=""
                className="logo-image"
              />
            </a>
            <div className="menu">
              <nav role="navigation" className="navigation-items w-nav-menu">
                <a href="/Drinks" className="navigation-item w-nav-link">
                  Drinks
                </a>
                <a href="/food" className="navigation-item w-nav-link">
                  Food
                </a>
                <a href="/contact" className="navigation-item w-nav-link">
                  Contact
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
