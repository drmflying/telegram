import React, { MouseEventHandler, FunctionComponent } from 'react';

import './List.less';

interface IItem {
  className?: string;
  onClick?: MouseEventHandler;
}
const Item: FunctionComponent<IItem> = ({ children, onClick }) => {
  return (
    <div className='list-item' onClick={onClick}>
      {children}
    </div>
  );
};

interface ILabel {
  className?: string;
}
const Label: FunctionComponent<ILabel> = ({ children }) => {
  return <div className='list-label'>{children}</div>;
};

interface IHeader {
  className?: string;
}
const Header: FunctionComponent<IHeader> = ({ children }) => {
  return <div className='list-header'>{children}</div>;
};

interface INote {
  className?: string;
}
const Note: FunctionComponent<INote> = ({ children }) => {
  return <div className='list-note'>{children}</div>;
};

interface IList {
  className?: string;
}
const List: FunctionComponent<IList> & {
  Item: FunctionComponent<IItem>;
  Label: FunctionComponent<ILabel>;
  Header: FunctionComponent<IHeader>;
  Note: FunctionComponent<INote>;
} = ({ children }) => {
  return <div className='list'>{children}</div>;
};

List.Item = Item;
List.Label = Label;
List.Header = Header;
List.Note = Note;

export default List;
