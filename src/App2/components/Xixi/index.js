import React, { Component } from 'react';
import { Button } from 'antd-mobile';


export default class Xixi extends Component {
  render() {
    return (
      <div>
        <Button>default</Button>
        <Button disabled>default disabled</Button>
        <Button type="primary">primary</Button>
        <Button type="primary" disabled>primary disabled</Button>
        <Button type="warning">warning</Button>
        <Button type="warning" disabled>warning disabled</Button>
      </div>
    )
  }
}