import { useEffect, useState } from 'react';
import { getCryptoNews } from "../http";

export default function CryptoNews() {
    const [newsList, setNewsList] = useState([{title: '', type: ''}]);

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const response = await getCryptoNews();
                setNewsList(response);
            } catch (error) {
                console.error("Error fetching crypto news:", error);
            }
        };

        fetchNews();
    }, []);

    return (
        <div className="news-container">
            <div className="header-row">
                <div className="header-column">Header</div>
                <div className="header-column">Type</div>
            </div>
            {newsList.map((news, index) => (
                <div key={index} className="news-row">
                    <div className="news-column">{news.title}</div>
                    <div className="news-column">{news.type}</div>
                </div>
            ))}
        </div>
    );
}