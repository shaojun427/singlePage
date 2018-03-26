import React, {Component} from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Demo from './demo/index.jsx';

class Admin extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (<div>
      <Switch>
        <Route path="/admin/demo" exact component={Demo}/>
        <Redirect path="/admin" to="/404"/>
      </Switch>
    </div>)
  }
}

export default Admin;