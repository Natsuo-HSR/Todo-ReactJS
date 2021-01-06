import React, { useEffect } from 'react'
import SubTodo from './SubTodo'

function SubTodoList({ subTodos, setSubTodos }) {
    
    return (
        <div className='subTodoList'>
            <ul className='subTodo__container'>
            {subTodos.length > 0 ? subTodos.map((subTodo) => (
                <SubTodo
                text={subTodo.text}
                key={subTodo.id}
                subTodo={subTodo}
                subTodos={subTodos}
                setSubTodos={setSubTodos}
                />
            )) : ''}
            </ul>
        </div>
    )
}

export default SubTodoList
