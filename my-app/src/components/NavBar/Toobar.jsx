import React from "react";
import SideMenu from "./sidemenu/SideMenu";
import LogIn from "./LogIn";
import "./ToolBar.css";

function ToolBar(props) {
  return (
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
          </ul>
        </div>

        <LogIn />
      </nav>
    </header>
  );
}

export default ToolBar;

