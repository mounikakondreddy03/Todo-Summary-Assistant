const express = require('express');
const { getTodos, addTodo, summarizeTodos, deleteTodo } = require('../controllers/todoControllers');

const router = express.Router();

router.get('/', getTodos);
router.post('/', addTodo);
router.delete('/:id', deleteTodo);
router.post('/summarize', summarizeTodos);

module.exports = router;