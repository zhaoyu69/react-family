import React from 'react';
import ReactDom from 'react-dom';
import * as styles from "./index.less";
import history from './helpers/history';
import {Router, Route, Switch, Redirect, Link} from 'react-router-dom';
import Hello from "./router/Hello";
import Demo from "./router/Demo";

const PrivateRoute = ({ component: Component , ...rest}) => (
    <Route {...rest} render={props => (
        <Component {...props}/>
    )}/>
);

ReactDom.render(
    <Router history={history} >
        <div className={styles.wrap}>
            <ul>
                <li><Link to="/">Homes</Link></li>
                <li><Link to="/demo">Demo</Link></li>
            </ul>
            <Switch>
                <Route exact path="/" component={Hello}/>
                {/*<Route path="/demo" component={Demo}/>*/}
                <PrivateRoute path="/demo" component={Demo} />
            </Switch>
        </div>
    </Router>,
    document.getElementById('root')
);