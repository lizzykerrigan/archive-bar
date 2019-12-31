import React from "react";
import "./Menu.css";

const Menu = ({ heading, image }) => {
  return (
    <div className="section group">
      <div className="container-fluid">
        <div className="bg-img">
          <div className={`bg-img-${heading}`} />
        </div>
      </div>
    </div>
  );
};

export default Menu;
