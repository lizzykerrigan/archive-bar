import React from "react";
import "./Menu.css";

const Menu = props => {
  return (
    <div class="section group">
      <div class={"col span_1_of_2"}>
        <h1 className="menu-heading">{props.heading}</h1>
      </div>
      <div class="col span_2_of_2">
        <img
          className="column-img"
          src="https://res.cloudinary.com/dpj3m4zwi/image/upload/f_auto,q_auto/v1576941701/76935991_415094802763120_6370016677035245568_n.jpg.jpg"
        />
      </div>
    </div>
  );
};

export default Menu;
