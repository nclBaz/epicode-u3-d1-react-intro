import logo from "./logo.svg"
import "./App.css"
import FirstComponent from "./components/FirstComponent"
import Welcome from "./components/Welcome"

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {/* <h2>Here it is my first component (twice): </h2>
        <FirstComponent />
        <FirstComponent /> */}
        <Welcome />
        <Welcome />
        {/* <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a> */}
      </header>
    </div>
  )
}

export default App
