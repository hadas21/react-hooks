Let's look at the Musical component. It currently has a big state object, but we want to make it easier to read and use in other parts of our code. To do that, we'll split the state object into three separate variables: title, actors, and locations.

1.

In the [Musical](../src/components/Musical.js) component, we'll start by creating a state variable, a state setter function, and an initial value for the `title` data. Remember to follow the usual naming convention for state setters.

2.

Next, we'll do the same for the `actors` data. We'll create a separate state variable, a state setter function, and an initial value for the actors.

3.

Now, we'll take care of the `locations` data. We'll create a separate state variable, a state setter function, and an initial value for the locations.

4.

Add a return statement with jsx element to render the data.
