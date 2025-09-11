import { useState } from 'react';
import './App.css'

function App() {

  const [counter, setCounter] =useState(0);

  // let counter = 0;

  

  const addValue = () => {
    // counter = counter + 1;
    if(counter >= 10){
      alert("Counter value cannot be more than 10");
    } else{
      setCounter(counter + 1);
      console.log(counter);
    }
  }

  function decreaseValue() {
    if(counter <= 0){
      alert("Counter value cannot be less than 0");
    } else
        setCounter(counter - 1);
  }

  return (
    <>
        <h1>Counter App</h1>
        <h2>Counter Value : {counter}</h2>

        <button onClick={addValue}>Increase Value : {counter}</button>
        <br />
        <br />
        <button onClick={decreaseValue}>Decrease Value : {counter}</button>
    </>
  )
}

export default App
