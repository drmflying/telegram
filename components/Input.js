import React, { useState } from 'react';
import classNames from 'classnames';
import './Input.less';
export default function Input({
  className,
  value,
  prefixes = 'input',
  type = 'text',
  size = 'default',
  disabled,
  autoFocus,
  suffix,
  prefix,
  defaultValue,
  placeholder,
  onBlur,
  onFocus,
  onChange,
  onPressEnter
}) {
  const [focus, setFocus] = useState(autoFocus);
  const classString = classNames(
    {
      [`${prefixes}-wrapper`]: true,
      [`${prefixes}-wrapper-${size}`]: true,
      [`${prefixes}-wrapper-focus`]: focus,
      [`${prefixes}-wrapper-disabled`]: disabled
    },
    className
  );
  return (
    <label className={classString}>
      <span className='input-prefix'>{prefix}</span>
      <input
        className='input'
        autoFocus={autoFocus}
        disabled={disabled}
        type={type}
        value={value}
        onBlur={e => {
          setFocus(false);
          onBlur && onBlur(e);
        }}
        onFocus={e => {
          setFocus(true);
          onFocus && onFocus(e);
        }}
        onChange={onChange}
        onKeyPress={e => {
          if (e.key === 'Enter') {
            onPressEnter && onPressEnter(e);
          }
        }}
        placeholder={placeholder}
      />
      <span className='input-suffix'>{suffix}</span>
    </label>
  );
}
