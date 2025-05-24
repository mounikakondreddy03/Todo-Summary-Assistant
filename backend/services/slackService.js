const axios = require('axios');
require('dotenv').config();

const postToSlack = async (summary) => {
    const response = await axios.post(process.env.SLACK_WEBHOOK_URL, {
        text: `📝 *Todo Summary:*\n${summary}`,
    });

    return response.status === 200 ? 'Posted to Slack!' : 'Slack post failed';
};