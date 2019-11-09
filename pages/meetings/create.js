import React, { useState } from 'react';
import Page from 'components/Page';
import Input from 'components/Input';
export default () => {
  const [views, setViews] = useState('day');

  return (
    <Page className='create' title='create'>
      <div className='wrapper'>
        <div className='title'>
          <h1>Create Event</h1>
        </div>
        <div className='content'>
          <div>
            <Input placeholder='enter some thing' />
          </div>
        </div>
      </div>
    </Page>
  );
};
