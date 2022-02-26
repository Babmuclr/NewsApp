import React from 'react';

import './FxProphetScreen.css';
import Header from '../components/Header';
import Footer from '../components/Footer'
import ResultTable from '../components/ResultTable';
import NowPredict from '../components/Now.Predict';

const FxProphetScreen = (props) => {
    return (
        <>
            <Header/>
            <Footer/>
            <div className='inner'>
                <h1>現在の予測</h1>
                <NowPredict />
                <h1>予測成績</h1>
                <ResultTable />
            </div>
        </>
    );
}

export default FxProphetScreen;