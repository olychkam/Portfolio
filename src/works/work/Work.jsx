import React from 'react';
import style from './Work.module.scss';



function Work(props) {
    return (
        <div className={style.work}>
            <div className={style.icon} style={props.style}>
                <a className={style.btn}>Look</a>
            </div>
           <div className={style.propjectInfo}>
               <h3 className={style.projectTitle}>{props.title}</h3>
            <span className={style.description}>{props.description}</span>
           </div>
        </div>
    );
}

export default Work;
