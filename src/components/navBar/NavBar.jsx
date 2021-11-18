import React from 'react';
import style from './navBar.module.css';
import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <div className={style.navBar}>
        <NavLink to='/TodoList' activeClassName={style.activeLink} ><button><h2>Todo List</h2></button></NavLink>
        <NavLink to='/DoneTasks' activeClassName={style.activeLink} ><button ><h2>Done Tasks</h2></button></NavLink>
        <NavLink to='/Deleted' activeClassName={style.activeLink} ><button ><h2>Deleted</h2></button></NavLink>
    </div>
  );
}

export default NavBar;
