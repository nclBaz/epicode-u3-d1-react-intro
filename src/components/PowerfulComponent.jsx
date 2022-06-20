// ********************************************** CLASS COMPONENT aka "smarter component" *******************************************

// a class is just like a sort of a factory or a blueprint to create objects (in this case components)
// each one of the produced entities it's called an INSTANCE

import { Component } from "react"
// Component is imported from the react module. It is the main Class Component that exists!

// Imagine a Class for Humans
// Every instance of that class has some attributes: name, height, dateOfBirth, .....
// If I want to create a Class for WebDevelopers, well they are still humans right?
// What I can do is --> extend Humans Class, adding on top other attributes like skills, prefferedLibraries

class PowerfulComponent extends Component {
  // I am extending the class Component which has a lot of superpowers that we gonna discover in the next days

  render() {
    // this has to be called exactly "render"
    console.log("THIS: ", this)
    console.log("PROPS: ", this.props)

    return <h1 style={{ color: this.props.textColor }}> Hello {this.props.title}! I am a CLASS COMPONENT!</h1>
  }
}

export default PowerfulComponent

// in a FUNCTIONAL COMPONENT you gonna find the props in the arguments of the function
// in a CLASS COMPONENT you gonna find them by using "this.props"
