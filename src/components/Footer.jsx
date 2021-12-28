import React ,  { useState } from 'react';
import { Link } from "react-router-dom";
import { Tab, Tabs } from '@mui/material';
import "./Footer.css";


const Footer = (props) => {
    const [tabIndex, setTabIndex] = useState(props.index);
    const handleChange = (event, newValue) => {
        setTabIndex(newValue);
    };

    return (
    <div className="footer">
        {<Tabs
            value={tabIndex}
            onChange={handleChange}
            centered
        >
            <Tab label="ホーム" component={Link} to="/home" />
            <Tab label="ニュース" component={Link} to="/" />
            <Tab label="FX予測" component={Link} to="/fxprophet" />
            <Tab label="ブログ" component={Link} to="/blog" />
        </Tabs>
        }
    </div>
  );
}

export default Footer;