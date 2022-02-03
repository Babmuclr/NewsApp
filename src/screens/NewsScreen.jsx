import React, { useState } from 'react';
import { Tab, Tabs } from '@mui/material';
import { Link } from "react-router-dom";

import './NewsScreen.css';
import ArticleScreen from './ArticleScreen';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FootButton from '../components/Button';
import AddButton from '../components/AddButton';

const NewsScreen = (props) => {
    const [count, setCount] = useState(1)
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
        <div className='all'>
            <Header/>
            <div className="screen">
                <Tabs
                    value={tabIndex}
                    onChange={handleChange}
                    variant="scrollable"
                    scrollButtons
                    allowScrollButtonsMobile
                >
                    <Tab label="最新記事" component={Link} to="/" onClick={() => setCount(1)}/>
                    <Tab label="Bloomberg" component={Link} to="/news/bloomberg/" onClick={() => setCount(1)}/>
                    <Tab label="Reuters" component={Link} to="/news/reuters/" onClick={() => setCount(1)}/>
                    <Tab label="CNBC" component={Link} to="/news/cnbc/" onClick={() => setCount(1)}/>
                    <Tab label="TheStreet" component={Link} to="/news/thestreet/" onClick={() => setCount(1)}/>
                    <Tab label="FoxBusiness" component={Link} to="/news/foxbusiness/" onClick={() => setCount(1)}/>
                    <Tab label="CNN" component={Link} to="/news/cnn/" onClick={() => setCount(1)}/>
                    <Tab label="Huffpost" component={Link} to="/news/huffpost/" onClick={() => setCount(1)}/>
                </Tabs>
                <ArticleScreen mode={list_article[Number(props.mode)]} count={count}/>
                <AddButton func={() => setCount(count + 1)}/>
                <FootButton/>
            </div>
            <Footer/>
        </div>
);
}

export default NewsScreen;