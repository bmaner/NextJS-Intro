// import { useState } from 'react';

import NavBar from '../components/NavBar';

export default function Home() {
  //   const [counter, setCounter] = useState(0);
  return (
    <div>
      <NavBar />
      <h1>Hello! World!</h1>
      {/* <h1>Hello World!{counter}</h1> */}
      {/* <button onClick={() => setCounter(counter => counter + 1)}>+</button> */}
    </div>
  );
}
