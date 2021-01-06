import React, { useState, useEffect } from 'react'
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

function SubTaskForm({ todo, todos, setTodos, subTodos, setSubTodos }) {
    useEffect(() => {
        setTodos(todos.map((t) => {
          if (t.id === todo.id) {
              return {
                  ...t,
                  subTodos: subTodos
              }
          }
          return t;
        }));
      }, [subTodos])

    /* input text */
    const [inputText, setInputText] = useState('');
    const inputTextHandler = (e) => {
        setInputText(e.target.value)
    }
    const submitSubTodoHandler = (e) => {
        /* Вносим подзадачу в список подзадач */
        if (inputText !== '') {
            setSubTodos([...subTodos, {text: inputText, completed: false, id: Math.random() * 1000}]);
            setInputText('');
        }
    }

    return (
        <div className='subTaskForm'>
            <form className='subTaskForm-form'>
                <div className='subTaskForm-row'>
                    <span className='subTaskForm-title'>
                        Название
                    </span>
                    <input className='subTaskForm-input' type='text' value={inputText} onChange={inputTextHandler}></input>
                    <ArrowDownwardIcon className='subTaskForm-btn' onClick={submitSubTodoHandler} />
                </div>
            </form>
        </div>
    )
}

export default SubTaskForm
