###Prototype Basics

Things to keep in mind:
- this/context

Setup a project locally and create your own git repository called `prototype-basics` with the following requirements:
  * Project must be setup to be testable with Mocha/Chai to have unit tests written
  * Three JavaScript files will be written that must both be testable: `array_extensions.js` & `string_extensions.js` & `number_extensions.js`
  * You must set up your `index.html` file to load all needed files and run your tests
  * Generate a README.md to document what your project does and how to use it. Ok to use the contents of this file and edit appropriately.

1 . Write a series of functions on the `Array.prototype` that implement the following functionality.

  - __toString__ - This method must take the contents of the Array and return a string of the contents of that array but should check for functions and null and exclude them from the returned value. 

  - __forEach__ - This method must take a function as an argument and call that function against each element in the Array.

  - __EXTRA__ - Take your array functions that you wrote in ArrayFun and add them to the `Array.prototype`.

2 . Write a series of functions on the `String.prototype` that implement the following functionality. 

  - __wtf__ - This method must return the value 'wtf' for any given context.

  - __scramble__ - This method must return the contents of the string in the current context in a mixed up order.

  - __trim__ - This method must return the contents of the string with no leading or trailing spaces.

3 . Write a series of functions on the 'Number.prototype' that implement the following functionality.

  - __double__ - This method must return the current `Number` in context but doubled.

  - __tripledouble__ - This method must return the current Number in context but tripled and then doubled.

  - __isDivisibleBy__ - This method must take a number as input and return true/false if the current `Number` in context is evenly divisible by our parameter number.

  - __submultitractivide__ - This method must take a number as input and perform 2 random Math operations to that number between: add, subtract, multiply, and divide.

4 . EXPLORE!! WRITE 3 OF YOUR OWN PROTOTYPE FUNCTIONS THAT ARE TESTABLE AND FUNCTIONAL. ALSO, CHALLENGE YOURSELF. DON'T DO SOMETHING TO JUST GET IT DONE.