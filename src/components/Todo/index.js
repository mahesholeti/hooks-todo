import React,{useState} from 'react';
import './index.css';

export const Todo = ({todo,i,completeTodo,removeTodo}) => {
    console.log(todo);
    return(
        <div className="todo" style={{textDecoration: todo.isCompleted ? 'line-through' : ''}}>
            {todo.text}
            <div>
                <button onClick={() => completeTodo(i)}>Complete</button>
                <button onClick={() => removeTodo(i)}>X</button>
            </div>
        </div>
    );
}