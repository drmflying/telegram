import App from 'next/app';
import { NextComponentType, NextPageContext } from 'next';
import React from 'react';
import io from 'socket.io-client';

interface AppProps {
  Component: NextComponentType;
}
import '../reset.less';
class _App extends App<AppProps> {
  static async getInitialProps({
    Component,
    ctx
  }: {
    Component: NextComponentType;
    ctx: NextPageContext;
  }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }
  state = {
    socket: null
  };
  componentDidMount() {
    // connect to WS server and listen event
    const socket = io();
    this.setState({ socket });
  }

  // close socket connection
  componentWillUnmount() {
    // const { socket } = this.state;
    // socket && socket.close();
    // socket && socket.close();
  }

  render() {
    const { socket } = this.state;
    if (!socket) {
      return <div>loading</div>;
    }
    const { Component, pageProps } = this.props;
    return <Component {...pageProps} socket={socket} />;
  }
}

export default _App;
