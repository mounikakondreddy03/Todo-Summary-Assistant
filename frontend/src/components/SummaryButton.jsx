import axios from "axios";
import { useState } from "react";

const SummaryButton = () => {
    const [status, setStatus] = useState('');

    const handleSummary = async () => {
        setStatus('Summarizing...');
        try {
            const res = await axios.post(`${import.meta.env.VITE_API_URL}/todos/summarize`);
            setStatus(res.data.message);
        } catch(error) {
            setStatus('Error generating summary');
        }
    };

    return (
        <div>
            <button onClick={handleSummary}> Summarize & Send to Slack </button>
            <p> {status} </p>
        </div>
    );
};

export default SummaryButton;