import React, { useState, useEffect } from "react"
import './App.css';
import AddTaskPanel from './components/AddTaskPanel'
import TodosSection from "./components/TodosSection";
import Header from './components/Header'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Statistics from './components/Statistics'


function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('all');
  // const [filteredTodos, setFilteredTodos] = useState([]);
  const [todayTodos, setTodayTodos] = useState([]);
  const [tomorrowTodos, setTomorrowTodos] = useState([]);
  const [nextWeekTodos, setNextWeekTodos] = useState([]);
  const [laterTodos, setLaterTodos] = useState([]);

  const [uncompletedTodos, setUncompletedTodos] = useState(new Array());

  const filterTodos = () => {

    setTodayTodos(todos.filter(todo => {
      if (todo.date) {
        let d2 = new Date(todo.date);
        let d1 = new Date();
        d1.setHours(2);
        d1.setMinutes(0);
        d1.setSeconds(0);
        d1.setMilliseconds(0);
        let delta = (d2 - d1) / (60 * 60 * 24 * 1000);
        return delta == 0;
      }
      return true;
    }))

    setTomorrowTodos(todos.filter(todo => {
      if (todo.date) {
        let d2 = new Date(todo.date);
        let d1 = new Date();
        d1.setHours(2);
        d1.setMinutes(0);
        d1.setSeconds(0);
        d1.setMilliseconds(0);
        let delta = (d2 - d1) / (60 * 60 * 24 * 1000);
        const ret = delta == 1;
        if (ret) {
          todo.completed = false;
        }
        return ret;
      }
    }))


    setNextWeekTodos(todos.filter(todo => {
      if (todo.date) {
        let d2 = new Date(todo.date);
        let d1 = new Date();
        d1.setHours(2);
        d1.setMinutes(0);
        d1.setSeconds(0);
        d1.setMilliseconds(0);
        let delta = (d2 - d1) / (60 * 60 * 24 * 1000);
        const ret = delta > 1 && delta <= 7;
        if (ret) {
          todo.completed = false;
        }
        return ret;
      }
    }))

    setLaterTodos(todos.filter(todo => {
      if (todo.date) {
        let d2 = new Date(todo.date);
        let d1 = new Date();
        d1.setHours(2);
        d1.setMinutes(0);
        d1.setSeconds(0);
        d1.setMilliseconds(0);
        let delta = (d2 - d1) / (60 * 60 * 24 * 1000);
        const ret = delta > 7;
        if (ret) {
          todo.completed = false;
        }
        return ret;
      }
    }))
    
  };

  const todosStatistics = () => { 
    todos.forEach(todo => {
    if (todo.date) {
      if (!todo.completed) {
        setUncompletedTodos(uncompletedTodos => [...uncompletedTodos, todo.date]);
      }
    }
    })
  };

  useEffect(() => { 
    getLocalTodos();
    /*todosStatistics()*/
  }, []);

  useEffect(() => {
    // filterHandler();
    saveLocalTodos();
    filterTodos();
    todosStatistics()
  }, [todos, filter]);

  /*const filterHandler = () => {
    switch(filter) {
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true));
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter(todo => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };*/

  const saveLocalTodos = () => {
      localStorage.setItem('todos', JSON.stringify(todos));
  };

  const getLocalTodos = () => {
    if (localStorage.getItem('todos') === null) {
      localStorage.setItem('todos', JSON.stringify([]));
    } else {
      let todosLocal = JSON.parse(localStorage.getItem('todos'));
      todosLocal.forEach(todo => {
        if (todo.date) {
          todo.date = new Date(todo.date)
        }
      });
      setTodos(todosLocal)
    }
  };

  return (
    <div className="App">
      <Router>
        <Header />

        <Switch>

          <Route path='/statistics'>
            <Statistics
            uncompletedTodos={uncompletedTodos} 
            />
          </Route>


          <Route path='/'>
            <AddTaskPanel
            inputText={inputText}
            setInputText={setInputText}
            todos={todos}
            setTodos={setTodos}
            setFilter={setFilter}
            />

            <TodosSection
              title="СЕГОДНЯ"
              todos={todos}
              filteredTodos={todayTodos}
              setTodos={setTodos}
            />
            <TodosSection
              title="ЗАВТРА"
              todos={todos}
              filteredTodos={tomorrowTodos}
              setTodos={setTodos}
              disabled={true}
            />
            <TodosSection
              title="НА НЕДЕЛЕ"
              todos={todos}
              filteredTodos={nextWeekTodos}
              setTodos={setTodos}
              disabled={true}
            />
            <TodosSection
              title="ПОЗЖЕ"
              todos={todos}
              filteredTodos={laterTodos}
              setTodos={setTodos}
              disabled={true}
            />
            </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
