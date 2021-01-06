import React from 'react'

function SubTodo({text, subTodo, subTodos, setSubTodos}) {
    /* удаление задачи */
    const deleteHandler = () => {
        setSubTodos(subTodos.filter(item => item.id !== subTodo.id))
    }
    /* выполнение задачи */
    const completeTodos = () => {
        setSubTodos(subTodos.map(item =>{
            if (item.id === subTodo.id) {
              return {
                  ...item, 
                  completed: !item.completed
              }
            }
            return item;
        }))
    }
    return (
        <div className='subTodo'>
            <li className={`todo__item ${subTodo.completed ? "completed" : ""}`}>
                {text}
            </li>
            <div className='todo-buttons'>
                {/* Выполнить */}
                <button onClick={completeTodos} className="complete-btn">
                <i className="fas fa-check"></i>
                </button>
                {/* Удалить */}
                <button onClick={deleteHandler} className="trash-btn">
                <i className="fas fa-trash"></i>
                </button>
            </div>
        </div>
    )
}

export default SubTodo
