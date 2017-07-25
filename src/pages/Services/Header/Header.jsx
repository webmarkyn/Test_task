import React from 'react';

import s from './header.scss';

class Header extends React.Component {
    render() {
        return (
            <header className={s.header}>
                <div className={s.content}>
                    <div className={s.logo}><a href="#"><img src={require('./assets/logo.png')} alt=""/></a></div>
                    <div className={s.search}>
                        <input type="text" placeholder="Company Name" />
                    </div>
                    <div className={s.messages}><a href="#"><img src={require('./assets/Chat.png')} alt=""/></a></div>
                    <div className={s.notifications}><a href="#"><img src={require('./assets/Notifications.png')} alt="" /></a></div>
                    <div className={s.profile}>
                        <a className={s.profile__link} href="#">
                            <div className={s.profile__avatar}></div>
                            <p className={s.profile__name}>Maximillian Beekeeper</p>
                        </a>
                    </div>
                </div>
                
            </header>
        );
    }
}

export default Header;