import React from 'react';
import classNames from 'classnames';

import './Button.less';
export default function Button({
  className,
  children,
  size = 'default',
  onClick
}) {
  const classString = classNames(
    {
      btn: true,
      [`btn-${size}`]: true
    },
    className
  );
  return (
    <button className={classString} onClick={onClick}>
      {children}
    </button>
  );
}
