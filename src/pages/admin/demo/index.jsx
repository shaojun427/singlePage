import React, {Component} from 'react';
import Table from 'uxcore-table';
class Demo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const columns = [
      { dataKey: 'country', title: '国家', width: 200, ordered: true },
      { dataKey: 'city', title: '城市', width: 200, ordered: true },
      { dataKey: 'firstName', title: 'FristName', width: 200 },
      { dataKey: 'lastName', title: 'LastName', width: 200 },
      { dataKey: 'email', title: 'Email', width: 200, ordered: true },
    ];
    const data = {
      "data":[
        {
          "id":'1',
          "grade":"grade1",
          "email":"email1",
          "firstName":"firstName1",
          "lastName":"lastName1",
          "birthDate":"birthDate1",
          "country":"country1",
          "city":"city1"
        }
      ],
      "currentPage":1,
      "totalCount":30
    }
    const renderProps = {
      height: 400,
      actionColumn: {
        edit() {},
        del() {},
      },
      className: 'kuma-uxtable-split-line',
      fetchParams: {},
      showColumnPicker: false,
      jsxdata: data,
      jsxcolumns: columns,
    };
    return (<Table {...renderProps} />);
  }
}

export default Demo;