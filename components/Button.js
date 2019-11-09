import React from 'react';
import './Button.less';
export default function Button({ children, onClick }) {
  return (
    <button className='btn' onClick={onClick}>
      {children}
    </button>
  );
}
