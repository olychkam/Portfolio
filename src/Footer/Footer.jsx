import React from 'react';
import style from './Footer.module.css';
import styleContainer from './../common/styles/Container.module.css'

function Footer() {
    return (
        <div className={style.footerBlock}>
            <div className={`${styleContainer.container} ${style.footerContainer}`}>
                <h2 className={style.title}>Мартынова Оля</h2>
                <div className={style.footer}>
                    <div className={style.photo}></div>
                    <div className={style.photo}></div>
                    <div className={style.photo}></div>
                    <div className={style.photo}></div>
                </div>
                <div className={style.title}>@2021 Все права защищены</div>

            </div>
        </div>
    );
}

export default Footer;