import React, { useState } from 'react'
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import AutorenewIcon from '@material-ui/icons/Autorenew';
import AdjustIcon from '@material-ui/icons/Adjust';
import NewTaskForm from './NewTaskForm'
import RegularTaskForm from './RegularTaskForm'

function AddTaskPanel({ inputText, setInputText, todos, setTodos, setFilter }) {
    // окно выбора новой задачи
    let [showPopup, setShowPopup] = useState(false);
    // добавляет класс для анмации появления к popup окнам создания задачи
    let [popupTaskForm, setPopupTaskForm] = useState('popupTaskFormPanel');
    // let [showRegularTaskForm, setShowRegularTaskForm] = useState('newTaskFormPanel');

    // 100% закрытие меню выбора задач и формы
    const closePopup = () => {
        setShowPopup(false);
        setPopupTaskForm('popupTaskFormPanel');
    }

    // закрытие меню выбора задач, если оно открыто
    const togglePopup = () => {
        // закрываем панель добавления задачи, если она открыта
        setPopupTaskForm('popupTaskFormPanel');
        // 
        setShowPopup(!showPopup);
    }


    let toggleNewTaskForm = () => {
        // закрываем меню выбора задачи
        togglePopup();
        // меняем класс
        popupTaskForm === 'popupTaskFormPanel' ?
        setPopupTaskForm('popupTaskFormPanel active newTaskFormPanel') : setPopupTaskForm('popupTaskFormPanel');
    }

    let toggleRegularTaskForm = () => {
        // закрываем меню выбора задачи
        togglePopup();
        // меняем класс
        popupTaskForm === 'popupTaskFormPanel' ?
        setPopupTaskForm('popupTaskFormPanel active regularTaskFormPanel') : setPopupTaskForm('popupTaskFormPanel');
    }


    return (
        <div className='addTaskPanel'>
            <div className='addTaskPanel__container'>
                <h1 className='addTask__title'>Создать</h1>
                <button className='addTask__btn' onClick={togglePopup}>+</button>
                {showPopup ? 
                    <div className='addTaskPanel__popup'>
                        <li className='popup_menu'>
                            <ul className='popup_element' onClick={toggleNewTaskForm}> <CheckCircleOutlineIcon className='popup_icon'/>Новая задача</ul>
                            {/* <ul className='popup_element' onClick={toggleRegularTaskForm}><AdjustIcon className='popup_icon'/>Привычка</ul> */}
                            <ul className='popup_element' onClick={toggleRegularTaskForm}><AutorenewIcon className='popup_icon'/>Регулярное событие</ul>
                        </li>
                    </div>
                : ''}
            </div>
            <div className={popupTaskForm}>
                { popupTaskForm.indexOf('newTaskForm') > -1 ?  <NewTaskForm
                inputText={inputText}
                setInputText={setInputText}
                todos={todos}
                setTodos={setTodos}
                closePopup={closePopup}
                /> : ''}
                { popupTaskForm.indexOf('regularTaskForm') > -1 ?  <RegularTaskForm
                inputText={inputText}
                setInputText={setInputText}
                todos={todos}
                setTodos={setTodos}
                closePopup={closePopup}
                /> : ''}
            </div>
        </div>
        
    )
}

export default AddTaskPanel
