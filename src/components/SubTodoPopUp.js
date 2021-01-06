import React from 'react'
import SubTaskForm from './SubTaskForm'
import SubTodoList from './SubTodoList'

function SubTodoPopUp({ todo, todos, setTodos, subTodos, setSubTodos }) {
    return (
        <div className='subPopup'>
            <div className='subPopup__container'>
                <div className='sub-title'>Добавить подзадачу</div>
                <SubTaskForm todo={todo} todos={todos} setTodos={setTodos} subTodos={subTodos} setSubTodos={setSubTodos} />
                <div className='sub-title'>Список подзадач</div>
                { subTodos.length > 0 ? <SubTodoList todo={todo} todos={todos} setTodos={setTodos} subTodos={subTodos} setSubTodos={setSubTodos} /> : <div className='sub-title-list'>*Список пуст*</div> }
            </div>
        </div>
    )
}

export default SubTodoPopUp
