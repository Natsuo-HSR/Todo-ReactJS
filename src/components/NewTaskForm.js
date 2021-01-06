import React, { useState } from 'react'
import CloseIcon from '@material-ui/icons/Close';

function NewTaskForm({ inputText, setInputText, todos, setTodos, closePopup }) {
    const [dataCheck, setDataCheck] = useState('');
    /* назначенный день */
    const [dayInput, setDayInput] = useState('');
    /* назначенный день */
    const [monthInput, setMonthInput] = useState('');
    /* назначенный год */
    const [yearInput, setYearInput] = useState('');
    
    const inputTextHandler = (e) => {
        setInputText(e.target.value)
    }
    const submitTodoHandler = (e) => {
        e.preventDefault();
        if (inputText !== '') {
            setInputText("");
            if (dataCheck === 'active') {
                let d = new Date(yearInput, monthInput-1, dayInput, 2, 0, 0, 0);
                setTodos([...todos, {text: inputText, completed: false, id: Math.random() * 1000, date: d,
                }]);
            } else {
                setTodos([...todos, {text: inputText, completed: false, id: Math.random() * 1000
            }]);
            }
        }
        closePopup();
    }

    
    const dataCheckboxHandler = (e) => {
        if (e.target.checked) {
            setDataCheck('active')
        } else {
            setDataCheck('')
        }
    } 

    const inputDayHandler = (e) => {
        setDayInput(e.target.value)
    }
    const inputMonthHandler = (e) => {
        setMonthInput(e.target.value)
    }
    const inputYearHandler = (e) => {
        setYearInput(e.target.value)
    }

    
    return (
        <div className='newTaskForm'>
            {/* <div className='newTaskForm__container form-container'> */}
            <form className='newTask__form todo-form'>
                <div className='form-text'>
                    <div className='form-title'>Новая задача</div> 
                </div>
                <input
                value={inputText}
                onChange={inputTextHandler}
                type="text"
                className="form-input"
                />

                {/* Назначение даты */}
                <div className='form-date'>
                    <div className='form-descr'>Назначить дату</div>
                    <input className='form-check' type='checkbox' onChange={dataCheckboxHandler}></input>
                    <div className={`form-date-container ${dataCheck}`}>
                        <input
                        type="text"
                        className="form-date-input"
                        onChange={inputDayHandler}
                        />
                        <input
                        type="text"
                        className="form-date-input"
                        onChange={inputMonthHandler}
                        />
                        <input
                        type="text"
                        className="form-date-input"
                        onChange={inputYearHandler}
                        />
                    </div>
                </div>
                



                <button
                onClick={submitTodoHandler}
                className="form-button"
                type="submit"
                >
                Добавить
                </button>


                <CloseIcon
                onClick={closePopup}
                className="close-button"
                >
                </CloseIcon>
            </form>
            {/* </div> */}
        </div>
    )
}

export default NewTaskForm
