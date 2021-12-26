import React from 'react';

import './BlogScreen.css';
import Header from '../components/Header';
import Iframe from 'react-iframe';

import ScriptTag from 'react-script-tag';

const BlogScreen = props => {
    
    return (
        <>
        <Header index={3}/>
            <div className='inner'>
                <div className='exsite'>
                    <Iframe 
                        url="https://note.com/embed/notes/n5a3d966c9852" 
                        width="100%"
                        height='200'
                        display="flex"
                        margin="5px"
                    />
                    <ScriptTag type="text/javascript" src="https://note.com/scripts/embed.js" />
                </div>

                <div className='exsite'>
                    <a href="http://qiita.com/Babmuclr" data-qiita-widget data-username="Babmuclr">Qiita投稿</a>
                    <ScriptTag type="text/javascript" src="https://suin.github.io/qiita-widget/widget.js" defer />
                </div>
            </div>
        </>
    );
}

export default BlogScreen;