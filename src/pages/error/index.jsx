import React, {Component} from 'react';
import queryString from 'query-string';
const I18N = window.i18n;

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