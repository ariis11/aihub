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

    return (
        <div>
            <h1>Technical Analysis</h1>
            {coinData && <Chart data={coinData} />}
        </div>
    );
}