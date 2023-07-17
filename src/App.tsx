import ListGroup from "./components/ListGroup"

function App() {
  let items = ["New York", "San Francisco", "Delhi", "Mumbai"]
  return (
    <div>
      <ListGroup heading='Cities' items={items} />
    </div>
  )
}

export default App
