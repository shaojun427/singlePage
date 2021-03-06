import React, {Component} from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Demo from './demo/index.jsx';
import InterviewQuestion from './interviewQuestion/index.jsx';
import InterviewSupply from './interviewSupply/index.jsx';

class Admin extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (<div>
      <Switch>
        <Route path={`${host}/admin/demo`} exact component={Demo}/>
        <Route path={`${host}/admin/interviewQuestion`} exact component={InterviewQuestion}/>
        <Route path={`${host}/admin/interviewSupply`} exact component={InterviewSupply}/>
        <Redirect path={`${host}/admin`} to="/404"/>
      </Switch>
    </div>)
  }
}

export default Admin;