import React, { useState } from 'react'

const TimePopUp = ({ todo, todos, setTodos, setTimePopUp }) => {

  let [date, setDate] = useState(''); 

  const dateHandler = (e) => {
    setDate(e.target.value);
  }

  const setDeadline = () => {
    /* закрываем окно настройки дедлайна */
    setTimePopUp();
    /* получаем время */
    /*let year = date.substr(0, 4);
    let month = date.substr(5, 2);
    let day = date.substr(8, 2);
    let hours = date.substr(11, 2);
    let minutes = date.substr(14, 2);*/

    /* получаем время дедлайна в миллисекундах */
    let millis = Date.parse(date);

    setTodos(todos.map(item =>{
      if (item.id === todo.id) {
        return {
            ...item, 
            timer: millis
        }
      }
      return item;
    }))

  } 


  const deleteDeadline = () => {
    /* закрываем окно настройки дедлайна */
    setTimePopUp();
    
    setTodos(todos.map(item =>{
      if (item.id === todo.id) {
        if (todo.timer) {
          delete todo.timer
        }
      }
      return item;
    }))
  }

  return (
    <div className="timePopUp">
      <div className="timePopUp__container">
        <label className="deadline__descr">Сделать до...</label>
        <input type="datetime-local" className="deadline__input" value={date} onChange={dateHandler} />
        <div className="deadline__btn" onClick={setDeadline} >
            Ок
        </div>
        <div className="deadline__del" onClick={deleteDeadline} >
            Сбросить
        </div>
      </div>
    </div>
  );
}

export default TimePopUp;