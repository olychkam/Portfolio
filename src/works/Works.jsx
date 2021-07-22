import React from 'react';
import style from './Works.module.scss';
import styleContainer from '../common/styles/Container.module.scss'
import Work from "./work/Work";
import Title from "../common/components/Title";
import todoImage from './../assets/images/unnamed.png';
import socialImage from './../assets/images/istockphoto-482295094-1024x1024.jpg';
import counterImage from './../assets/images/logotip-090207.jpg';

function Works() {
    const todo = {
        backgroundImage: `url(${todoImage})`,
    };
    const social = {
        backgroundImage: `url(${socialImage})`,
    };
    const counter = {
        backgroundImage: `url(${counterImage})`,
    };
    return (
        <div id={'project'} className={style.worksBlock}>
            <div className={`${styleContainer.container} ${style.worksContainer}`}>
              <Title text={'Projects'}/>
                <div className={style.works}>
                    <Work style={todo}
                          link={'https://github.com/olychkam/NewTodoList'}
                          title={'TodoList'}
                          description={'ToDo List is an online platform for organizing your personal or work tasks which can help you to manage tasks effectively.'}/>
                    <Work
                        link={'https://github.com/olychkam/it-kamasutra'}
                        style={social}
                        title={'Social Network'}
                        description={'Social Network is an online platform that is used for communication, dating, as well as for entertainment and work. Users can make friends by writing a post.'}/>
                    <Work style={counter}
                          link={'https://github.com/olychkam/Counter'}
                          title={'Counter'}
                          description={'Counter is a counting device. It allows to do settings which influence on the way how the counter works.'}/>
                </div>
                </div>
            </div>
    );
}

export default Works;