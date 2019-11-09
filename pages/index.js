import React, { useState, useEffect } from 'react';
import Page from 'components/Page';
import Welcome from 'components/Welcome';
import ChatRoom from 'components/ChatRoom';
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
      <ChatRoom users={users} socket={socket} />
      <Welcome socket={socket} />
    </>
  );
};
