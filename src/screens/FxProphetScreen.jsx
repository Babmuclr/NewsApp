import React from 'react';

import './FxProphetScreen.css';
import Header from '../components/Header';
// import { TwitterTimelineEmbed } from 'react-twitter-embed';

import ScriptTag from 'react-script-tag';

const FxProphetScreen = props => {
    
    return (
        <>
        <Header index={2}/>
            <div className='inner'>
                <div className='timeLine'>
                    <a class="twitter-timeline" data-dnt="true" href="https://twitter.com/prophetFXtrade?ref_src=twsrc%5Etfw">Tweets by prophetFXtrade</a> 
                    <ScriptTag type="text/javascript" src="https://platform.twitter.com/widgets.js" />
                </div> 
            </div>
        </>
    );
}

export default FxProphetScreen;