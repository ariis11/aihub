import { useState, useEffect } from "react";
import Chart from "./Chart";

import { generateTechnicalAnalysisAnswer, getCoinData, performTechnicalAnalysis } from "../http";
import { useNavigate } from "react-router-dom";

export default function TechnicalAnalysis() {
    const [coinData, setCoinData] = useState<{ prices: any, market_caps: any, total_volumes: any } | null>(null);
    const [prompt, setPrompt] = useState('');
    const [aiResponse, setAiResponse] = useState('');
    const [technicalAnalysis, setTechnicalAnalysis] = useState('');
    const [loadingTechnicalAnalysis, setLoadingTechnicalAnalysis] = useState(true);
    const [loadingAiResponse, setLoadingAiResponse] = useState(false);

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const response = await getCoinData('the-open-network', 10);
                setCoinData(response);
            } catch (error) {
                console.error("Error fetching crypto news:", error);
            }
        };

        fetchNews();

        if ((window as any).Telegram) {
            (window as any).Telegram.WebApp.BackButton.show();
            (window as any).Telegram.WebApp.onEvent("backButtonClicked", () => handleClick());
        }
    }, []);

    useEffect(() => {
        if (coinData) {
            performAnalysis();
        }
    }, [coinData]);

    let navigate = useNavigate();

    function handleClick() {
        navigate("/home");
    }

    function handlePromptChange(event: any) {
        setPrompt(event.target.value);
    };

    async function handlePromptSubmit() {
        setLoadingAiResponse(true);
        const response = await generateTechnicalAnalysisAnswer(prompt, coinData);
        setAiResponse(response);
        setLoadingAiResponse(false);
    };

    async function performAnalysis() {
        setLoadingTechnicalAnalysis(true);
        const response = await performTechnicalAnalysis(coinData);
        setTechnicalAnalysis(response);
        setLoadingTechnicalAnalysis(false);
    };

    return (
        <div className="technical-analysis-container">
            <h1>Technical Analysis</h1>
            {coinData?.prices && <div className="chart-container"><Chart data={coinData.prices} /></div>}
            {loadingTechnicalAnalysis ? (
                <p className="analysis-loader">Loading technical analysis...</p>
            ) : (
                technicalAnalysis && <p className="justified-text">{technicalAnalysis}</p>
            )}
            <div className="output-area">
                <div className={`textarea-container ${loadingAiResponse ? 'loading' : ''}`}>
                    <textarea
                        value={aiResponse}
                        readOnly
                        placeholder="AI response will appear here"
                    />
                    {loadingAiResponse && <div className="loader">Loading...</div>}
                </div>
            </div>
            <div className="input-area">
                <input
                    type="text"
                    value={prompt}
                    onChange={handlePromptChange}
                    placeholder="Type your prompt here"
                />
                <button onClick={handlePromptSubmit}>Submit</button>
            </div>
        </div>
    );
}