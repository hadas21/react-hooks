import React from 'react'
import Counter from "./components/Counter";
// import ColorPicker from "./components/ColorPicker";
// import PhoneNumber from './components/PhoneNumber'
// import Quiz from './components/Quiz'
// import {questions} from './data/questions'
import "./App.css";


function App() {
  return (
		<div className='App'>
			<Counter />
			{/* <ColorPicker /> */}
			{/* <PhoneNumber/>  */}
			{/* <Quiz questions={questions} /> */}
		</div>
	)
}

export default App;
