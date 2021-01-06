import React, { useState } from 'react'
import CloseIcon from '@material-ui/icons/Close';

function RegularTaskForm({ inputText, setInputText, todos, setTodos, closePopup }) {

    // состояние для радио-баттонов
    let [radioState, setRadioState] = useState(1);


    const inputTextHandler = (e) => {
        setInputText(e.target.value)
    }
    const submitTodoHandler = (e) => {
        e.preventDefault();
        if (inputText !== '') {
            let curDate = new Date();
            curDate.setHours(2);
            curDate.setMinutes(0);
            curDate.setSeconds(0);
            curDate.setMilliseconds(0);
            setTodos([...todos, {text: inputText, completed: false, id: Math.random() * 1000, regular: radioState, date: curDate,
            }]);
            setInputText("");
        }
        closePopup();
    }


    return (
        <div className='regularTaskForm'>
            <form className='regularTaskForm__form todo-form'>
                <div className='form-tеxt'>
                    <div className="form-title">Регулярная задача</div>
                </div>
                
                <input
                value={inputText}
                onChange={inputTextHandler}
                type="text"
                className="form-input"
                />
                
                <div className='form-tеxt'>
                    <div className="form-title">Выполнять эту задачу</div>
                </div>

                <div className='form-radio'>
                    <div className={radioState === 1 ? 'radio-btn active' : 'radio-btn'} onClick={() => setRadioState(1)}>
                        Ежедневно
                    </div>
                    <div className={radioState === 2 ? 'radio-btn active' : 'radio-btn'} onClick={() => setRadioState(2)}>
                        Каждую неделю
                    </div>
                    <div className={radioState === 3 ? 'radio-btn active' : 'radio-btn'} onClick={() => setRadioState(3)}>
                        Каждый месяц
                    </div>
                </div>

                
                <button
                onClick={submitTodoHandler}
                className="form-button"
                type="submit"
                >Добавить</button>

                




                {/* Крестик закрытия формы (absolute) */}
                <CloseIcon
                onClick={closePopup}
                className="close-button"
                >
                </CloseIcon>
            </form>
        </div>
    )
}

export default RegularTaskForm
