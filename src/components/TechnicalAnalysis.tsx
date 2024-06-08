import { useState, useEffect } from "react";
import Chart from "./Chart";

import { generateCryptoNewsAnswer, generateTechnicalAnalysisAnswer, getCoinData, performTechnicalAnalysis } from "../http";

export default function TechnicalAnalysis() {
    const [coinData, setCoinData] = useState<{ prices: any, market_caps: any, total_volumes: any } | null>(null);
    const [prompt, setPrompt] = useState('');
    const [aiResponse, setAiResponse] = useState('');
    const [technicalAnalysis, setTechnicalAnalysis] = useState('');

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
    }, []);

    useEffect(() => {
        if (coinData) {
            performAnalysis();
        }
    }, [coinData]);

    function handlePromptChange(event: any) {
        setPrompt(event.target.value);
    };

    async function handlePromptSubmit() {
        const response = await generateTechnicalAnalysisAnswer(prompt, coinData);
        setAiResponse(response);
    };

    async function performAnalysis() {
        const response = await performTechnicalAnalysis(coinData);
        setTechnicalAnalysis(response);
    };

    return (
        <div className="technical-analysis-container">
            <h1>Technical Analysis</h1>
            {coinData?.prices && <Chart data={coinData.prices} />}
            {technicalAnalysis && <p>{technicalAnalysis}</p>}
            <div className="output-area">
                <textarea 
                    value={aiResponse} 
                    readOnly 
                    placeholder="AI response will appear here" 
                />
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