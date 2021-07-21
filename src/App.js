import React from 'react';
import style from'./App.scss';
import Header from "./Header/Header";
import Main from "./main/Main";
import Works from "./works/Works";
import Skills from "./Skills/Skills";
import Contacts from "./contacts/Contacts";
import Footer from "./Footer/Footer";
import About from "./about/About";

function App() {
    return (
        <div className={style.App}>
            <Header/>
            <Main/>
            <About/>
            <Skills/>
            <Works/>
            <Contacts/>
            <Footer/>
        </div>
    );
}

export default App;
