1.

We're going to use objects with states to create a form for users to input information. The "profile" variable and "setProfile" function will help us keep track of the user's input. However, when we try to access properties from the "profile" object in our code, an error occurs because the object is not defined yet. To solve this, let's start by initializing "profile" as an empty object.

2.

Now, you should see the form displayed, but nothing happens when you type in the input boxes. This is because the form doesn't update to show the text you're typing. To fix this, we need to add an "onChange" event listener to the input tags in our code. This listener will call the "handleChange()" function whenever you type something in the form, so we can handle the changes you make.

3.

Let's make the "handleChange()" function easier to understand. We can use object destructuring to simplify the way we initialize the "name" and "value" variables.

4.

There's a mistake in our code! Have you noticed it? Try typing in one input and then switch to a different input. What happens? We lose the values that were previously entered. To fix this bug, we can use the spread operator. Whenever we call the state setter function, we want to copy all the values from the previous "profile" object. We can do this by using the previous "profile" as an argument in the state setter callback function.

5.

Lastly, let's add an `onSubmit` event listener to the `<form>` tag. This listener will call our "handleSubmit()" function when you submit the form.
