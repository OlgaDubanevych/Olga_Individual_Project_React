import React from "react";
import Toolbar from "./components/NavBar/Toobar";
import "./styles.css";
import SideDrawer from "./components/NavBar/sidemenu/SideDrawer";
import BackDrop from "./components/NavBar/backdrop/BackDrop";
import NavBar from "./NavBar";
import Search from "./Search";
import QuestionForms from "./QuestionForms";
import Footer from "./Footer";
import LogIn from "./components/NavBar/LogIn";

  function App () {
    return(
     <div>
    <NavBar/>
    <LogIn/>
    <Search/>
    <QuestionForms/>
    <Footer/>
     </div>   
    )
}

export default App;