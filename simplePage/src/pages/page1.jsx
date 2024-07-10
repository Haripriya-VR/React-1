import React from 'react';
import { useStateContext } from './Context';

function Page1() {
  const { toggleButton } = useStateContext();

  return (
    <div>
      <h1>Page 1</h1>
      <button onClick={toggleButton}>Click Me!</button>
    </div>
  );
}

export default Page1;
