import React from 'react';
import { useStateContext } from './Context';

function Page2() {
  const { buttonClicked } = useStateContext();

  return (
    <div>
      <h1>Page 2</h1>
      <p>The button on Page 1 is {buttonClicked ? 'clicked' : 'not clicked'}</p>
    </div>
  );
}

export default Page2;
