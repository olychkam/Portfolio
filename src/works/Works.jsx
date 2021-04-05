import React from 'react';
import style from './Works.module.css';
import styleContainer from './../common/styles/Container.module.css'
import Work from "./work/Work";

function Works() {
    return (
        <div className={style.worksBlock}>
            <div className={`${styleContainer.container} ${style.worksContainer}`}>
                <h2 className={style.title}>Works</h2>
                <div className={style.works}>
                    <Work title={'TodoList'} description={'Lallaal'}/>
                    <Work title={'Social Network'} description={'Yoyoyoyo'}/>
                </div>
            </div>
        </div>
    );
}

export default Works;