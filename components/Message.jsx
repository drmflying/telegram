import React from 'react';
import classNames from 'classnames';
import Avatar from 'components/Avatar';
import './Message.less';
export default function Message({ className, righted, owner, message }) {
  const classString = classNames(
    {
      'message-wrapper': true,
      'message-wrapper-righted': righted
    },
    className
  );
  return (
    <div className={classString}>
      <div className='message-owner'>
        <Avatar type={owner.name} />
        {/* <span>{owner.name}</span> */}
      </div>
      <div className='message-bubble'>{message}</div>
    </div>
  );
}
