import React, { useEffect, useRef, FunctionComponent } from 'react';
import classNames from 'classnames';

import './Icon.less';

interface IIcon {
  className?: string;
  type?: string;
  size?: string;
}

const Icon: FunctionComponent<IIcon> = ({
  className,
  type = '',
  size = 'default'
}) => {
  const icon = useRef<HTMLSpanElement>(null);
  const classString = classNames(
    {
      'icon-inner': true,
      [`icon-inner-${size}`]: true
    },
    className
  );
  useEffect(() => {
    fetch('/icons/' + type + '.svg').then(rsp => rsp.text().then(innerSvg));
  });
  const innerSvg = (svg: string) => {
    if (icon.current) {
      icon.current.innerHTML = svg;
    }
  };
  return <span className={classString} ref={icon}></span>;
  return <img className='icon' src={'/icons/' + type + '.svg'} alt={type} />;
  return (
    <svg className='icon' aria-hidden='true'>
      <use xlinkHref={'#' + type} />
    </svg>
  );
};
export default Icon;
