### Conceptual Exercise

Answer the following questions below:

- What are some ways of managing asynchronous code in JavaScript?

  Async and Await / AJAX

- What is a Promise?

  A promise is a guarantee of a future value. The value is not yet shown, but the information can be extracted.

- What are the differences between an async function and a regular function?

  An async function allows the function to happen out of the direct order of the executing code. It is used with the await keyword to resolve promises and make the code look like it is running sycronusly. 

- What is the difference between Node.js and Express.js

  Node.js is a runtime enviroment that allows for JavaScript to be writen server-side. Express.js is a back-end framework that is used to create server routes.

- What is the error-first callback pattern?

  The error-first callback pattern is the way that Node.js defines the arguments of its functions. When seting the arguments of a function the first argument is the error.

- What is middleware?

  Middleware are functions that are run during every route call or after certian routes if certain conditions are met.

- What does the `next` function do?

  THe next function tells the program to go on to the next avaliable function, unless if the next fuonction has an argument pased into it.Than it counts that as a error and is passed to the error handler function.

- What are some issues with the following code? (consider all aspects: performance, structure, naming, etc)

```js
async function getUsers() {
  const elie = await $.getJSON('https://api.github.com/users/elie');
  const joel = await $.getJSON('https://api.github.com/users/joelburton');
  const matt = await $.getJSON('https://api.github.com/users/mmmaaatttttt');

  return [elie, matt, joel];
}
```
