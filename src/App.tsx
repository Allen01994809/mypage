import './App.css'
import P5Component from './components/utils/P5Component'
import exampleSketch from './sketchs/example'

function App() {
  return (
    <div className="App">
      <P5Component sketch={exampleSketch} />
    </div>
  )
}

export default App
