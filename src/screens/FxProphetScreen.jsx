import React from 'react';

import './FxProphetScreen.css';
import Header from '../components/Header';
import Footer from '../components/Footer'
import FootButton from '../components/Button';

import ScriptTag from 'react-script-tag';

const FxProphetScreen = (props) => {
    return (
        <>
            <Header/>
            <Footer/>
            <div className='inner'>
                <div className='timeLine'>
                    <a class="twitter-timeline" data-dnt="true" href="https://twitter.com/prophetFXtrade?ref_src=twsrc%5Etfw">Tweets by prophetFXtrade</a> 
                    <ScriptTag type="text/javascript" src="https://platform.twitter.com/widgets.js" />
                </div>
                <FootButton/>
            </div>
        </>
    );
}

export default FxProphetScreen;