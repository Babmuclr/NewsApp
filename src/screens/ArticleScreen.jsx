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
            const museums = query(collection(db, props.mode),orderBy("pubDate","desc"),limit(12));
            const querySnapshot = await getDocs(museums);
            querySnapshot.forEach((doc) => {
                nowArticles.push({
                    id: doc.id,
                    title: doc.data().title_ja,
                    source: doc.data().source,
                    link: doc.data().link,
                    pubDate: doc.data().pubDate,
                    stock: doc.data().stock,
                })
            });
            setArticles(nowArticles);
        }
        fetchData();
      }, [props.mode]);
    // ここでhooksを使える
    if (articles.length === 0) {
        return (
            <div className="loading">
                <p>ロード中</p>
            </div>
        )
    }else {
        return (
            <div className="articles">
                <div className="grid">
                    {articles.map(
                        (article)=>(
                            <MediaCard 
                                title={article.title} 
                                source={article.source} 
                                id={article.id} 
                                link={article.link}
                                pubDate={article.pubDate}
                                stock={article.stock}
                                key={article.id}
                            />
                    ))}
                </div>
            </div>
        )
    }
    
}

export default ArticleScreen;