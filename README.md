# React Hooks

## Objectives:

- Build a “stateful” function component.
- Use the State Hook.
- Initialize a state and set a state.
- Define event handlers.
- Use state setter callback functions.
- Use state with arrays and objects.

## Why Use Hooks?

If we want to add state to our function component or make our app respond to changes in data, what should we do?

In this lesson, we'll explore React Hooks and how they empower us to effectively use function components.

React Hooks are simply functions that allow us to manage the internal state of components and handle side effects after rendering directly from our function components. With Hooks, we can determine what we want to display to users by declaring how our user interface should look based on the state.

React provides several built-in Hooks, including `useState()`, `useEffect()`, `useContext()`, `useReducer()`, and `useRef()`. You can find the complete list in the React documentation.

React Hooks provide a more intuitive and straightforward approach to building React applications. They promote code reuse, reduce complexity, and make your components more modular. By mastering Hooks, you'll be equipped to build powerful and efficient React applications.

## The State Hook

Before we begin, Open the [Counter.js](./src/components/Counter.js) file. We will learn how this code works in the next few exercises. Don’t worry about the details of what is going on here just yet, but take a few moments to read through the definition of this function component and develop some _wild_ theories about what this code may be doing.

Run `nmp start` to see how the code behaves!

Let's dive into using the State Hook, which is the most commonly used Hook for building React components. The State Hook is a named export from the React library, so we import it using object destructuring like this:

```jsx
import React, { useState } from "react";
```

When we call the `useState()` function, it returns an array with two values:

1. The current state: The current value of this state.
2. The state setter: A function that we can use to update the value of this state.

We can use these two values to track the current state of a data value or property and change it when needed. To extract the values from the array, we can assign them to local variables using array destructuring. For example:

```jsx
const [currentState, setCurrentState] = useState();
```

Let's take a look at another example of a function component that uses the State Hook:

```jsx
import React, { useState } from "react";

function LikeButton() {
  const [likes, setLikes] = useState(0);

  const handleLike = () => {
    setLikes(likes + 1);
  };

  return (
    <div>
      <p>
        This post has {likes} {likes === 1 ? "like" : "likes"}
      </p>
      <button onClick={handleLike}>Like</button>
    </div>
  );
}
```

In this example, we have a `LikeButton` component that keeps track of the number of likes for a post. The initial state is set to `0` using `useState(0)`.

The `handleLike` function is called when the "Like" button is clicked. It uses the state setter function `setLikes` to increment the number of likes by 1.

The component renders a paragraph displaying the current number of likes, along with proper pluralization of the word "like" based on the count. The button allows users to increment the likes by clicking it.

With each click, the state is updated, triggering a re-render to reflect the updated number of likes on the screen.

```jsx
import React, { useState } from "react";

function Toggle() {
  const [toggle, setToggle] = useState();

  return (
    <div>
      <p>The toggle is {toggle}</p>
      <button onClick={() => setToggle("On")}>On</button>
      <button onClick={() => setToggle("Off")}>Off</button>
    </div>
  );
}
```

Notice how the state setter function, `setToggle()`, is called by our `onClick` event listeners. To update the value of `toggle` and re-render this component with the new value, we simply call the `setToggle()` function with the next state value as an argument.

With the State Hook, updating the state is as simple as calling a state setter function. Calling the state setter signals to React that the component needs to re-render, so the entire function defining the component is executed again. The magic of `useState`

### Exercises

Open [ColorPicker.js](./src/components/ColorPicker.js) and follow instructions 1-4.

## Initialize State

Let's take a look at the `ToggleLoading()` function component provided. What data type does the state variable hold in this example?

```jsx
import React, { useState } from "react";

function ToggleLoading() {
  const [isLoading, setIsLoading] = useState();

  return (
    <div>
      <p>The data is {isLoading ? "Loading" : "Not Loading"}</p>
      <button onClick={() => setIsLoading(true)}>Turn Loading On</button>
      <button onClick={() => setIsLoading(false)}>Turn Loading Off</button>
    </div>
  );
}
```

In this case, the state variable `isLoading` holds a boolean value. Booleans are commonly used in React applications to represent whether data is currently loading or not. The `true` and `false` values are passed to the state setter function `setIsLoading()`.

The code functions correctly as is, but let's say we want our component to start with `isLoading` set to `true`.

To initialize our state with a specific value, we can simply pass that initial value as an argument to the `useState()` function call:

```jsx
const [isLoading, setIsLoading] = useState(true);
```

This change affects our component in three ways:

1. During the first render, the initial state argument (`true`) is used.
2. When the state setter is called (`setIsLoading()`), React ignores the initial state argument and uses the new value provided (`true` or `false`).
3. When the component re-renders for any other reason, React continues to use the same value from the previous render.

If we don't provide an initial value when calling `useState()`, the current value of the state during the first render will be `undefined`. While this may work for the computer executing the code, it can be less clear for humans reading the code. It's preferable to explicitly initialize our state. If we don't have the necessary value during the first render, we can explicitly pass `null` instead of leaving the value undefined.

### Exercises

1. Open [colorPickerModification.md](./exercises/colorPickerModification.md) and follow the instructions.
2. In the modified [ColorPicker()](./src/components/ColorPicker.js) component, initialize the state so that “Tomato” is the selected color for our component’s first render.

## Use State Setter Outside of JSX
Let's take a look at the example code that demonstrates managing the changing value of a string as a user types into a text input field:

```jsx
import React, { useState } from 'react';

export default function EmailTextInput() {
  const [email, setEmail] = useState('');

  const handleChange = ({ target }) => setEmail(target.value);

  return (
    <input value={email} onChange={handleChange} />
  );
}
```

Here's how the code works:

- We use array destructuring to create our local state variable `email` and the setter function `setEmail()`.
- The `email` variable is assigned the current state value at index 0 from the array returned by `useState()`.
- The `setEmail()` function is assigned a reference to the state setter function at index 1 from the array returned by `useState()`.
- In our JSX, the `<input>` tag has an `onChange` event listener. This event listener triggers the `handleChange` function whenever the user types something in the input field.
- The `handleChange` function extracts the new email value from the `event.target.value` and calls `setEmail()` to update the state with the new value.

In the provided code, the event handler (`handleChange`) is defined outside of the JSX, following the practice of separating logic from the JSX for better code organization and maintainability.

You may notice different versions of the `handleChange` function in React code. In this example, we used the most concise version:

```jsx
const handleChange = ({ target }) => setEmail(target.value);
```

This version uses object destructuring to directly extract the `target.value` from the event object and pass it as the new email value to `setEmail()`. It's a matter of preference and readability to choose between the different variations, but all of them functionally achieve the same result.

### Exercises

Open [PhoneNumber.js](./src/components/PhoneNumber.js) and follow instructions 1-3.


## Previous State

In React, state updates are asynchronous, which means that there can be scenarios where portions of your code run before the state is finished updating. To handle this, it's best practice to update state using a callback function to ensure you're working with the most up-to-date state values.

Let's take a look at the following code example:

```jsx
import React, { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(prevCount => prevCount + 1);

  return (
    <div>
      <p>Wow, you've clicked that button: {count} times</p>
      <button onClick={increment}>Click here!</button>
    </div>
  );
}
```

In this code, we have a `count` state variable initialized to 0 using the `useState` hook. The `increment` function is called when the button is clicked, and it updates the state using the `setCount` state setter with a callback function.

By using the callback function `(prevCount => prevCount + 1)` as the argument for `setCount`, we ensure that the next value of `count` depends on the previous value of `count`. The callback function receives the previous count as an argument (`prevCount`) and returns the next value by incrementing the previous count by 1 (`prevCount + 1`).

Using this approach ensures that we're working with the most up-to-date value of `count` and helps prevent accidental outdated values. Although in this specific example, `setCount(count + 1)` would work the same, using the callback method is considered safer and more reliable in scenarios where state updates are based on the previous state value.

## Arrays in State

