import React from 'react';

import './List.less';

const Item = ({ children, onClick }) => {
  return (
    <div className='list-item' onClick={onClick}>
      {children}
    </div>
  );
};

const Label = ({ children }) => {
  return <div className='list-label'>{children}</div>;
};

const Header = ({ children }) => {
  return <div className='list-header'>{children}</div>;
};
const Note = ({ children }) => {
  return <div className='list-note'>{children}</div>;
};

const List = ({ children }) => {
  return <div className='list'>{children}</div>;
};
List.Item = Item;
List.Label = Label;
List.Header = Header;
List.Note = Note;

export default List;
