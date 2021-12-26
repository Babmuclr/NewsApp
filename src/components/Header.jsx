import React ,  { useState } from 'react';
import titleImg from "../assets/news.png";
import { Link } from "react-router-dom";
import { Tab, Tabs } from '@mui/material';
import "./Header.css";


const Header = (props) => {
    const [tabIndex, setTabIndex] = useState(props.index);
    const handleChange = (event, newValue) => {
        setTabIndex(newValue);
    };

    const [size, setSize] = useState({ 'width': window.innerWidth, 'height': window.innerHeight });
    window.addEventListener('resize', function () {
    setSize({ 'width': window.innerWidth, 'height': window.innerHeight });
    }, true);

    return (
    <div className="header">   
        <h1><img src={titleImg} width="20%"  alt="logo" /></h1>
        {size.width > 375 * 2 ? 
            <Tabs
                value={tabIndex}
                onChange={handleChange}
                centered
            >
                <Tab label="ホーム" component={Link} to="/home" />
                <Tab label="ニュースポータル" component={Link} to="/" />
                <Tab label="FX予測の結果" component={Link} to="/fxprophet" />
                <Tab label="ブログ・研究" component={Link} to="/blog" />
            </Tabs> 
        : 
            <Tabs
                value={tabIndex}
                onChange={handleChange}
                variant="scrollable"
                scrollButtons="auto"
            >
                <Tab label="ホーム" component={Link} to="/home" />
                <Tab label="ニュースポータル" component={Link} to="/" />
                <Tab label="FX予測の結果" component={Link} to="/fxprophet" />
                <Tab label="ブログ・研究" component={Link} to="/blog" />
            </Tabs>
        }
    </div>
  );
}

export default Header;