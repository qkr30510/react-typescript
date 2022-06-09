import React from "react";

function InputBox({ textChange, addTodoClick, addTodo, modifyClick, modifyType }) {
    return (
        <>
            <input type="text" value={addTodo} onChange={(e) => {
                textChange(e.target.value)
            }}></input>
            {modifyType ? <button onClick={modifyClick}>수정하기</button> : <button onClick={addTodoClick}>입력</button>}


        </>
    )
}

export default InputBox