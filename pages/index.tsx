import React, { useState, useEffect, FunctionComponent } from 'react';
import Welcome from 'components/Welcome';
import ChatRoom from 'components/ChatRoom';
interface IHome {
  socket?: SocketIO.Socket;
}
const Home: FunctionComponent<IHome> = ({ socket }) => {
  const [users, setUsers] = useState(null);
  useEffect(() => {
    socket && socket.on('login', setUsers);
    return () => {
      socket && socket.off('login', setUsers);
    };
  });
  return (
    <>
      <ChatRoom users={users} socket={socket} />
      <Welcome socket={socket} />
    </>
  );
};
export default Home;
