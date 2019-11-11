import React, { MouseEventHandler, FunctionComponent } from 'react';
import classNames from 'classnames';

import './Button.less';

interface IButton {
  className?: string;
  type?: string;
  size?: string;
  onClick?: MouseEventHandler;
}

const Button: FunctionComponent<IButton> = ({
  className,
  children,
  size = 'default',
  onClick
}) => {
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
};
export default Button;
