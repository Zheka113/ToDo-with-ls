import React from 'react';
import './App.css';
import TodoPage from './components/todoPage/TodoPage';
import NavBar from './components/navBar/NavBar';
import { Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <div>
        <NavBar />
      </div>
      <div>
        <Route exact path='/'><TodoPage /></Route>
        <Route path='/TodoList'><TodoPage /></Route>
        <Route path='/DoneTasks'><TodoPage /></Route>
        <Route path='/Deleted'><TodoPage /></Route>
      </div>
    </div>
  );
}

export default App;
