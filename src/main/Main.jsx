import React from 'react';
import style from './Main.module.scss';
import Particles from 'react-particles-js';



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
        <div className={style.mainBlock}>
            <Particles className={style.particles} params={particlesOpt}/>
            <div className={style.container}>
                <div className={style.text}>
                    <span>Hi There</span>
                    <span>I am Olya <span>Martynova</span></span>
                    <h1>Frontend Develover</h1>
                </div>
                <div className={style.photo}>
                    <div className={style.image}>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Main;