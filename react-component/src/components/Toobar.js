import React from "react";
import SideMenu from "../components/sidemenu/SideMenu";
import "./ToolBar.css";

const toolbar = props => (
  <header className="toolbar">
    <nav className="toolbar_navigator">
      <div />
      <div className="toggle-btn">
        <SideMenu click={props.drawerToggleClickHandler} />
      </div>

      
      <div className="toolbar_navigation-items">
        <ul>
          <li>
            <a href="/">About us</a>
          </li>
          <li>
            <a href="/discussions">Discussion</a>
          </li>
          <li>
            <a href="/job_search">Job Search</a>
          </li>
          <li>
            <a href="/donate">Donate</a>
          </li>
          <li>
            <a href="/immigration">Immigration</a>
          </li>
          <li>
            <a href="/Login">Log In</a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
);

export default toolbar;