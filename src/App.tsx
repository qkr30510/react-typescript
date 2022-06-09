import React, { useState } from 'react';
import List from './List';
import todos from './api.json'
import './app.css'
import InputBox from './InputBox';


function App() {

  const [newTodos, setNewTodos] = useState(todos)
  const [addTodo, setAddTodo] = useState('')
  const [modifyid, setModifyTodo] = useState(0)
  const [modifyType, setModifyType] = useState(false)

  const onChange = id => {
    setNewTodos(
      newTodos.map(newTodo =>
        newTodo.id === id ? { ...newTodo, checked: !newTodo.checked } : newTodo
      )
    )
  }

  const textChange = e => {
    setAddTodo(e)
    // console.log('e', e)
  }


  // "id": 0,
  // "text": "리액트 소개1",
  // "checked": true 


  const addTodoClick = () => {

    const nowIndex = newTodos.length - 1

    setNewTodos(
      newTodos.concat({
        id: nowIndex + 1,
        text: addTodo,
        checked: false
      })
    )

    setAddTodo('')
  }

  const deleteTodo = (id) => {

    setNewTodos(newTodos.filter(newTodo => newTodo.id !== id))
  }

  const modifyTodo = (id, text) => {

    setAddTodo(text)
    setModifyTodo(id)
    setModifyType(true)

  }

  const modifyClick = () => {


    setNewTodos(
      newTodos.map((newTodo) =>
        newTodo.id === modifyid ? { ...newTodo, text: addTodo } : newTodo
      )
    )
    setAddTodo('')


  }

  return (
    <>
      <List todos={newTodos} onChange={onChange} deleteTodo={deleteTodo} modifyTodo={modifyTodo}></List>
      <InputBox addTodoClick={addTodoClick} textChange={textChange} addTodo={addTodo} modifyClick={modifyClick} modifyType={modifyType}></InputBox>
    </>
  );
}

export default App;