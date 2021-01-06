import React from 'react'
import Todo from './Todo'


const TodoList = ({ todos, filteredTodos, setTodos, disabled }) => {
    return (
      <div className="todo-container">
        <ul className="todo-list">
          {filteredTodos.length > 0 ? filteredTodos.map((todo) => (
            <Todo
              text={todo.text}
              key={todo.id}
              todo={todo}
              todos={todos}
              filteredTodos={filteredTodos}
              setTodos={setTodos}
              disabled={disabled}
            />
          )) : <div className='todo-none'>*Нет задач*</div>  }
        </ul>
      </div>
    );
}

export default TodoList
