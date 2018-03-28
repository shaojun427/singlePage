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
        <Route path="/" exact component={HomePage}/>
        <Route path="/admin" component={AdminPage}/>
        <Route path="/404" component={UndefinedPage}/>
        {/*<Redirect path="/" to="/404"/>*/}
      </Switch>
    </div>)
  }
}

export default <Router><Route path="/" component={App} /></Router>;