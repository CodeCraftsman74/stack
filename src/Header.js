import React from 'react';

const Header = () => {
  const headerStyle = {
    backgroundColor: 'green',
    color: 'white',
    textAlign: 'center',
    padding: '20px',
  };

  return (
    <header style={headerStyle}>
      <h1>To Do List</h1>
    </header>
  );
};

export default Header;