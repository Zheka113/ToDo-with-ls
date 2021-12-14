import React from 'react';
import style from './donePage.module.css';

function DonePage() {
    let testfoo = () =>{
        console.log('test')
    }
    return (
        <div className={style.donePage}>
            <div>
                <input type="checkbox" checked={true} onChange={testfoo} />
                <div>zadanie 1</div>
                <button>X</button>
            </div>
            <div>
                <input type="checkbox" />
                <div>zadanie 2</div>
                <button>X</button>
            </div>
        </div>
    );
}

export default DonePage;