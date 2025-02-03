import React, {useState} from 'react';


const Practice = () => {
    const [count, setCount] = useState(0);
    const increment = () => {
        setCount(count+1);
    }

  return (
    <div>
      <h1>Hello, World!</h1>
      <p>you have clicked {count} times</p>
      <button onClick={increment}>click me</button>
      <p>This is a basic React component.</p>
    </div>
  );
};

export default Practice;