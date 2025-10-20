import { useState } from "react";

export const ToDoList = () => {
    const [tasks, setTasks] = useState([]);
    const [input, setInput] = useState('');

    const addTask = () => {
        setTasks([...tasks, {
            id: Date.now(),
            text: input,
            complete: false
        }]);
        setInput('');
    };

    const toggleComplete = (id) => {
        setTasks(tasks.map(task =>
            task.id === id
                ? { ...task, complete: !task.complete }
                : task
        ));
    };

    const deleteTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id));
    };
    const hendlInputValue=(event)=>{
        setInput(event.target.value)
    }

    return (

        <div>
            <h1>To Do List</h1>
            <input onChange={hendlInputValue} value={input} type="text" />
            <button onClick={addTask}>Add Task</button>
            {tasks.map(task=> 

            <h3 key={task.id}>{task.text}</h3>
            )
    }

        </div>
    );
}
