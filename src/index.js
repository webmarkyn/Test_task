import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

require('./assets/scss/fonts-load.scss');


import Welcome from './pages/Welcome';
import Services from './pages/Services';


class App extends React.Component {
    render() {
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}


ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" components={App}>
            <IndexRoute components={Services}/>
            <Route path="welcome" components={Welcome} />
        </Route>
    </Router>,
    document.getElementById('root')
);