import React, { useState, useEffect } from 'react';

function App() {
  const [count, setCount] = useState(2)
  
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count+1)}>Click</button>
    </div>
  )
}

export default App;
