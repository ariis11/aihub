export async function authorizeAccount() {
    const response = await fetch('https://aihub-nodejs-86bbd6860391.herokuapp.com/emailMarketer/authorizeAccount', {
        method: 'GET'
    });

    if (!response.ok) {
        throw new Error('Network response was not ok');
    }

    return await response.json();
}

export async function generateEmail(message: string) {
    const response = await fetch(`https://aihub-nodejs-86bbd6860391.herokuapp.com/generateEmail?message=${message}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (!response.ok) {
        throw new Error('Network response was not ok');
    }

    const text = await response.text();

    return JSON.parse(text).content;
}

export async function sendEmail(recipient: string, subject: string, message: string) {
    const response = await fetch(`https://aihub-nodejs-86bbd6860391.herokuapp.com/sendEmail?recipient=${recipient}&subject=${subject}&message=${message}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (!response.ok) {
        throw new Error('Network response was not ok');
    }

    return true;
}

export async function getCryptoNews() {
    const response = await fetch('https://aihub-nodejs-86bbd6860391.herokuapp.com/getCryptoNews', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (!response.ok) {
        throw new Error('Network response was not ok');
    }

    const json = await response.json();

    return json;
}

export async function generateCryptoNewsAnswer(message: string, newsList: any) {
    const urls = newsList.map((item: any) => item.url).join(', ');

    const newMessage = `Question: ${message}. Context: ${urls}`;

    const response = await fetch(`https://aihub-nodejs-86bbd6860391.herokuapp.com/generateEmail?message=${newMessage}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (!response.ok) {
        throw new Error('Network response was not ok');
    }

    const text = await response.text();

    return JSON.parse(text).content;
}

export async function getCoinData(id: string, days: number) {
    const response = await fetch(`https://aihub-nodejs-86bbd6860391.herokuapp.com/getCoinHistoricData?id=${id}&days=${days}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (!response.ok) {
        throw new Error('Network response was not ok');
    }

    const json = await response.json();

    return json;
}

export async function generateTechnicalAnalysisAnswer(message: string, coinData: any) {
    const newMessage = `Question: ${message}. Data of cryptocurrency: ${JSON.stringify(coinData)}.`;

    console.log(newMessage);

    const response = await fetch(`https://aihub-nodejs-86bbd6860391.herokuapp.com/generateEmail?message=${newMessage}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (!response.ok) {
        throw new Error('Network response was not ok');
    }

    const text = await response.text();

    return JSON.parse(text).content;
}

export async function performTechnicalAnalysis(coinData: any) {
    const newMessage = `Perform short and informative technical analysis. Go straight to the point, avoid making introductions. Data of cryptocurrency: ${JSON.stringify(coinData)}.`;

    console.log(newMessage);

    const response = await fetch(`https://aihub-nodejs-86bbd6860391.herokuapp.com/generateEmail?message=${newMessage}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (!response.ok) {
        throw new Error('Network response was not ok');
    }

    const text = await response.text();

    return JSON.parse(text).content;
}