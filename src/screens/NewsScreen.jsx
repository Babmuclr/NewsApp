import React, { useState, useEffect } from 'react';
import { Tab, Tabs } from '@mui/material';
import { Link } from "react-router-dom";

import './NewsScreen.css';
import ArticleScreen from './ArticleScreen';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AddButton from '../components/AddButton';
import {useWindowSize} from 'react-use';

const NewsScreen = (props) => {
    // 画面の大きさを検知する
    const { width, height } = useWindowSize();
    useEffect(() => {}, [width, height]);
    
    // ページの変更 
    const [count, setCount] = useState(1)
    const [tabIndex, setTabIndex] = useState(Number(props.mode));
    const handleChange = (event, newValue) => {
        setTabIndex(newValue);
    };
    const list_article = [
        "importants",
        "Bloomberg",
        "Reuters",
        "WashingtonPost",
        "CNBC",
        "TheStreet",
        "FoxBusiness",
        "CNN",
        "HuffPost",
        "BusinessInsider",
        "MotleyFool",
    ];
    
    return (
        <div className='all' style={{border: "2px solid black",}}>  
        {/* backgroundColor:"#DDDDDD"}}> */}
            <Header/>
            <div className="screen">
                <div style={{
                    margin: "auto",
                    borderBottom: "2px solid black",}}>
                    <Tabs
                        value={tabIndex}
                        onChange={handleChange}
                        variant={'scrollable'}
                        TabIndicatorProps={{
                            style: {
                                height:0,
                            }
                        }}
                    >
                        <Tab label="最新記事" component={Link} to="/" onClick={() => setCount(1)}/>
                        <Tab label="Bloomberg" component={Link} to="/news/bloomberg/" onClick={() => setCount(1)}/>
                        <Tab label="Reuters" component={Link} to="/news/reuters/" onClick={() => setCount(1)}/>
                        <Tab label="WashingtonPost" component={Link} to="/news/washingtonpost/" onClick={() => setCount(1)}/>
                        <Tab label="CNBC" component={Link} to="/news/cnbc/" onClick={() => setCount(1)}/>
                        <Tab label="TheStreet" component={Link} to="/news/thestreet/" onClick={() => setCount(1)}/>
                        <Tab label="FoxBusiness" component={Link} to="/news/foxbusiness/" onClick={() => setCount(1)}/>
                        <Tab label="CNN" component={Link} to="/news/cnn/" onClick={() => setCount(1)}/>
                        <Tab label="Huffpost" component={Link} to="/news/huffpost/" onClick={() => setCount(1)}/>
                        <Tab label="BusinessInsider" component={Link} to="/news/businessinsider/" onClick={() => setCount(1)}/>
                        <Tab label="MotleyFool" component={Link} to="/news/motleyfool/" onClick={() => setCount(1)}/>
                    </Tabs>
                </div>
                <ArticleScreen mode={list_article[Number(props.mode)]} count={count} width={width}/>
                <AddButton func={() => setCount(count + 1)}/>
            </div>
            <Footer/>
        </div>
);
}

export default NewsScreen;