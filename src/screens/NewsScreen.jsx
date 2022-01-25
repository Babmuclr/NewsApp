import React, { useState } from 'react';
import { Tab, Tabs } from '@mui/material';
import { Link } from "react-router-dom";

import './NewsScreen.css';
import ArticleScreen from './ArticleScreen';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FootButton from '../components/Button';

const NewsScreen = (props) => {
    const [tabIndex, setTabIndex] = useState(Number(props.mode));
    const handleChange = (event, newValue) => {
        setTabIndex(newValue);
    };
    const list_article = [
        "importants",
        "Bloomberg",
        "Reuters",
        "CNBC",
        "TheStreet",
        "FoxBusiness",
        "CNN",
        "HuffPost"
    ];
    
    return (
        <div>
            <Header/>
            <div className="screen">
                <Tabs
                    value={tabIndex}
                    onChange={handleChange}
                    variant="scrollable"
                    scrollButtons
                    allowScrollButtonsMobile
                >
                    <Tab label="最新記事" component={Link} to="/"/>
                    <Tab label="Bloomberg" component={Link} to="/news/bloomberg/"/>
                    <Tab label="Reuters" component={Link} to="/news/reuters/"/>
                    <Tab label="CNBC" component={Link} to="/news/cnbc/"/>
                    <Tab label="TheStreet" component={Link} to="/news/thestreet/"/>
                    <Tab label="FoxBusiness" component={Link} to="/news/foxbusiness/"/>
                    <Tab label="CNN" component={Link} to="/news/cnn/"/>
                    <Tab label="Huffpost" component={Link} to="/news/huffpost/"/>
                </Tabs>
                <ArticleScreen mode={list_article[Number(props.mode)]} />
                <FootButton/>
            </div>
            <Footer/>
        </div>
);
}

export default NewsScreen;