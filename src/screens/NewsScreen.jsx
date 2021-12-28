import React, { useState } from 'react';
import { Tab, Tabs, Button } from '@mui/material';
import { Link } from "react-router-dom";

import './NewsScreen.css';
import ArticleScreen from './ArticleScreen';
import Header from '../components/Header';
import Footer from '../components/Footer';

const returnTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

const NewsScreen = (props) => {
    const [tabIndex, setTabIndex] = useState(Number(props.mode));
    const handleChange = (event, newValue) => {
        setTabIndex(newValue);
    };
    const list_article = [
        "importants",
        "earnings",
        "Bloomberg",
        "Reuters",
        "CNBC",
        "TheStreet",
        "FoxBusiness",
        "TheWallStreetJournal",
        "Forbes",
        "BusinessInsider",
        "MotleyFool",
    ];
    return (
        <div>
            <Header/>
            <div className="screen">
                <Tabs
                    value={tabIndex}
                    onChange={handleChange}
                    variant="scrollable"
                    scrollButtons="auto"
                >
                    <Tab label="最新記事" component={Link} to="/"/>
                    <Tab label="決算" component={Link} to="/news/earnings/"/>
                    <Tab label="Bloomberg" component={Link} to="/news/bloomberg/"/>
                    <Tab label="Reuters" component={Link} to="/news/reuters/"/>
                    <Tab label="CNBC" component={Link} to="/news/cnbc/"/>
                    <Tab label="TheStreet" component={Link} to="/news/thestreet/"/>
                    <Tab label="FoxBusiness" component={Link} to="/news/foxbusiness/"/>
                    <Tab label="WallStreetJournal" component={Link} to="/news/wsj/"/>
                    <Tab label="Forbes" component={Link} to="/news/forbes/"/>
                    <Tab label="BusinessInsider" component={Link} to="/news/businessinsider/"/>
                    <Tab label="MotleyFool" component={Link} to="/news/motleyfool/"/>
                </Tabs>
                <ArticleScreen mode={list_article[Number(props.mode)]} />
                <Button 
                    onClick={returnTop} 
                    variant="outlined" 
                    style={{
                        width: "100%",
                        marginTop: "40px",
                        height: "60px"
                    }}
                >
                    Topに戻る
                </Button>
            </div>
            <Footer/>
        </div>
);
}

export default NewsScreen;