import React,{useState} from 'react';
import {TodoForm} from './components/TodoForm';
import {Todo} from './components/Todo';

const App = () =>{
  const [todos,setTodos] = useState([]);
  const addTodo = text => {
    const newTodos = [...todos,{ text }];
    setTodos(newTodos);
  }
  const completeTodo = i => {
    const newTodos = [...todos];
    newTodos[i].isCompleted = true;
    setTodos(newTodos);
  }
  const removeTodo = i => {
    const newTodos = [...todos];
    newTodos.splice(i,1);
    setTodos(newTodos);
  }
  console.log(todos);
  return (
    <div className="container">
      <h1>ToDO</h1>
      <TodoForm addTodo={addTodo}/>
      <div>
        {todos.map((todo,i)=> (
          <Todo 
            key={i}
            todo={todo}
            i={i}
            completeTodo = {completeTodo}
            removeTodo = {removeTodo}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
