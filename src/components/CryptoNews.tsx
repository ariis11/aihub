import { useEffect, useState } from 'react';
import { getCryptoNews } from "../http";

export default function CryptoNews() {
    const [newsList, setNewsList] = useState<{ title: string, type: string, url: string }[] | null>(null);

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

    function evaluateNews() {
        let bullishCount = 0;
        let bearishCount = 0;

        if (newsList) {
            newsList.forEach(news => {
                if (news.type === 'Bullish') {
                    bullishCount++;
                } else if (news.type === 'Bearish') {
                    bearishCount++;
                }
            });
        }

        if (bullishCount > bearishCount) {
            return 'Bullish';
        } else if (bearishCount > bullishCount) {
            return 'Bearish';
        } else {
            return 'Neutral';
        }
    };

    const evaluation = newsList ? evaluateNews() : null;

    return (
        <div>
            <h1 className='news-evaluation'>{evaluation}</h1>
            <div className="news-container">
                <div className="header-row">
                    <div className="header-column">Header</div>
                    <div className="header-column">Type</div>
                </div>
                {newsList && newsList.map((news, index) => (
                    <div key={index} className="news-row">
                        <div className="news-column">{news.title}</div>
                        <div className="news-column">{news.type}</div>
                    </div>
                ))}
                <button className='button'>Chat with Crypto News Expert (Coming Soon)</button>
            </div>
        </div>
    );
}