import React, { useState } from "react";
import "./Components/Main.css";

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, title: "clean today", description: "do the ceaning today",status:"pending"},
    { id: 2, title: "cook", description: "cook the meal today",status:"pending"},
    { id: 3, title: "study", description: "study for the exams", status:"pending" }
  ]);
  
  <div className="todocontainer">
    <div className="header">
      <div className="welcome">welcome back</div>
      <div className="createbtn">Add</div>
    </div>
    <div className="todolist">
      {data.map((data)=>(
        return (
          <div className="todo">
            <div className="check">
              <input type="checkbox" name="" id="checkbtn"/>
              </div>
              <div className="deletebtn">
              <button onClick={() => deleteTask(data.id)}>delete</button>
            </div>
            <div className="editbtn">
              <button onClick={() => editTask(data.id)}>edit</button>
            </div> 
          </div>
      )
    ))}
    </div>
  </div>
  }
  