import React, { Component } from 'react';
import styles from './index.less';

export default class First extends Component {
  
  render() {
    return (
      <div className={styles.first}>
        <span className={styles.span}>第一个组件</span>
        <div className={styles.second}>less</div>
      </div>
    )
  }
}