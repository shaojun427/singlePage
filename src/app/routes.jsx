import React from 'react';
import { HashRouter as Router, Route, NavLink as Link, Switch, Redirect } from 'react-router-dom';
import HomePage from '../pages/home/index.jsx';
import errorPage from '../pages/error/index.jsx';



let Routes = (<Router>
  <div>
    <Link activeClassName="active" exact to={{pathname: '/'}}>首页</Link>　
    <Link activeClassName="active" to={{pathname: '/error',search: '?errMsg=错误页面1'}}>其他页面</Link>
    <div className="route-content">
      <Switch>
        <Route path="/" exact component={HomePage}/>
        <Route path="/error" component={errorPage} />
      </Switch>
    </div>
  </div>
</Router>)

export default Routes;