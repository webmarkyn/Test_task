import React from 'react';

import s from './header.scss';

class Header extends React.Component {
    render() {
        return (
            <header className={s.header}>
                <div className={s.top}>
                    <div className={s.logo}>
                        <img src={require('./assets/Logo.png')} alt=""/>
                    </div>
                    <button className={s.login_button}>Log In Now</button>
                </div>
                <div className={s.mid}>
                    <h2>Home of Dentistry</h2>
                    <p>Denteez was created by dentists for dentistry in order to<br/>
make the life of everyone involved in dentistry easier.</p>
                </div>
            </header>
        );
    }
}

export default Header;