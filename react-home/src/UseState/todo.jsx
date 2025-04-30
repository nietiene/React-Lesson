import React, {useState} from "react";

const Todo = () => {
    const [input, setInput] = useState("");
    const [task, setTask] = useState([]);

    const HandleSubmit = (e) => {
        e.preventDefault();
       if (input.trim() !== "") {
        setTask([input, ...task]);
        setInput("");
       } else {
        alert("Please enter some task");
       }
    }

    return (
        <div>
            <label htmlFor="">Enter Task</label>
            <input type="text" onChange={(e) => setInput(e.target.value)} value={input}/>
            <button onClick={HandleSubmit}>Add new</button><br />
            <ol>
               {task.map((task, index) => {
                   return <li key={index}>{task}</li>
                })}
              </ol>
        </div>
    )
}

export default Todo;