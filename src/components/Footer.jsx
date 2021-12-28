import React from 'react';
import "./Footer.css";


const Footer = () => {
    return (
    <div className="footer">
        <ul className="navi">
            <li className='nav-list-item'> <a href="/home/">ホーム</a></li>
            <li className='nav-list-item'> <a href="/">ニュース</a></li>
            <li className='nav-list-item'> <a href="/fxprophet/">FX予測</a></li>
            <li className='nav-list-item'> <a href="/blog/">ブログ</a></li>
        </ul>
    </div>
  );
}

export default Footer;