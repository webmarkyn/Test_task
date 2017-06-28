import React from 'react';

import Header from './Header/Header';
import Main from './Main/Main';
import Footer from './Footer/Footer';

import s from './welcome.scss';

function Welcome() {
    return (
        <section>
            <Header/>
            <Main/>
            <Footer/>
        </section>
    );
};

export default Welcome;