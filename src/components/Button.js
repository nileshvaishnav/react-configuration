import { useState } from 'react';

const Button = () => {
  const a = 10;
  const test = useState(a)[0];
  return <div>Button {test}</div>;
};

export default Button;
