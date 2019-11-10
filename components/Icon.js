import React, { useEffect, useRef } from 'react';
import classNames from 'classnames';

import './Icon.less';
export default function Icon({ className, type, size = 'default' }) {
  const icon = useRef(null);
  const classString = classNames(
    {
      'icon-inner': true,
      [`icon-inner-${size}`]: true
    },
    className
  );
  useEffect(() => {
    fetch('/icons/' + type + '.svg').then(rsp =>
      rsp.text().then(svg => (icon.current.innerHTML = svg))
    );
  });
  return <span className={classString} ref={icon}></span>;
  return <img className='icon' src={'/icons/' + type + '.svg'} alt={type} />;
  return (
    <svg className='icon' aria-hidden='true'>
      <use xlinkHref={'#' + type} />
    </svg>
  );
}
