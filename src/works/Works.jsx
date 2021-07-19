import React from 'react';
import style from './Works.module.scss';
import styleContainer from './../common/styles/Container.module.css'
import Work from "./work/Work";
import Title from "../common/components/Title";
import todoImage from './../assets/images/unnamed.png';
import socialImage from './../assets/images/istockphoto-482295094-1024x1024.jpg';

function Works() {
    const todo = {
        backgroundImage: `url(${todoImage})`,
    };
    const social = {
        backgroundImage: `url(${socialImage})`,
    };
    return (
        <div className={style.worksBlock}>
            <div className={`${styleContainer.container} ${style.worksContainer}`}>
              <Title text={'Projects'}/>
                <div className={style.works}>
                    <Work style={todo} title={'TodoList'} description={'Lallaal'}/>
                    <Work style={social} title={'Social Network'} description={'YoyoyoyoYoyoyoyo'}/>
                </div>
                </div>
            </div>
    );
}

export default Works;