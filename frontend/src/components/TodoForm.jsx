import React, { useState } from "react";
import axios from "axios";

const TodoForm = () => {
    const [task, setTask] = useState('');

    const handleSumbit = async () => {
        if (!task.trim()) return;
        await axios.post(`${import.meta.env.VITE_API_URL}/todos`, { task });
        setTask('');
        window.location.reload();
    };

    return (
        <div>
            <input value={task} onChange={e => setTask(e.target.value)} placeholder="Add a task" />
            <button onClick={handleSumbit}> Add </button>
        </div>
    );
};

export default TodoForm;