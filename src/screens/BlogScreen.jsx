import React from 'react';

import './BlogScreen.css';
import Header from '../components/Header';
import Iframe from 'react-iframe';

import ScriptTag from 'react-script-tag';
import Footer from '../components/Footer';
import FootButton from '../components/Button';

const BlogScreen = (props) => {
    
    return (
        <>
            <Header/>
            <Footer/>
            <div className='inner'>
                <div className='exsite'>
                    <div className='exsite_grid'>
                    <Iframe 
                        url="https://note.com/embed/notes/n5a3d966c9852"
                        height='200px'
                    />
                    <Iframe 
                        url="https://note.com/embed/notes/n72baebdb9a70"
                        height='200px'
                    />
                    <Iframe 
                        url="https://note.com/embed/notes/n38903d05f022"
                        height='200px'
                    />
                    </div>
                </div>

                <div className='exsite'>
                    <a href="http://qiita.com/Babmuclr" data-qiita-widget data-username="Babmuclr">Qiita投稿</a>
                    <ScriptTag type="text/javascript" src="https://suin.github.io/qiita-widget/widget.js" defer />
                </div>
                <FootButton/>
            </div>
        </>
    );
}

export default BlogScreen;