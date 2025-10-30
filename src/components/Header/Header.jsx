import { useState } from "react";
import { useDispatch } from "react-redux";
import Search from "../Search/Search.jsx";

const Header = () => {

  return (
    <header>
      <h1>RedditMinimal</h1>
      <Search/>
    </header>
  );
}

export default Header;