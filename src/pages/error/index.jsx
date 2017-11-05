import React, {Component} from 'react';
import { render } from 'react-dom';
import { Redirect } from 'react-router-dom';
import queryString from 'query-string';

class ErrorPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  render() {
    let me = this;
    const query = queryString.parse(me.props.location.search);

    return <div>{query.errMsg}</div>
  }
}
export default ErrorPage