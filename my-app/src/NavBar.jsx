import React, { useState } from "react";
import Toolbar from "./components/NavBar/Toobar";
import "./styles.css";
import SideDrawer from "./components/NavBar/sidemenu/SideDrawer";
import BackDrop from "./components/NavBar/backdrop/BackDrop";


function NavBar() {
  const [sideDrawerOpen, setSideDrawerOpen] = useState(false);

  const drawerToggleClickHandler = () => {
    setSideDrawerOpen(!sideDrawerOpen);
  };

  const backDropClickHandler = () => {
    setSideDrawerOpen(false);
  };

  let backdrop;

  if (sideDrawerOpen) {
    backdrop = <BackDrop click={backDropClickHandler} />;
  }

  return (
    <div style={{ height: "100%" }}>
      <Toolbar drawerToggleClickHandler={drawerToggleClickHandler} />
      <SideDrawer show={sideDrawerOpen} />
      {backdrop}
      <main style={{ marginTop: "64px" }}></main>
    </div>
  );
}

export default NavBar;
