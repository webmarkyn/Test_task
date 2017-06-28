import React from 'react';

import s from './footer.scss';

class Footer extends React.Component {
    render() {
        return (
            <footer className={s.footer}>
                <div className={s.about}>
                    <h3>About Denteez</h3>
                    <p>Why is it always so difficult to find what you are looking for in dentistry? Whether it is the latest advancement in technology or techniques or simply a review or understanding of the vast amount of products? Perhaps finding someone to just fix your broken equipment or simply hiring new staff or looking for that new job?</p>
                    <p>Our mission is to give every dental professional the possibility to discuss and share all aspects of their profession, their practice and their business. We aim to make the world of dentistry easy and accessible, so every dental professional can find what they are looking for quickly and easily all in one place.
 </p>
                </div>
                <div className={s.info}>
                    <div className={s.container}>
                        <p>Danteez Copyright 2015</p>
                    <div className={s.links}>
                        <p><a href="#">Support</a></p>
                        <p><a href="#">Privacy Policy</a></p>
                        <p><a href="#">Terms of Use</a></p>
                    </div>
                </div>
                    </div>  
            </footer>
        );
    }
}

export default Footer;  