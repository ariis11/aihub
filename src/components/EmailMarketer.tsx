import { useState } from "react";

import { generateEmail } from "../http";

export default function EmailMarketer() {
    const [emailContent, setEmailContent] = useState('');
    const [aiPrompt, setAiPrompt] = useState('');

    async function handleSubmitClick() {
        try {
            const generatedEmail = await generateEmail(aiPrompt);
            setEmailContent(generatedEmail);
        } catch (error) {
            console.error('Error:', error);
        }
    }

    return (
        <div className="container">
            <div className="email-area">
                <label htmlFor="emailContent">Write your email:</label>
                <textarea
                    id="emailContent"
                    value={emailContent}
                    onChange={(e) => setEmailContent(e.target.value)}
                    placeholder="Type your email here..."
                />
            </div>
            <div className="ai-prompt-area">
                <label htmlFor="aiPrompt">Write your prompt to AI:</label>
                <div className="prompt-container">
                    <textarea
                        id="aiPrompt"
                        value={aiPrompt}
                        onChange={(e) => setAiPrompt(e.target.value)}
                        placeholder="Type your prompt here..."
                    />
                    <button className="button" onClick={handleSubmitClick}>Submit</button>
                </div>
            </div>
        </div>
    );
}