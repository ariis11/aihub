import { useState, useEffect } from "react";
import Chart from "./Chart";

import { getCoinData } from "../http";

export default function TechnicalAnalysis() {
    const [coinData, setCoinData] = useState();

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const response = await getCoinData('the-open-network', 1);
                console.log(response.prices);
                setCoinData(response.prices);
            } catch (error) {
                console.error("Error fetching crypto news:", error);
            }
        };

        fetchNews();
    }, []);

    const initialData = [
        { time: Date.parse('2024-06-07 09:06') / 1000, value: 32.51 },
        { time: Date.parse('2024-06-07 09:11') / 1000, value: 42.51 },
        { time: Date.parse('2024-06-07 09:15') / 1000, value: 40.51 },
    ];

    return (
        <div>
            <h1>Technical Analysis</h1>
            {coinData && <Chart data={coinData} />}
            {/* <Chart data={initialData} /> */}
        </div>
    );
}