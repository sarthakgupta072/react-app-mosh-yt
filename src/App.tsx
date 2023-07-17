import ListGroup from "./components/ListGroup"

function App() {
  let items = ["New York", "San Francisco", "Delhi", "Mumbai"]
  const handleSelectItem = (item: string) => {
    console.log("hey", item)
  }
  return (
    <div>
      <ListGroup
        heading='Cities'
        items={items}
        onSelectItem={handleSelectItem}
      />
    </div>
  )
}

export default App
