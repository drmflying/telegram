import React, { useState, useEffect } from 'react';

import Page from 'components/Page';
import ChatRoom from 'components/ChatRoom';

import Button from 'components/Button';
import Icon from 'components/Icon';
export default ({ socket }) => {
  const [users, setUsers] = useState(null);
  useEffect(() => {
    socket.on('login', data => setUsers(data));
    return () => {
      socket.off('login');
    };
  });
  return (
    <>
      <Page
        className='chats'
        title='Chats'
        actions={
          <div className='actions'>
            <Button>
              <Icon type='jiahao' />
            </Button>
            <Button>
              <Icon type='shoucang' />
            </Button>
            <Button>
              <Icon type='wo' />
            </Button>
            <Button>
              <Icon type='sousuo' />
            </Button>
          </div>
        }
      >
        <div>Chats</div>
      </Page>
      <ChatRoom users={users} socket={socket} />
    </>
  );
};
