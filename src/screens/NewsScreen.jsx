import React, { useState } from 'react';
import { Tab, Tabs, Typography, Box } from '@mui/material';

import './NewsScreen.css';
import ArticleScreen from './ArticleScreen';
import Header from '../components/Header';

function TabPanel(props) {
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
                <Tab label="有名銘柄" />
                <Tab label="電気自動車" />
                <Tab label="仮想通貨" />
            </Tabs>
            <TabPanel value={tabIndex} index={0}>
                <ArticleScreen mode={"importants"} />
            </TabPanel>
            <TabPanel value={tabIndex} index={1}>
                <ArticleScreen mode={"earnings"} />
            </TabPanel>
            <TabPanel value={tabIndex} index={2}>
                <ArticleScreen mode={"stocks"} />
            </TabPanel>
            <TabPanel value={tabIndex} index={3}>
                <ArticleScreen mode={"stocks"} />
            </TabPanel>
            <TabPanel value={tabIndex} index={4}>
                <ArticleScreen mode={"stocks"} />
            </TabPanel>
            </div>
        </div>
);
}

export default NewsScreen;