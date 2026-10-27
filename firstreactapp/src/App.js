import React from 'react';
import Child from './ChildComponent';

function Parent() {

  return (
    <div>
      <Child name="Rohan" />
      <Child name="Advitha" />
      <Child name="Jane" />
    </div>
  );
}

export default Parent;