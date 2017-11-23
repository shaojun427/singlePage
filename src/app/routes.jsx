import React from 'react';
import { HashRouter as Router, Route, NavLink as Link, Switch, Redirect } from 'react-router-dom';
import HomePage from '../pages/home/index.jsx';
import TablePage from '../pages/table/index.jsx';
import ErrorPage from '../pages/error/index.jsx';
import ThreePage from '../pages/three/index.jsx';

const I18N = window.i18n;


let Routes = (<Router>
  <div>
    <Link activeClassName="active" to={{pathname: '/'}}>{I18N.home.title}</Link>　
    <Link activeClassName="active" to={{pathname: '/table'}}>{I18N.table.title}</Link>
    <Link activeClassName="active" to={{pathname: '/three'}}>{I18N.three.title}</Link>
    <Link activeClassName="active" to={{pathname: '/error',search: `?errMsg=${I18N.error.info}`}}>{I18N.error.title}</Link>
    <div className="route-content">
      <Switch>
        <Route path="/" exact component={HomePage}/>
        <Route path="/three" exact component={ThreePage}/>
        <Route path="/table" exact component={TablePage}/>
        <Route path="/error" exact component={ErrorPage} />
      </Switch>
    </div>
  </div>
</Router>)

export default Routes;