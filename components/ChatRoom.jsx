import React, { useState, useEffect, useRef } from 'react';
import Message from 'components/Message';
import Forward from 'components/Forward';
import './ChatRoom.less';
export default function ChatRoom({ users, socket }) {
  const [messages, setMessages] = useState([]);
  const container = useRef(null);
  useEffect(() => {
    socket.on('chat', updateMassages);
    return () => {
      socket.off('chat', updateMassages);
    };
  });
  const updateMassages = message => {
    console.log(message);
    setMessages([...messages, message]);
    if (container) {
      container.current.scrollTop = container.current.scrollHeight;
      // console.dir(container.current.scrollTop = container.current.scrollHeight);
      // container.current
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
}
