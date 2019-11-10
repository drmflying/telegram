import React from 'react';
import classNames from 'classnames';

import './Avatar.less';
export default function Avatar({ className, type, size = 'default' }) {
  const classString = classNames(
    {
      avatar: true,
      [`avatar-${size}`]: true
    },
    className
  );
  return (
    <div className={classString}>
      <img src={'/animals/' + type + '.svg'} alt={type} />
    </div>
  );
}
