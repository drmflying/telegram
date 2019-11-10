import React, { useState, useEffect } from 'react';

import Page from 'components/Page';
import ChatRoom from 'components/ChatRoom';

import Button from 'components/Button';
import List from 'components/List';
import Avatar from 'components/Avatar';
import Icon from 'components/Icon';
Avatar;

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
        <List>
          <List.Item>
            <Avatar type='Aquarium' />
            <List.Label>
              <h4>Bird</h4>
              <p>+86 15678123873</p>
            </List.Label>
            <List.Note>6:30pm</List.Note>
          </List.Item>
          <List.Item>
            <Avatar type='Aquarium' />
            <List.Label>
              <h4>Bird</h4>
              <p>+86 15678123873</p>
            </List.Label>
            <List.Note>6:30am</List.Note>
          </List.Item>
          <List.Item>
            <Avatar type='Aquarium' />
            <List.Label>
              <h4>Bird</h4>
              <p>+86 15678123873</p>
            </List.Label>
            <List.Note>4:30pm</List.Note>
          </List.Item>
          <List.Item>
            <Avatar type='Aquarium' />
            <List.Label>
              <h4>Bird</h4>
              <p>+86 15678123873</p>
            </List.Label>
            <List.Note>8:30pm</List.Note>
          </List.Item>
        </List>
      </Page>
      <ChatRoom users={users} socket={socket} />
    </>
  );
};
