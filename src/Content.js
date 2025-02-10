import React, { useState } from 'react';

const Content = () => {
  // Inline styles for the content
  const contentStyle = {
    backgroundColor: 'lightgray',
    color: 'black',
    textAlign: 'center',
    padding: '20px',
    margin: '20px auto',
    borderRadius: '10px',
    width: '80%',
  };

  // Function to generate a random name
  const NameChange = () => {
    const names = ['Earn', 'Invest', 'Grow', 'Give'];
    const value = Math.floor(Math.random() * 4);
    return names[value];
  };

  // State for the counter
  const [count, setCount] = useState(99);

  // Function to increment the counter
  const incrementFunction = () => {
    setCount((count) => count + 1);
  };

  // Function to decrement the counter
  const decrementFunction = () => {
    setCount((count) => count - 1);
  };

  return (
    <div style={contentStyle}>
      {/* Randomly changing message */}
      <p>Let's {NameChange()} Money</p>

      {/* Counter section */}
      <div>
        <button onClick={decrementFunction}>-</button>
        <span style={{ margin: '0 10px', fontSize: '18px' }}>{count}</span>
        <button onClick={incrementFunction}>+</button>
      </div>
    </div>
  );
};

export default Content;