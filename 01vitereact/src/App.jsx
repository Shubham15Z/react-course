import Hello from "./hello"

function App() {

  const username = "myReactApp"

  return (
    <>
    <Hello />
    <h1>This is h1 tag {username}</h1>
    <p>Lorem ipsum dolor sit amet.</p>
    </>
  )
}

export default App
