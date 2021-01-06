import React, { useState } from 'react'
import TimePopUp from './TimePopUp';
import Timer from './Timer'
import 'react-calendar/dist/Calendar.css';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import SubTodoPopUp from './SubTodoPopUp'
import TimerIcon from '@material-ui/icons/Timer';
import DeleteIcon from '@material-ui/icons/Delete';
import ReplayIcon from '@material-ui/icons/Replay';

const Todo = ({ text, todo, todos, filteredTodos, setTodos, disabled }) => {
    /* окно добавления подзадач */
    const [subWindow, setSubWindow] = useState(false);
    /* меню установки дедлайна */
    const [timePopUp, setTimePopUp] = useState(false);
    /* получаем список подзадач, если он есть */
    const subInitState = todo.subTodos ? todo.subTodos : [];
    /* список подзадач */
    const [subTodos, setSubTodos] = useState(subInitState);
    /* общее число подзадач */
    let subTodosCount = subTodos.length;
    /* число выполненных подзадач */
    let completeSubTodos = () => {
      let counter = 0;
      subTodos.forEach(sub => {
        if (sub.completed) {
          counter++;
        }
      })
      return counter;
    }

    /* удаление задачи */
    const deleteHandler = () => {
      setTodos(todos.filter(item => item.id !== todo.id));
    }
    /* выполнение задачи */
    const completeTodos = () => {
        setTodos(todos.map(item =>{
            if (item.id === todo.id) {
              /* если регулярная задача, то перенести на другое время */
              if (item.regular) {
                let d = item.date.getDate();
                  switch(item.regular) {
                    case 1:
                      item.date.setDate(d + 1);
                      break;
                    case 2:
                      item.date.setDate(d + 7);
                      break;
                    case 3:
                      item.date.setMonth(item.date.getMonth() + 1);
                      break;
                    default:
                      break;
                  }
              }
              return {
                  ...item, 
                  completed: !item.completed
              }
            }
            return item;
        }))
    }

    /* показ/скрытие окна назначения дедлайна */
    const timePopUpHandler = (e) => {
      setTimePopUp(!timePopUp);
    }

    /* показ/скрытие окна добавления подзадач */
    const subPopUpHandler = () => {
        setSubWindow(!subWindow);
    }

    return (
      <div className={`todo ${todo.regular ? "reg" : ""}`}>
        
        <div className='todo__left'>
          {/* Выполнить */}
          <input className='todo__complete' onChange={completeTodos} type='checkbox' id={`cmp${todo.id}`} checked={todo.completed}></input>
          <label htmlFor={`cmp${todo.id}`} />

          {/* Текст */}
          <li className={`todo__item ${todo.completed ? "completed" : ""}`}>
            {text}
          </li>
          
          {/* Значек повтора, если регулярная задача */}
          {todo.regular > 0 ? <ReplayIcon className='replay__icon' /> : '' }
        </div>

           

        <div className='todo-buttons'>
          {/* Список подзадач */}
          <div className='subList-container'>
            <FormatListBulletedIcon className='sub-list' onClick={subPopUpHandler}/>
            {subTodos.length > 0 ? <div className='subList-nums'>{completeSubTodos()}/{subTodosCount}</div> : ''} 
          </div>

          {/* Удалить */}
          <DeleteIcon className='todo__delete' onClick={deleteHandler}/>

          {/* Таймер */}
          <div className='deadline-container'>
            <TimerIcon onClick={timePopUpHandler} className="time-btn" />
            { todo.timer ? <Timer millis={todo.timer} /> : ""
            }
          </div>
        </div>

        {/* Окно назначения даты дедлайна */}
        {timePopUp ? <TimePopUp todo={todo} todos={todos} setTodos={setTodos}  setTimePopUp={setTimePopUp} /> : ""}

        {/* Окно списка подзадач */}
        {subWindow ? 
          <SubTodoPopUp todo={todo} todos={todos} setTodos={setTodos} subTodos={subTodos} setSubTodos={setSubTodos} 
          />
        : ''
        }

      </div>
    );
}

export default Todo
