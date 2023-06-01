Read the following instructions, and implement them in [Quiz.js](./../src/components/Quiz.js) 

1. Start by creating an event handler function called `goBack()` that allows us to navigate to the previous quiz question. Inside the function, use the state setter function with a callback to update the `questionIndex` state. The callback function should take an argument named `prevQuestionIndex` and compute the next value of `questionIndex` based on the previous value.

2. Add an event listener to the "Go Back" button that triggers the `goBack()` event handler when clicked.

3. Similarly, define an event handler function called `goToNext()` that allows us to navigate to the next quiz question. Inside the function, use the state setter function with a callback to update the `questionIndex` state. The callback function should take an argument named `prevQuestionIndex` and compute the next value of `questionIndex` based on the previous value.

4. Add an event listener to the "Next Question" button that triggers the `goToNext()` event handler when clicked.

5. Finally, create a boolean variable called `onFirstQuestion` to check if the current `questionIndex` is 0, indicating that we are on the first question. Use this variable to toggle the `disabled` attribute of the "Go Back" button. When `onFirstQuestion` is true, the button should be disabled, and when false, it should be enabled.