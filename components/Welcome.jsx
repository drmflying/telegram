import React, { Component } from 'react';
import uuid from 'functions/uuid';
import Button from 'components/Button';
import './Welcome.less';

export default class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      uuid: '',
      started: false
    };
  }
  componentDidMount() {
    this.setState({
      uuid: uuid()
    });
  }
  handleStart = () => {
    const { socket } = this.props;
    socket.emit('login', this.state.uuid);
    this.setState({
      started: true
    });
  };
  render() {
    const { started } = this.state;
    if (started) {
      return null;
    }
    return (
      <div className='welcome'>
        <div className='logo'>
          <img src='/assets/logo.svg' alt='logo' />
        </div>
        <div className='slogan'>
          <h1>Telegram</h1>
          <p>The world's fastest messaging app.</p>
          <Button onClick={this.handleStart}>Start Messaging</Button>
        </div>
      </div>
    );
  }
}
