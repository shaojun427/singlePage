import React from 'react';
import { HashRouter as Router, Route, NavLink as Link, Switch, Redirect } from 'react-router-dom';
import HomePage from '../pages/home/index.jsx';
import errorPage from '../pages/error/index.jsx';
const I18N = window.i18n;


let Routes = (<Router>
  <div>
    <Link activeClassName="active" replace={true} exact to={{pathname: '/'}}>{I18N.home.title}</Link>　
    <Link activeClassName="active" replace={true}  to={{pathname: '/error',search: `?errMsg=${I18N.error.info}`}}>{I18N.error.title}</Link>
    <div className="route-content">
      <Switch>
        <Route path="/" exact component={HomePage}/>
        <Route path="/error" component={errorPage} />
      </Switch>
    </div>
  </div>
</Router>)

export default Routes;