import React ,  { StyleSheet, useState } from 'react';
import titleImg from "../assets/news.png";
import { Link } from "react-router-dom";
import { Tab, Tabs } from '@mui/material';
import "./Header.css";


const Header = (props) => {
    const [tabIndex, setTabIndex] = useState(props.index);
    const handleChange = (event, newValue) => {
        setTabIndex(newValue);
    };
    console.log(tabIndex);
    return (
    <div className="header">   
        <h1><img src={titleImg} width="100" height="40" alt="logo" /></h1>
        <Tabs
            value={tabIndex}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons="auto"
        >
            <Tab label="ホーム" component={Link} to="/" />
            <Tab label="ニュースポータル" component={Link} to="/news" />
            <Tab label="FX予測の結果" component={Link} to="/fxprophet" />
        </Tabs>
    </div>
  );
}

export default Header;