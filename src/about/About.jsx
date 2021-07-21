import React from 'react';
import style from './About.module.scss';
import secondaryPhoto from './../assets/images/54266338_127569954999730_3943841855787104693_n.jpg';
import Title from '../common/components/Title';
import Fade from 'react-reveal/Fade';
import styles from '../common/styles/Container.module.scss';


function About() {
    return (
        <div id="about" className={style.aBoutContainer}>
            <div className={style.container}>
            <Title text='About me'/>

            <Fade bottom>
                <div className={styles.container} >
                    <div className={style.textBlock}>
                        <div className={style.left}>
                            <img src={secondaryPhoto} alt="Photo"/>
                        </div>
                        <div className={style.right}>
                            <div className={style.name}>
                                <span className={style.jobTitle}>Frontend Developer</span>
                            </div>
                            <div className={style.text}>
                                <div>Hello, I am frontend developer.  Every day I improve my skills and expand them . I have experience in creating SPA, using React(JS/TS), Redux, HTML, CSS, Material-UI,REST API,Thunk,Saga,Toolkit,Formik. For testing I use (Storybook, Unit test). My free time is dedicated to programming tutorials, codewars and becoming familliar with NodeJS. I'm open to new opportunites.
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fade>
        </div>
        </div>
    )
}

export default About