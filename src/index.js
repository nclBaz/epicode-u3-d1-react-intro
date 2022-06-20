import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import App from "./App"

const root = ReactDOM.createRoot(document.getElementById("root")) // we are selecting the empty div from index.html file
// and we are creating a "root" out of it
root.render(<App />)
// <App /> is a REACT COMPONENT, the first and only that we are going to mount here
