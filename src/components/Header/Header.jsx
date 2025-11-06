import { useState } from "react";
import { useDispatch } from "react-redux";
import Search from "../Search/Search.jsx";
import "./Header.css";


const Header = () => {
    const icon = "Reddit-Logo.webp";

  return (
    <header className="header">
      <div className="logoAndText"> 
        <img src={icon} alt="" width={40} height={40} className="logo"/>  
        <h1 className="headerText">RedditMinimal</h1>
      </div> 
      <Search/>
    </header>
  );
}

export default Header;