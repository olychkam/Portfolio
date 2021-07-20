import React from 'react';
import style from './Skills.module.scss';
import styleContainer from './../common/styles/Container.module.css'
import Skill from "./Skill/Skill";
import Title from "../common/components/Title";

function Skills() {
    return (
        <div className={style.skillsBlock}>
            <div className={style.container}>
                <Title text='Skills'/>
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