import './App.css';
import Clock from './Clock'
import { useCallback, useEffect, useMemo, useState } from 'react';
function App() {
  const [count, setCount] = useState(100);

  const increase = () => {
    setCount(count + 1)
  }

  const decrease = () => {
    setCount(count - 1)
  }

  const fnc =
    (name) => {
      console.log("My name is ", name)
    }

  useEffect(() => {
    console.log('hello');
  }, [])

  return (
    <div className="App">
      <button onClick={() => decrease()}>Giảm - </button>
      <button onClick={() => increase()} >Tăng + </button>
      <br></br>
      <p>{count}</p>
      <Clock name="Linh" fnc={fnc} />
    </div>
  );
}

export default App;
