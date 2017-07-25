import React from 'react';  
import axios from 'axios';

import s from './main.scss';

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state= {data: '', error: ''};
        this.componentDidMount = this.componentDidMount.bind(this);
        this.refresh = this.refresh.bind(this);
        this.getAutoResponsiveProps = this.getAutoResponsiveProps.bind(this);
        
    }

    componentDidMount() {
        axios.get('http://504080.com/api/v1/services/categories', {
            'headers': {
                'Authorization': '1896bf8470a6a94e963895815762cb8ec8915c6b'
            }
        })
            .then( (response) => {
                this.setState({ data: response.data.data })
                
            })
            .catch( (error) => {
                console.log(error.response);
                this.setState({ error: error.response });
            });

    }

    refresh() {
        location.reload();
    }

    getAutoResponsiveProps() {
        return {
        itemMargin: 8,
        };
    }

    render() {
        return (
            <main>
                <div className={s.left_column}>
                    <div className={s.menu}>
                        <div className={s.menu__item}><a href="#"><img src={require('./assets/Feed.png')} alt="" /><p>Feed</p></a></div>
                        <div className={s.menu__item}><a href="#"><img src={require('./assets/Ask.png')} alt="" /><p>Ask</p></a></div>
                        <div className={s.menu__item}><a href="#"><img src={require('./assets/Companies.png')} alt="" /><p>Companies</p></a></div>
                        <div className={s.menu__item}><a href="#"><img src={require('./assets/Services.png')} alt="" /><p>Services</p></a></div>
                    </div>
                    <div className={s.advert}>
                        <h3 className={s.title}>Advertisment</h3>
                        <div className={s.advert__banner}>
                            <a href=""><img src={require('./assets/s.png')} alt="" /></a>
                        </div>
                        <p className={s.advert__info}>Ads By Denteez.com</p>
                    </div>
                    <div className={s.companies}>
                        <h3 className={s.title}><a href="">Featured Companies</a> <a href="#" className={s.title__see_all}>See All</a></h3>
                        <div className={s.company}>
                            <div className={s.company__pic}><a href=""><img src={require('./assets/3.png')} alt="" /></a></div>
                            <div className={s.company__info}>
                                <h4 className={s.black}><a href="">Company Name</a></h4>
                                <p className={s.grey}>Manufacturer</p>
                                <p className={s.grey}>Belgrade, Serbia</p>
                                <a href="#" className={s.black}>Follow now</a>
                            </div>
                        </div>
                        <div className={s.company}>
                            <div className={s.company__pic}><a href=""><img src={require('./assets/2.png')} alt="" /></a></div>
                            <div className={s.company__info}>
                                <h4 className={s.black}><a href="">Company Name</a></h4>
                                <p className={s.grey}>Service Provider</p>
                                <p className={s.grey}>New York, USA</p>
                                <a href="#" className={s.black}>Follow now</a>
                            </div>
                        </div>
                        <div className={s.company}>
                            <div className={s.company__pic}><a href=""><img src={require('./assets/1.png')} alt="" /></a></div>
                            <div className={s.company__info}>
                                <h4 className={s.black}><a href="">Company Name</a></h4>
                                <p className={s.grey}>Supplier</p>
                                <p className={s.grey}>London, England</p>
                                <a href="#" className={s.black}>Follow now</a>
                            </div>
                        </div>
                    </div>
                    <div className={s.info}>
                        <p>Danteez Copyright 2015</p>
                        <a href="#">Terms of use</a>
                        <a href="#">Privacy Policy</a>
                    </div>
                </div>
                <div className={s.middle_column}>
                    <header className={s.middle__header}>
                        <div className={s.header__container}>
                            <h2>Service Directory</h2>
                            <button>Add new service</button>
                        </div>     
                    </header>
                    <div className={s.content}>
                        <div className={s.categories}>               
                                        {this.state.data ? this.state.data.map((category) => (
                                                    <div className={s.category}>
                                                        <div className={s.category__pic}><img src={category.icon} alt={category.title} /></div>
                                                        <p className={s.category__name}>{category.title}</p>
                                                    </div>         
                                        )) : (<p>Loading</p>)}
                        </div>
                    </div>
                </div>
                <div className={s.right_column}>
                    <div className={s.People}>
                        <h3 className={s.People__title}><a href="">People you may know</a> <a href="#" className={s.title__see_all}>See All</a></h3>
                        <div className={s.human}>
                            <h4 className={s.human__name}><a href="#">Dennis Adams</a></h4>
                            <div className={s.human__content}>
                                <div className={s.human__pic}><a href="#"><img src={require('./assets/P1.png')} alt="" /></a></div>
                                <div className={s.human__info}>
                                    <p className={s.grey}>Dentist (Practice owner)</p>
                                    <p className={s.grey}>London, England</p>
                                    <a href="#" className={s.black}>Add Friend</a>
                                </div>
                            </div>
                        </div>
                        <div className={s.human}>
                            <h4 className={s.human__name}><a href="#">Mary Carpeter</a></h4>
                            <div className={s.human__content}>
                                <div className={s.human__pic}><a href="#"><img src={require('./assets/P2.png')} alt="" /></a></div>
                                <div className={s.human__info}>
                                    <p className={s.grey}>Dentinst (Practice owner)</p>
                                    <p className={s.grey}>Belgrade, Serbia</p>
                                    <a href="#" className={s.black}>Add Friend</a>
                                </div>
                            </div>
                        </div>
                        <div className={s.human}>
                            <h4 className={s.human__name}><a href="#">Dennis Adams</a></h4>
                            <div className={s.human__content}>
                                <div className={s.human__pic}><a href="#"><img src={require('./assets/P3.png')} alt="" /></a></div>
                                <div className={s.human__info}>
                                    <p className={s.grey}>Dentinst (Practice owner)</p>
                                    <p className={s.grey}>Paris, France</p>
                                    <a href="#" className={s.black}>Add Friend</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={s.Products}>
                        <h3 className={s.Products__title}><a href="">Featured Products</a> <a href="#" className={s.title__see_all}>See All</a></h3>
                        <div className={s.product}>
                            <h4 className={s.product__name}><a href="#">Product name</a></h4>
                            <div className={s.product__content}>
                                <div className={s.product__pic}><a href="#"><img src={require('./assets/U1.png')} alt="" /></a></div>
                                <div className={s.product__info}>
                                    <p className={s.grey}>Product Short
                                        Description. The quick brown
                                        fox jumps over the
                                        lazy dog.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className={s.product}>
                            <h4 className={s.product__name}><a href="#">Product name</a></h4>
                            <div className={s.product__content}>
                                <div className={s.product__pic}><a href="#"><img src={require('./assets/U2.png')} alt="" /></a></div>
                                <div className={s.product__info}>
                                    <p className={s.grey}>Product Short 
                                        Description. The quick brown 
                                        fox jumps over the 
                                        lazy dog.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={s.advert}>
                        <h3 className={s.title}>Advertisment</h3>
                        <div className={s.advert__banner}>
                            <a href=""><img src={require('./assets/2advert.png')} alt="" /></a>
                        </div>
                        <p className={s.advert__info}>Ads By Denteez.com</p>
                    </div>
                    <button className={s.chat}><img src={require('./assets/chat.png')} alt=""/>Chat with friends</button>
                </div>
                {this.state.error ? (
                    <div className={s.error_popup}>
                        <div className={s.error_popup__overlay}></div>
                        <div className={s.error_popup__container}>
                            <h3>Error {this.state.error.status}!</h3>
                            <h2>{this.state.error.data.error.message}</h2>
                            <p>{this.state.error.data.error.description}</p>
                            <button onClick={this.refresh}>Refresh</button>
                        </div>
                    </div>) : (<p></p>)}
                
            </main>
        );
    }
}

export default Main;