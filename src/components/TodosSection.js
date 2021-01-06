import React from 'react'
import TodoList from './TodoList'


function TodosSection({ title, todos, filteredTodos, setTodos, disabled = false }) {
    return (
        <div className className='todosSection'>
            <h1 className='todosSection__title'>{title}</h1>
            {todos == null ? '' : 
                <TodoList
                    todos={todos}
                    filteredTodos={filteredTodos}
                    setTodos={setTodos}
                    disabled={disabled}
                />
            }
        </div>
    )
}

export default TodosSection
