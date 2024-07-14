import React from 'react';
import Counter from './Counter';
import TodoList from './TodoList';
import MyClassComponent from './MyClassComponent';
import Images from './Images';
import UserList from './UserList';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      {/* <Counter />
      <TodoList /> */}
      {/* <MyClassComponent /> */}
      {/* <Images /> */}
      <UserList />
    </div>
  );
};
