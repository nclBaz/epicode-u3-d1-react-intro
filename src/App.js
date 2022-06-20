import logo from "./logo.svg"
import "./App.css"
import Welcome from "./components/Welcome"
import PowerfulComponent from "./components/PowerfulComponent"

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <PowerfulComponent title="EPICODE" textColor="yellow" />
        <PowerfulComponent title="WORLD" textColor="white" />
        {/* <h2>Here it is my first component (twice): </h2>
        <FirstComponent />
        <FirstComponent /> */}
        <Welcome name="Marios" textColor="red" />
        <Welcome name="Riccardo" textColor="blue" />
        <Welcome name="Harika" textColor="green" />
        {/* <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a> */}
      </header>
    </div>
  )
}

export default App
