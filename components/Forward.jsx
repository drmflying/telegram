import React, { useState } from 'react';
import classNames from 'classnames';
import Button from 'components/Button';
import Input from 'components/Input';
import Icon from 'components/Icon';
import './Forward.less';

export default function Forward({ className, socket }) {
  const [value, setValue] = useState('');
  const classString = classNames(
    {
      forward: true
    },
    className
  );
  const handleInputPressEnter = () => {
    if (value === '') {
      return false;
    }
    socket.emit('chat', value);
    setValue('');
  };
  return (
    <div className={classString}>
      <Button>
        <Icon type='tianjia' />
      </Button>
      <Input
        placeholder='Message'
        value={value}
        suffix={
          <Button>
            <Icon type='xiaolian' />
          </Button>
        }
        onChange={e => setValue(e.target.value)}
        onPressEnter={handleInputPressEnter}
      ></Input>
      <Button>
        <Icon type='maikefeng' />
      </Button>
      <Button>
        <Icon type='xiangji' />
      </Button>
      <Button>
        <Icon type='liebiao' />
      </Button>
    </div>
  );
}
