import './index.less'
import React, {Component} from 'react';
let Button = require('uxcore-button');
let Form = require('uxcore-form');
const TreeSelect = require('uxcore-tree-select');


function generateData(x = 3, y = 2, z = 1, gData = []) {
  // x：每一级下的节点总数。y：每级节点里有y个节点、存在子节点。z：树的level层级数（0表示一级）
  function _loop(_level, _preKey, _tns) {
    const preKey = _preKey || '0';
    const tns = _tns || gData;

    const children = [];
    for (let i = 0; i < x; i++) {
      const key = `${preKey}-${i}`;
      tns.push({label: `${key}-label`, value: `${key}-value`, key, disabled: key === '0-0-0-1' ? true : false});
      if (i < y) {
        children.push(key);
      }
    }
    if (_level < 0) {
      return tns;
    }
    const __level = _level - 1;
    children.forEach((key, index) => {
      tns[index].children = [];
      return _loop(__level, key, tns[index].children);
    });
  }
  _loop(z);
  return gData;
}

let gData = generateData();

class BasicDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '0-0-0-label',
      value: '0-0-0-value'
    };
  }
  onChange(value) {
    this.setState({value});
  }
  render() {
    return <TreeSelect style={{width: 300}}
                       dropdownStyle={{maxHeight: 200, overflow: 'auto'}}
                       placeholder={<i>请下拉选择</i>}
                       searchPlaceholder="please search"
                       showSearch={false} allowClear treeLine={false}
                       inputValue={this.state.inputValue}
                       value={this.state.value}
                       treeData={gData}
                       treeNodeFilterProp="label"
                       filterTreeNode={false}
                       onChange={this.onChange.bind(this)} />
  }
}

export default BasicDemo;