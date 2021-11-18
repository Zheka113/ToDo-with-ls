import React from 'react';
import CloneTasks from '../cloneTasks/CloneTasks';
import style from './todoPage.module.css';

function TodoPage() {
    return (
        <div className={style.todoPage}>
            <div className={style.firstBlok} >
                <input/>
                <button>Add</button>
            </div>
            <div className={style.secondBlok} >
                <CloneTasks />
                <CloneTasks />
                <CloneTasks />
                <CloneTasks />
            </div>
        </div>
    );
}

export default TodoPage;