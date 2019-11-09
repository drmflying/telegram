import React, { useEffect, useRef } from 'react';
import './Icon.less';
export default function Icon({ type }) {
  const icon = useRef(null);
  useEffect(() => {
    fetch('/icons/' + type + '.svg').then(rsp =>
      rsp.text().then(svg => (icon.current.innerHTML = svg))
    );
  });
  return <span className='icon-inner' ref={icon}></span>;
  return <img className='icon' src={'/icons/' + type + '.svg'} alt={type} />;
  return (
    <svg className='icon' aria-hidden='true'>
      <use xlinkHref={'#' + type} />
    </svg>
  );
}
