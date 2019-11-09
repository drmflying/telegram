import React from 'react';
import './Avatar.less';
export default function Avatar({ type }) {
  return (
    <img className='avatar' src={'/animals/' + type + '.svg'} alt={type} />
  );
}
