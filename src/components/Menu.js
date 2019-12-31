import React from "react";
import "./Menu.css";

const Menu = ({heading, image}) => {
  return (
    <div className="section group">
      <div className="col span_1_of_2">
        <h1 className="menu-heading">{heading}</h1>
      </div>
      <div className="col span_2_of_2">
        <img
          className="column-img"
          src={image}
        />
      </div>
    </div>
  );
};

export default Menu;
