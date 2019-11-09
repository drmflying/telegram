import React from 'react';
import Head from 'next/head';
import { ThemeProvider } from './ThemeContext';
import TabBar from './TabBar';
import '../reset.less';
import './Page.less';

export default function Page({ className, title, children, actions }) {
  return (
    <div className={'page page-' + className}>
      <Head>
        <title>{title}</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <ThemeProvider>
        <div className='page-header'>
          <h1>{title}</h1>
          {actions}
        </div>
        <div className='page-content'>{children}</div>
        <TabBar className='page-footer' />
      </ThemeProvider>
    </div>
  );
}
