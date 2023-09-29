import React, {Fragment} from 'react';
import InputTodo from './components/inputTodo';
import './App.css';
import ListTodos from './components/ListTodos';


function App() {
  return (<Fragment>
  <div className="container">
    <InputTodo/>
    <ListTodos/>
  </div>
    
  </Fragment>);
}

export default App;
