import React from "react";
import "./SideDrawer.css";

const sideDrawer = props => {
  let drawerClasses = ["side-drawer"];

  if (props.show) {
    drawerClasses = ["side-drawer", "open"];
  }
  return (
    <nav className={drawerClasses.join(" ")}>
      <ul>
        <li>
          <a href="/">About Us</a>
        </li>
        <li>
          <a href="/">Discussion</a>
        </li>
        <li>
          <a href="/">Job Search</a>
        </li>
        <li>
          <a href="/">Donate</a>
        </li>
        <li>
          <a href="/">Immigration</a>
        </li>
        <li>
          <a href="/">Log In</a>
        </li>
      </ul>
    </nav>
  );
};
export default sideDrawer;