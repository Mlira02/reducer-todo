import React, { useReducer, useState } from 'react';
import { initialState, todoReducer } from './Reducer/InitialState';
import './App.css';

function App() {
  const [newTodo, setNewTodo] = useState([])
  const [state, dispatch] = useReducer(todoReducer, initialState);
  console.log(state)

  const addTodo = e => {
    e.preventDefault()
   setNewTodo(e.target.value)
  }

  const toggleItem = itemId => {
    dispatch({ type: 'TOGGLE_TODO', payload: itemId })
  }

  const clearCompleted = e => {
    e.preventDefault()
    setNewTodo(newTodo.filter(newTodo => !newTodo.completed));
  };
  
  console.log(newTodo)
  return (
    <div className="App">
      <h1>Todo List</h1>
      <h2>Add More Todo's</h2>
      <input 
      type="text"
      name="newTodo"
      value={newTodo}
      onChange={addTodo}
      />
      <button onClick={() => dispatch({ type: 'ADD_TODO', payload: newTodo })}>Submit Todo!!</button>
      <br></br>
      {/* <p>{newTodo.map(item => (
        <h2>{item.id}</h2>
      ))}</p> */}
    </div>
  );
}

export default App;
