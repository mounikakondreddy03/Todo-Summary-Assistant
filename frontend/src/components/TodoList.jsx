import axios from "axios";
import { useEffect, useState } from "react"

const TodoList = () => {
    const [todos, setTodos] = useState([]);

    const fetchTodos = async () => {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/todos`);
        setTodos(response.data);
    };

    const deleteTodo = async (id) => {
        await axios.delete(`${import.meta.env.VITE_API_URL}/todos/${id}`);
        fetchTodos();
    };

    useEffect(() => {
        fetchTodos();
    }, []);
    
    return (
        <ul>
            {todos.map(todo => (
                <li key={todo._id}>
                    {todo.task}
                    <button onClick={() => deleteTodo(todo._id)}> ❌ </button>
                </li>
            ))}
        </ul>
    );
};

export default TodoList;