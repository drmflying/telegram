import React, { useState, useEffect, useRef, FunctionComponent } from 'react';
import Message from 'components/Message';
import Forward from 'components/Forward';
import './ChatRoom.less';

interface IChatRoom {
  users?: any;
  socket?: SocketIO.Socket;
}
type TMessage = {
  owner: any;
  message: string;
  time: number;
};

const ChatRoom: FunctionComponent<IChatRoom> = ({ users, socket }) => {
  if (!socket) {
    return null;
  }
  const [messages, setMessages] = useState<TMessage[]>([]);
  const container = useRef<HTMLDivElement>(null);
  useEffect(() => {
    socket.on('chat', updateMassages);
    return () => {
      socket.off('chat', updateMassages);
    };
  });
  const updateMassages = (message: TMessage) => {
    console.log(message);
    setMessages([...messages, message]);
    if (container.current) {
      container.current.scrollTop = container.current.scrollHeight;
    }
  };
  // socket.on('chat', message => updateMassages(message));
  return (
    <div className='chat-room'>
      <div className='chat-room-header'></div>
      <div className='chat-room-content' ref={container}>
        {messages.map(message => {
          return (
            <Message
              key={message.time}
              owner={message.owner}
              message={message.message}
              righted={message.owner.uuid === users.uuid}
            />
          );
        })}
      </div>
      <Forward className='chat-room-footer' socket={socket} />
    </div>
  );
};
export default ChatRoom;
