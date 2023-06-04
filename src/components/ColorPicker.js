// 1. import the default export and the named export `useState` from the 'react' library

export default function ColorPicker() {
  // 2. call useState and assign its return values to `color` and `setColor`

  const divStyle = { backgroundColor: "purple" };

  //3. use onClick event listeners to call the setColor() state setter function with the
  // appropriate color when the user clicks on each of these buttons.

  return (
    <div style={divStyle}>
      <p>The color is {color}</p>
      <button>Aquamarine</button>
      <button>BlueViolet</button>
      <button>Chartreuse</button>
      <button>CornflowerBlue</button>
    </div>
  );
}

//4. Update the divStyle object so that the backgroundColor property is set to our current state value instead of always showing purple.
