import React, { FunctionComponent } from 'react';
import classNames from 'classnames';

import './Avatar.less';

interface IAvatar {
  className?: string;
  type?: string;
  size?: string;
}
const Avatar: FunctionComponent<IAvatar> = ({
  className,
  type,
  size = 'default'
}) => {
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
};
export default Avatar;
