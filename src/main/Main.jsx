import React from 'react';
import style from './Main.module.scss';

function Main() {
    return (
        <div className={style.mainBlock}>
            <div className={style.container}>
                <div className={style.text}>
                    <span>Hi There</span>
                    <span>I am Olya <span>Martynova</span></span>
                    <h1>Frontend Develover</h1>
                </div>
                <div className={style.photo}>
                    <div className={style.image}>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Main;