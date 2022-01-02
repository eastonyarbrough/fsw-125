import {useEffect, useState} from 'react';
import {v4 as uuid} from 'uuid'
import Todo from './Todo.js';
import AddTodo from './AddTodo.js'
import './App.css';

function App() {
  const [todo, setTodo] = useState([]);

  useEffect(() => {
    fetch('/todo')
      .then(res => res.json())
      .then(res => setTodo(res))
      .catch(err => console.log(err))
  });

  const postNew = async () => {
    await fetch('/todo', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: document.querySelector("#task").value,
        desc: document.querySelector("#desc").value,
        isComplete: false,
        _id: uuid()
      })
    });
  }

  const deleteEntry = id => {
    fetch(`/todo/${id}`, {
      method: 'DELETE'
    })
  }

  const updateEntry = (id, task, desc) => {
    fetch('/todo/' + id, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: task,
        desc: desc
      })
    })
  }

  return (
    <>
      <AddTodo postNew = {postNew}/>
      <Todo 
        list = {todo}
        deleteEntry = {deleteEntry}
        updateEntry = {updateEntry}
      />
    </>
  );
}

export default App;
