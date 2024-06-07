export async function authorizeAccount() {
    const response = await fetch('http://localhost:8080/emailMarketer/authorizeAccount', {
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
    const response = await fetch('http://localhost:3000/getCryptoNews', {
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