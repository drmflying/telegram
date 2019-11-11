import React, {
  ChangeEvent,
  FocusEvent,
  KeyboardEvent,
  FunctionComponent,
  useState,
  ReactNode
} from 'react';
import classNames from 'classnames';
import './Input.less';

interface IInput {
  className?: string;
  value?: string;
  defaultValue?: string;
  placeholder?: string;
  prefixes?: string;
  type?: string;
  size?: string;
  disabled?: boolean;
  autoFocus?: boolean;
  suffix?: ReactNode;
  prefix?: ReactNode;
  onBlur?: (event: FocusEvent<HTMLInputElement>) => void;
  onFocus?: (event: FocusEvent<HTMLInputElement>) => void;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  onPressEnter?: (event: KeyboardEvent<HTMLInputElement>) => void;
}
const Input: FunctionComponent<IInput> = ({
  className,
  value,
  prefixes = 'input',
  type = 'text',
  size = 'default',
  disabled,
  autoFocus,
  suffix,
  prefix,
  placeholder,
  onBlur,
  onFocus,
  onChange,
  onPressEnter
}) => {
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
        onBlur={event => {
          setFocus(false);
          onBlur && onBlur(event);
        }}
        onFocus={event => {
          setFocus(true);
          onFocus && onFocus(event);
        }}
        onChange={onChange}
        onKeyPress={event => {
          if (event.key === 'Enter') {
            onPressEnter && onPressEnter(event);
          }
        }}
        placeholder={placeholder}
      />
      <span className='input-suffix'>{suffix}</span>
    </label>
  );
};
export default Input;
