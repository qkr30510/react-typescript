import React from "react";

function List({ todos, onChange, deleteTodo, modifyTodo }) {


    return (
        <ul>
            {todos.map((todo, index) => {
                return (
                    <>
                        <li key={index}>
                            {todo.id}.
                            <input type="checkbox" onChange={() => {
                                onChange(todo.id)
                            }} checked={todo.checked} />
                            {todo.text}
                            <button onClick={() => {
                                modifyTodo(todo.id, todo.text)
                            }}>수정</button>
                            <button onClick={() => {
                                deleteTodo(todo.id)
                            }}>삭제</button>
                        </li>
                    </>
                )
            })}
        </ul>
    )
}

export default List;