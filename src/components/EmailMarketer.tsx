import { useState } from "react";

export default function EmailMarketer() {
    const [emailContent, setEmailContent] = useState('');
    const [aiPrompt, setAiPrompt] = useState('');

    return (
        <div className="App">
            <header className="App-header">
                <h1>Email and AI Prompt</h1>
            </header>
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
                    <textarea
                        id="aiPrompt"
                        value={aiPrompt}
                        onChange={(e) => setAiPrompt(e.target.value)}
                        placeholder="Type your prompt here..."
                    />
                </div>
            </div>
        </div>
    );
}