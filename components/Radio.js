import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import './Radio.less';
function Radio({
  prefixes = 'radio',
  className,
  name,
  value,
  checked,
  disabled,
  children,
  onChange
}) {
  const classString = classNames(className, {
    [`${prefixes}-wrapper`]: true,
    [`${prefixes}-wrapper-checked`]: checked,
    [`${prefixes}-wrapper-disabled`]: disabled
  });
  return (
    <label className={classString}>
      <span className="radio">
        <input
          className="radio-input"
          type="radio"
          name={name}
          value={value}
          checked={checked}
          disabled={disabled}
          onChange={({ target }) => {
            if (target.checked && onChange) {
              onChange({
                value
              });
            }
          }}
        />
        <i className="radio-inner"></i>
      </span>
      <span>{children}</span>
    </label>
  );
}

function Group({
  className,
  name,
  value,
  options,
  disabled,
  children,
  onChange
}) {
  const [index, setIndex] = useState(0);
  if (options && options.length > 0) {
    return (
      <div className={className ? className : 'radio-group'}>
        {options.map((option, index) => {
          return (
            <Radio
              key={name + '-' + option.value}
              name={name}
              value={option.value}
              checked={value === option.value}
              disabled={disabled || option.disabled}
              onChange={({ value }) => {
                setIndex(index);
                onChange && onChange({ value });
              }}
            >
              {option.label}
            </Radio>
          );
        })}
      </div>
    );
  }
  return (
    <div className={className ? className : 'radio-group'}>
      <div
        className="radio-background"
        style={{ transform: `translateX(${112.5 * index}%)` }}
      ></div>
      {React.Children.map(children, (child, index) => {
        if (!React.isValidElement(child)) {
          return null;
        }
        return React.cloneElement(child, {
          name: name,
          checked: value === child.props.value,
          disabled: disabled || child.props.disabled,
          onChange: ({ value }) => {
            setIndex(index);
            onChange && onChange({ value });
          }
        });
      })}
    </div>
  );
}
function Button({ prefixes, children, ...props }) {
  return (
    <Radio prefixes="radio-button" {...props}>
      {children}
    </Radio>
  );
}

Radio.Button = Button;
Radio.Group = Group;
export { Button, Group };
export default Radio;
