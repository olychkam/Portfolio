import React from 'react';
import style from './Work.module.scss';
import Button from "../../common/components/button/Button";



function Work(props) {
    return (
        <div className={style.work}>
            <div className={style.icon} style={props.style}>
                <Button link={props.link} text={"view"}/>
            </div>
           <div className={style.propjectInfo}>
               <h3 className={style.projectTitle}>{props.title}</h3>
            <span className={style.description}>{props.description}</span>
           </div>
        </div>
    );
}

export default Work;
