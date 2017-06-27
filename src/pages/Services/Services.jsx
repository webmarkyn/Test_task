import React from 'react';

import s from './services.scss';
import Header from './Header/Header';
import Main from './Main/Main';

class Services extends React.Component {
    render() {
        return (
            <section>
                <Header/>
                <Main/>
                
            </section>
        );
    }
}

export default Services;