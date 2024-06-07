import { useState } from "react";

import { generateEmail, sendEmail } from "../http";

export default function EmailMarketer() {
    const [emailContent, setEmailContent] = useState('');
    const [emailSubject, setEmailSubject] = useState('');
    const [emailRecipient, setEmailRecipient] = useState('');
    const [aiPrompt, setAiPrompt] = useState('');

    async function handleGenerateEmail() {
        try {
            const generatedEmail = await generateEmail(aiPrompt);
            setEmailContent(generatedEmail);
        } catch (error) {
            console.error('Error:', error);
        }
    }

    async function handleSendEmail() {
        try {
            const isSent = await sendEmail(emailRecipient, emailSubject, emailContent);

            if (isSent) {
                console.log('yay');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    }

    return (
        <div className="container">
            <div className="recipient-area">
                <label htmlFor="emailRecipient">Recipient:</label>
                <textarea
                    id="emailRecipient"
                    value={emailRecipient}
                    onChange={(e) => setEmailRecipient(e.target.value)}
                    placeholder="Type your recipient here..."
                />
            </div>
            <div className="subject-area">
                <label htmlFor="emailSubject">Subject:</label>
                <textarea
                    id="emailSubject"
                    value={emailSubject}
                    onChange={(e) => setEmailSubject(e.target.value)}
                    placeholder="Type your subject here..."
                />
            </div>
            <div className="email-area">
                <label htmlFor="emailContent">Message:</label>
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
                    <div>
                        <button className="button" onClick={handleGenerateEmail}>Generate</button>
                        <button className="button" onClick={handleSendEmail}>Send Email</button>
                    </div>
                </div>
            </div>
        </div>
    );
}