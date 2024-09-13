import React from 'react';
import useStore from './store/store';

const Counter = () => {

  const {count,increment,decrement,reset} = useStore();
  return (
    <>
      <h1>{count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </>
  );
}

export default Counter;
