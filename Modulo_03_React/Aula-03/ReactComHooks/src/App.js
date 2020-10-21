import React, { useEffect, useState } from 'react';
import { getNewTimestamp } from './helpers/dateTimeHelpers';

export default function App() {
  const [clickArray, setClickArray] = useState([]);

  useEffect(() => {
    if (clickArray.length > 0) document.title = clickArray.length;
  });

  const handleClick = (e) => {
    const newClickArray = Object.assign([], clickArray);
    newClickArray.push(getNewTimestamp());

    setClickArray(newClickArray);
  };

  return (
    <div>
      <h1>React com hooks</h1>

      <button onClick={handleClick}>Clique aqui</button>
      <ul>
        {clickArray.map((item) => {
          return <li key={item}>{item}</li>;
        })}
      </ul>
    </div>
  );
}