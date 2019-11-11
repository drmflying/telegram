import React, { Component } from 'react';
import uuid from 'functions/uuid';

export default class Fingerprint extends Component {
  componentDidMount() {
    console.log(uuid());
  }
  render() {
    return <div></div>;
  }
}
