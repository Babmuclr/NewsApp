import React from 'react';
import './HomeScreen.css';

import Header from '../components/Header';
import Footer from '../components/Footer';
import ScriptTag from 'react-script-tag';
import Iframe from 'react-iframe';

const HomeScreen = (props) => {
    return (
        <>
            <Header />
            <Footer/>
            <div className="inner">
                <div>
                    <h1>本サイトの目的</h1>
                    <div className='explanation'>
                        <div className="purpose">ウォール街と同じ記事を見る</div>
                        ×
                        <div className="purpose">私（サイト運営者）の知識を高める</div>
                    </div>
                    <h1>本サイトの説明</h1>
                    <h2>ニュースポータル</h2>
                    <div className='explanation2'>
                    アメリカでよく読まれている記事を、30分おきに更新します。
                    Bloomberg、Reuters、CNBC、TheStreet、FoxBusiness、CNN, HuffPostの合計7つのサイトの最新記事をタイトルのみ翻訳した形でお届けします。
                    記事の中身は、各サイトで読んでいただきます。中身を読む際、課金を必要とするサイトもございます。購読するかどうかは、ご自身での判断を願います。
                    </div>
                    <h2>FXの予測結果</h2>
                    <div className='explanation2'>
                    自作のFX予測器の結果と成績をまとめています。予測結果はリアルタイムで、一時間毎にTwitterで公開しています。
                        <blockquote class="twitter-tweet">
                            <p lang="ja" dir="ltr">自作AIで予測したFXの価格を投稿しています。 あくまで予測であり、投資判断は、自己判断でお願いします。損失による責任は負えません。</p>
                            &mdash; FXの預言者 (@prophetFXtrade) 
                            <a href="https://twitter.com/prophetFXtrade/status/1475123988456423427?ref_src=twsrc%5Etfw">
                                December 26, 2021
                            </a>
                        </blockquote> 
                        <ScriptTag type="text/javascript" src="https://platform.twitter.com/widgets.js" />
                    </div>
                    <h2>ブログ</h2>
                    <div className='explanation2'>
                        私見をnoteで、掲載しています。読んだ論文や技術について、Qiitaに投稿しています。
                    </div>
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
                        <ScriptTag type="text/javascript" src="https://suin.github.io/qiita-widget/widget.js" defer/>
                    </div>

                    <h1>最後に一言</h1>
                    <div className='explanation'>
                        皆様の知識を高め、興味を持つ記事に出会えることを祈っています。
                    </div>
                </div>
            </div>
        </>
    );
}

export default HomeScreen;