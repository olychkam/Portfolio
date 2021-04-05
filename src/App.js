import React from 'react';
import './App.css';
import Header from "./Header/Header";
import Main from "./main/Main";
import Works from "./works/Works";
import Skills from "./Skills/Skills";
import Contacts from "./contacts/Contacts";
import Footer from "./Footer/Footer";

function App() {
    return (
        <div>
            <Header/>
            <Main/>
            <Skills/>
            <Works/>
            <Contacts/>
            <Footer/>
        </div>
    );
}

export default App;
