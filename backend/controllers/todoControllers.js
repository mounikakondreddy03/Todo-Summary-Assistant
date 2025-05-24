const Todo = require('../models/Todo');
const { generateSummary } = require('../services/llmService');
const { postToSlack } = require('../services/slackService');

const getTodos = async (req, res) => {
    const todos = await Todo.find();
    res.json(todos);
};

const addTodo = async (req, res) => {
    const todo = await Todo.create({ task: req.body.task });
    res.json(todo);
};

const deleteTodo = async (req, res) => {
    await Todo.findByIdAndDelete(req.params.id);
    res.json({ message: 'Todo deleted successfully' });
};

const summarizeTodos = async (req, res) => {
    const todos = await Todo.find();
    const summary = await generateSummary(todos);
    const result = await postToSlack(summary);
    res.json({ message: result });
};

module.exports = {getTodos, addTodo, deleteTodo, summarizeTodos};
