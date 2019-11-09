import React, { useState } from 'react';

import Page from 'components/Page';
import Radio from 'components/Radio';
export default () => {
  const [views, setViews] = useState('day');

  return (
    <Page className='meetings' title='meetings'>
      <div className='wrapper'>
        <div className='title'>
          <h1>Meetings</h1>
          <Radio.Group
            value={views}
            className='radio-button-group'
            name='views'
            onChange={({ value }) => setViews(value)}
          >
            <Radio.Button value='day'>Day</Radio.Button>
            <Radio.Button value='week'>Week</Radio.Button>
            <Radio.Button value='month'>Month</Radio.Button>
          </Radio.Group>
        </div>
        <div className='content'></div>
      </div>
    </Page>
  );
};
