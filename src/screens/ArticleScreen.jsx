import React, { useEffect, useState } from 'react';

import { db } from '../index';
import { collection,  getDocs, query, orderBy, limit } from "firebase/firestore";
import './ArticleScreen.css';
import MediaCard from '../components/Card';

const ArticleScreen = props => {

    const [articles, setArticles] = useState([])
    
    useEffect(() => {
        async function fetchData() {
            const nowArticles = [];
            const museums = query(collection(db, props.mode),orderBy("pubDate","desc"),limit(12*props.count));
            const querySnapshot = await getDocs(museums);
            querySnapshot.forEach((doc) => {
                nowArticles.push({
                    id: doc.id,
                    title: doc.data().title_ja,
                    source: doc.data().source,
                    link: doc.data().link,
                    pubDate: doc.data().pubDate,
                    top_image: doc.data().top_image,
                })
            });
            setArticles(nowArticles);
            console.log(props.count);
        }
        fetchData();
        }, [props.mode, props.count]);
        
    
    // ここでhooksを使える
    if (articles === null) {
        return (
            <div className="loading">
                <p>ロード中</p>
            </div>
        )
    }else {
        return (
            <div className="articles">
                <div className="grid">
                    {articles.map((article)=>(
                        <div className='grid-item' key={article.id}>
                            < MediaCard 
                                title={article.title} 
                                source={article.source}
                                link={article.link}
                                pubDate={article.pubDate}
                                key={article.id}
                                top_image={article.top_image}
                            />
                        </div>
                    ))} 
                </div>
            </div>
        )
    }
}

export default ArticleScreen;