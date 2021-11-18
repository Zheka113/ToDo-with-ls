import React from 'react';
import style from './mainPage.module.css';

function MainPage() {
    return (
        <div className={style.mainPage}>
            <textarea />
            <button>Add</button>
            <div>
                <div>zadanie 1</div>
                <div>zadanie 2</div>
                <div>zadanie 3</div>
                <div>zadanie 4</div>
            </div>
        </div>
    );
}

export default MainPage;