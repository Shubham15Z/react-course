import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 
  // let counter = 10;
  let [counter, setCounter]  = useState(10);

  const addValue = () => {
    // counter = counter + 1;
    console.log("Value Added", Math.random(), counter);
    if(counter < 20){
      setCounter(previousCounter => previousCounter + 1)
    }
    
  }

  const decreaseValue = () => {
    if(counter > 0){
      setCounter(previousCounter => previousCounter - 1);
    }
    
  }

  return (
    <>
      <h1>Hello React</h1>
      <h2>Counter Value: {counter}</h2>
      <button onClick={addValue}>Add Value</button><br/>
      <button onClick={decreaseValue}>Decrease Value</button>
    </>
  )
}

export default App
