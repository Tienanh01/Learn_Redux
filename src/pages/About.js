import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, clear_completed, removeTodo, toggle_todo } from '../store/todo/action';

const About = () => {
    const [text, setText] = useState("");

    const todos = useSelector((state) => state.todo.todos) 
    const dispatch  = useDispatch();
    console.log(todos);
    var ID = function () {
        // Math.random should be unique because of its seeding algorithm.
        // Convert it to base 36 (numbers + letters), and grab the first 9 characters
        // after the decimal.
        return '_' + Math.random().toString(36).substr(2, 9);
      };
    const handleAddTodo = () =>{
        if(text.trim()){
            const id = ID();
            dispatch(addTodo(id, text))
            setText("");
        }
    }
    const handleRemoveTodo = (id) =>{
        dispatch(removeTodo(id));
    }
    const handleToggleTodo = (id) =>{
        dispatch(toggle_todo(id))
    }

    const handleClearCompleted = () =>{
        dispatch(clear_completed());
    }

  return (
    <div>
      <h1>Todo list app </h1>
      <input name="myInput"  value={text} width={300} onChange={(e) =>setText(e.target.value)}/>
      <button type='button' onClick={handleAddTodo}>Thêm mới</button>

        <ul>
        {todos.map((todo) => (
  <li key={todo.id} style={{ marginBottom: '10px' }}> 
    {todo.text}
    
    <button
      style={{ 
        backgroundColor: todo.completed ? 'green' : 'red', 
        color: 'white', 
        border: 'none', 
        padding: '5px 10px', 
        borderRadius: '3px',
        cursor: 'pointer',
        marginLeft: '10px' // Thêm khoảng cách giữa text và button
      }}
      onClick={ () =>{handleToggleTodo(todo.id)}}
    >
      {todo.completed ? "Completed" : "Not Completed"}
    </button>

    <button 
       style={{ 
       
        
        border: 'none', 
        padding: '5px 10px', 
        borderRadius: '3px',
        cursor: 'pointer',
        marginLeft: '10px' // Thêm khoảng cách giữa text và button
      }}

      onClick={() =>{handleRemoveTodo(todo.id)}} 
    >
        x

    </button>
  </li>
))}

            </ul>
    
    <button 
    
    onClick={handleClearCompleted}

    >Xóa hoàn tất</button>
    </div>
  );
};


export default About;
