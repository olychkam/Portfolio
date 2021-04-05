import React from 'react';
import style from './Contacts.module.css';
import styleContainer from './../common/styles/Container.module.css'

function Contacts() {
    return (
        <div className={style.contactsBlock}>
            <div className={`${styleContainer.container} ${style.contactsContainer}`}>
                <h2 className={style.title}>Контакты</h2>
                <div className={style.contacts}>
                    <form>
                        <p><input/></p>
                        <p><input/></p>
                        <textarea/>
                    </form>
                </div>
                <button className={style.button}>Отправить</button>
            </div>
        </div>
    );
}

export default Contacts;