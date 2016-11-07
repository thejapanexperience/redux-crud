import React, { Component } from 'react';
import Children from './Children';

export default class Layout extends Component {
  render() {
    return (
      <div className="container">
        <h1>Child Tracker App with redux</h1>
        <Children />
      </div>
    );
  }
}
