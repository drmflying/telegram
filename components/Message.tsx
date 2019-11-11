import React, { FunctionComponent } from 'react';
import classNames from 'classnames';
import Avatar from 'components/Avatar';
import './Message.less';

interface IMessage {
  className?: string;
  righted: boolean;
  owner: any;
  message: string;
}

const Message: FunctionComponent<IMessage> = ({
  className,
  righted,
  owner,
  message
}) => {
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
};
export default Message;
