import React, {Component} from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import UndefinedPage from '../pages/error/404/index.jsx';
import HomePage from '../pages/home/index.jsx';
import AdminPage from '../pages/admin/index.jsx';

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (<div>
      <Switch>
        <Route path={`${host}/`} exact component={HomePage}/>
        <Route path={`${host}/admin`} component={AdminPage}/>
        <Route path={`${host}/404`} component={UndefinedPage}/>
        <Redirect path={`${host}/`} to="/404"/>
      </Switch>
    </div>)
  }
}

export default <Router><Route path="/" component={App} /></Router>;