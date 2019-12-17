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
                <a href="/pouringnow" className="navigation-item w-nav-link">
                  pouring now
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
        <div className="section-2 cc-store-home-wrap">
          <div className="intro-head">
            <img
              src="https://uploads-ssl.webflow.com/5df20ac39bca42668d1d0fac/5df2a3625526fc59befe5c3c_53169366_249289682676967_8442834466077933568_n%20(1).png"
              width="480"
              srcSet="
          https://uploads-ssl.webflow.com/5df20ac39bca42668d1d0fac/5df2a3625526fc59befe5c3c_53169366_249289682676967_8442834466077933568_n%20(1)-p-500.png 500w,
          https://uploads-ssl.webflow.com/5df20ac39bca42668d1d0fac/5df2a3625526fc59befe5c3c_53169366_249289682676967_8442834466077933568_n%20(1)-p-800.png 800w,
          https://uploads-ssl.webflow.com/5df20ac39bca42668d1d0fac/5df2a3625526fc59befe5c3c_53169366_249289682676967_8442834466077933568_n%20(1).png       960w
        "
              sizes="100vw"
              data-w-id="25adf555-9902-15fe-6052-25565d02d245"
              style={{opacity: 1}}
              alt=""
              className="image-3"
            />
          </div>
        </div>
      </>
    );
  }
}
