const name = "Marios"

const Welcome = () => {
  return (
    <div>
      <h3>Hello {name}!</h3>
      <h4>Nice to see you :)</h4>
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
