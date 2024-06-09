import { useEffect, useState } from 'react';
import { getCryptoNews } from "../http";
import { useNavigate } from 'react-router-dom';

export default function CryptoNews() {
    const [newsList, setNewsList] = useState<{ title: string, type: string, url: string }[] | null>(null);
    const [loadingNews, setLoadingNews] = useState(true);

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const response = await getCryptoNews();
                setNewsList(response);
            } catch (error) {
                console.error("Error fetching crypto news:", error);
            } finally {
                setLoadingNews(false);
            }
        };

        fetchNews();

        if ((window as any).Telegram) {
            (window as any).Telegram.WebApp.BackButton.show();
            (window as any).Telegram.WebApp.onEvent("backButtonClicked", () => {
                let navigate = useNavigate();
                navigate("/home");
            });
        }
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

    let headerColor;

    switch (evaluation) {
        case 'Bullish':
            headerColor = '#198754'; // Green
            break;
        case 'Bearish':
            headerColor = '#dc3545'; // Red
            break;
        default:
            headerColor = '#000'; // Black
    }

    return (
        <div className="crypto-news-container">
            <h1 className='news-evaluation' style={{ color: headerColor }}>{evaluation}</h1>
            <div className="news-container">
            {loadingNews ? (
                    <p className="analysis-loader">Loading news...</p>
                ) : (
                    <>
                        <div className="header-row">
                            <div className="header-column">Header</div>
                            <div className="type-column">Type</div>
                        </div>
                        {newsList && newsList.map((news, index) => (
                            <div key={index} className="news-row">
                                <div className="header-column">{news.title}</div>
                                <div className="type-column">{news.type}</div>
                            </div>
                        ))}
                        <button className='button'>Chat with Crypto News Expert (Coming Soon)</button>
                    </>
                )}
            </div>
        </div>
    );
}