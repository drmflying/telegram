import React, { useState, FunctionComponent } from 'react';
import classNames from 'classnames';
import './Radio.less';

interface IGroup {
  className?: string;
  name?: string;
  value?: string;
  options?: option[];
  disabled?: boolean;
  onChange?: (value: Object) => void;
}

type option = {
  label: string;
  value: string;
  disabled: boolean;
};
const Group: FunctionComponent<IGroup> = ({
  className,
  name,
  value,
  options,
  disabled,
  children,
  onChange
}) => {
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
        className='radio-background'
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
          onChange: (event: any) => {
            setIndex(index);
            onChange && onChange(event);
          }
        });
      })}
    </div>
  );
};

interface IButton {
  prefixes?: string;
}

const Button: FunctionComponent<IButton> = ({
  prefixes,
  children,
  ...props
}) => {
  return (
    <Radio prefixes='radio-button' {...props}>
      {children}
    </Radio>
  );
};

interface IRadio {
  className?: string;
  prefixes?: string;
  name?: string;
  value?: string;
  checked?: boolean;
  disabled?: boolean;
  onChange?: (event: any) => void;
}
const Radio: FunctionComponent<IRadio> & {
  Button: FunctionComponent<IButton>;
  Group: FunctionComponent<IGroup>;
} = ({
  prefixes = 'radio',
  className,
  name,
  value,
  checked,
  disabled,
  children,
  onChange
}) => {
  const classString = classNames(className, {
    [`${prefixes}-wrapper`]: true,
    [`${prefixes}-wrapper-checked`]: checked,
    [`${prefixes}-wrapper-disabled`]: disabled
  });
  return (
    <label className={classString}>
      <span className='radio'>
        <input
          className='radio-input'
          type='radio'
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
        <i className='radio-inner'></i>
      </span>
      <span>{children}</span>
    </label>
  );
};
Radio.Button = Button;
Radio.Group = Group;
export { Button, Group };
export default Radio;
