import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  let myObj = {
    name: "Rahul",
    age: 23
  } 

  let newArr = [1, 2, 3]
 

  return (
    <>
      <h1 className='bg-green-800 text-black p-4 rounded-xl'>Tailwind Test</h1>
      <Card username="my channel" someObj = {newArr} />
      <Card username="Ajit" someObj = {newArr} />
    </>
  )
}

export default App
