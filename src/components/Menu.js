import React from "react";
import "./Menu.css";

const Menu = props => {
  return (
    <div class="section group">
      <div class="col span_1_of_2">
        <h1 className="menu-heading">{props.heading}</h1>
      </div>
      <div class="col span_2_of_2">
        <img
          className="column-img"
          src={props.image}
        />
      </div>
    </div>
  );
};

export default Menu;
