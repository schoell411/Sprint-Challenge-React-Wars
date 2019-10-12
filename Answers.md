# Answers

1. What is React JS and what problems does it try and solve? Support your answer with concepts introduced in class and from your personal research on the web.

React JS is a UI framework that attempts to solve the problem of the webpage keeping up with data changing rapidly. React allows the page to adapt to the changing data using the state concept of data. Data can change the state of an element, without reloading the entire page, producing different outcomes based on the state of the element. This allows the developer to produce a page that is fast, simple, and scalable, without being hindered by a large number of different events or changes in data.

2. What does it mean to think in react?

Thinking in react involves breaking down the desired UI into the different components that make it up. Doing this allows a large number of elements to make up a webpage, without becoming a massive file. Breaking your code down into different components, and then rendering each component where you need it, allows you to efficiently debug, style, code, and change your components. 

3. Describe state.

State involves changing an element based on current conditions. With state, you are able to add interactivity to your elements, based on desired changes in data.

4. Describe props.

Props are the properties or parameters that are used to customize different elements when they are created.

5. What are side effects, and how do you sync effects in a React component to state or prop changes?

Side effects occur when something is affected outside of the scope of the function being executed. This includes anything that is changed besides the express return or intended calculation of the function. We can sync effects in a React component to state or prop changes by using the useEffect method. With the useEffect method, we can take the changes in props and use them to set the state, and in turn change an element based on the change in state.
