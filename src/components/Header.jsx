import React from 'react';
import titleImg from "../assets/news.png";
import "./Header.css";


const Header = () => {
    return (
    <div className="header">   
        <h1><img src={titleImg} width="50%"  alt="logo" /></h1>
    </div>
  );
}

export default Header;