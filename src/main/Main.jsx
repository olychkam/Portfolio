import React from 'react';
import style from './Main.module.scss';
import Particles from 'react-particles-js';
import Flip from 'react-reveal/Flip';
import Fade from 'react-reveal/Fade';
import ReactTypingEffect from 'react-typing-effect';
import Tilt from 'react-tilt'


function Main() {
    const particlesOpt = {
        'particles': {
            'number': {
                'value': 80,
                'density': {
                    'enable': true,
                    'value_area': 800
                }
            },
        },
    };
    return (
        <div id={'main'} className={style.mainBlock}>
            <Particles className={style.particles} params={particlesOpt}/>
            <div className={style.container}>
                <Fade left><div className={style.text}>
                    <span>Hi There</span>
                    <span>I am Olya <span>Martynova</span></span>
                    <ReactTypingEffect
                        text={["Frontend Develover"]}/>
                </div>
                </Fade>
               <Flip left><Tilt className="Tilt" options={{ max : 25 }}><div className={style.photo}>
                    <div className={style.image}>
                    </div>
                </div></Tilt>
               </Flip>

            </div>
        </div>
    )
        ;
}

export default Main;