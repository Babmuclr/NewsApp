import React, { useState } from 'react';
import { Tab, Tabs, Typography, Box, Button } from '@mui/material';

import './NewsScreen.css';
import ArticleScreen from './ArticleScreen';
import Header from '../components/Header';

const returnTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

const TabPanel = (props) => {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 0 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

const NewsScreen = () => {
    const [tabIndex, setTabIndex] = useState(0);
    const handleChange = (event, newValue) => {
        setTabIndex(newValue);
    };
    return (
        <div>
            <Header index={1}/>
            <div className="screen">
                <Tabs
                    value={tabIndex}
                    onChange={handleChange}
                    variant="scrollable"
                    scrollButtons="auto"
                    className="tab"
                >
                    <Tab label="最新記事" />
                    <Tab label="決算" />
                    <Tab label="Bloomberg" />
                    <Tab label="Reuters" />
                    <Tab label="CNBC" />
                    <Tab label="TheStreet" />
                    <Tab label="FoxBusiness" />
                    <Tab label="WallStreetJournal" />
                    <Tab label="Forbes" />
                    <Tab label="BusinessInsider" />
                    <Tab label="MotleyFool" />
                </Tabs>
                <TabPanel value={tabIndex} index={0}>
                    <ArticleScreen mode={"importants"} />
                </TabPanel>
                <TabPanel value={tabIndex} index={1}>
                    <ArticleScreen mode={"earnings"} />
                </TabPanel>
                <TabPanel value={tabIndex} index={2}>
                    <ArticleScreen mode={"Bloomberg"} />
                </TabPanel>
                <TabPanel value={tabIndex} index={3}>
                    <ArticleScreen mode={"Reuters"} />
                </TabPanel>
                <TabPanel value={tabIndex} index={4}>
                    <ArticleScreen mode={"CNBC"} />
                </TabPanel>
                <TabPanel value={tabIndex} index={5}>
                    <ArticleScreen mode={"TheStreet"} />
                </TabPanel>
                <TabPanel value={tabIndex} index={6}>
                    <ArticleScreen mode={"FoxBusiness"} />
                </TabPanel>
                <TabPanel value={tabIndex} index={7}>
                    <ArticleScreen mode={"TheWallStreetJournal"} />
                </TabPanel>
                <TabPanel value={tabIndex} index={8}>
                    <ArticleScreen mode={"Forbes"} />
                </TabPanel>
                <TabPanel value={tabIndex} index={9}>
                    <ArticleScreen mode={"BusinessInsider"} />
                </TabPanel>
                <TabPanel value={tabIndex} index={10}>
                    <ArticleScreen mode={"MotleyFool"} />
                </TabPanel>
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
        </div>
);
}

export default NewsScreen;