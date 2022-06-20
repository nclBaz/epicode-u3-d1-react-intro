// *********************** FUNCTIONAL COMPONENT aka "dumber component" ********************************************************

// The function receives PROPS as argument, Props are ALWAYS an object like this {name: "Marios", textColor: "red"}
// In JS we could use destructuring to get the properties out of an object --> const {name, textColor} = props, in this way you gonna obtain two constants named name and textColor. It is just a shorter way than doing this:
// const name = props.name
// const textColor = props.textColor

const Welcome = ({ name, textColor }) => {
  return (
    <div>
      <h3>Hello {name}!</h3>
      <h4 style={{ color: textColor }}>Nice to see you :)</h4>
    </div>
  )
}

// If you need to export only one thing you shall use export default
// If you want to export more than one component/function/something/whatever you can use the export keyword before the thing you want to export

// export const Welcome = () => {
//   return (
//     <div>
//       <h3>Hello {name}!</h3>
//       <h4>Nice to see you :)</h4>
//     </div>
//   )
// }

// export const Welcome2 = () => {
//   return <div></div>
// }

export default Welcome
