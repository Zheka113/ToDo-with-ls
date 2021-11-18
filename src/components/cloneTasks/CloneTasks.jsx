import React from 'react';
import style from './cloneTasks.module.css';

function CloneTasks() {
    return (
        <div className={style.task}>
            <input type="checkbox"/>
            someText
            <button>delete</button>
        </div>
    );
}

export default CloneTasks;