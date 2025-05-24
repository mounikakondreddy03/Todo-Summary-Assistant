const cohere = require('cohere-ai');
const dotenv = require('dotenv');
dotenv.config();

cohere.init(process.env.COHERE_API_KEY);

const generateSummary = async (todos) => {
  const text = todos.map(t => `- ${t.task}`).join('\n');
  const prompt = `Summarize the following to-do list:\n${text}`;

  try {
    const response = await cohere.generate({
      model: 'command-light',
      prompt,
      max_tokens: 100,
      temperature: 0.7,
    });

    return response.body.generations[0].text.trim();
  } catch (err) {
    console.error('Cohere error:', err);
    return 'Summary failed. Please try again.';
  }
};

module.exports = generateSummary;