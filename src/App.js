import React from "react";
import Counter from "./components/Counter";
// import ColorPicker from "./components/ColorPicker";
// import PhoneNumber from './components/PhoneNumber'
// import Quiz from './components/Quiz'
// import {questions} from './store/questions'
// import GroceryShopping from "./components/GroceryShopping";
// import EditProfile from "./components/EditProfile";
import Musical from "./components/Musical";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Counter />
      {/* <ColorPicker /> */}
      {/* <PhoneNumber/>  */}
      {/* <Quiz questions={questions} /> */}
      {/* <GroceryShopping /> */}
      {/* <EditProfile /> */}
      <Musical />
    </div>
  );
}

export default App;
