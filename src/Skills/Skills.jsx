import React from 'react';
import style from './Skills.module.css';
import styleContainer from './../common/styles/Container.module.css'
import Skill from "./Skill/Skill";

function Skills() {
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <h2 className={style.title}>Skills</h2>
                <div className={style.skills}>
                    <Skill title={'NatJS'} description={'Lallaal'}/>
                    <Skill title={'React'} description={'Yoyoyoyo'}/>
                    <Skill title={'HTML'} description={'Yoyoyoyo'}/>
                </div>
            </div>
        </div>
    );
}

export default Skills;