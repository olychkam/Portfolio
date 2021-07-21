import React from 'react';
import style from './Skills.module.scss';
import styleContainer from '../common/styles/Container.module.scss'
import Skill from "./Skill/Skill";
import Title from "../common/components/Title";

function Skills() {
    return (
        <div id={'skills'} className={style.skillsBlock}>
            <div className={style.container}>
                <Title text='Skills'/>
                <div className={style.skills}>
                    <Skill title={'React/Redux'}/>
                    <Skill title={'TypeScript/JavaScript'}/>
                    <Skill title={'REST API(Axios)'}/>
                    <Skill title={'HTML/CSS'}/>
                    <Skill title={'TDD'}/>
                    <Skill title={'GIT'}/>
                </div>
            </div>
        </div>
    );
}

export default Skills;