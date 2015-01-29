###Prototype Basics

WAT THE MATH AM I LOOKING AT:
- Extensions to Javascript's Array.prototype, String.prototype, and Number.prototype.

1 . Array.prototype extensions:

  - __toString__ - This method takes the contents of the Array and returns a string of the contents of that array but checks for functions and nulls and excludes them from the returned value. 

  - __forEach__ - This method takes a function as an argument and calls that function against each element in the Array.

  - __seals__ - This method replaces every element of the invoking array with a seal.

  - __first__ - This method returns the first element (or n specified elements) of the invoking array

  - __max__ - This method returns the maximum value of the invoking array, and This method returns -Infinity if the invoking array is empty.

  - __min__ - This method returns the minimum value of the invoking array, and This method returns Infinity if the invoking array is empty.

  - __intersection__ - This method returns an array of the intersecting elements in all arrays provided as input (including invoking array)

  - __difference__ - This method returns an array excluding all values of the provided arrays using strict equality for comparisons

  - __uniq__ - This method returns an array of the unique values of all arrays provided as input

  - __contains__ - This method returns true if target is present in the invoking array, and false otherwise

2 . String.prototype extensions:

  - __wtf__ - This method returns the value 'wtf' for any given context.

  - __scramble__ - This method returns the contents of the string in the current context in a mixed up order.

  - __trim__ - This method returns the contents of the string with no leading or trailing spaces.

  - __assWord__ - This method returns the word as an ass word. That is all.

3 . Number.prototype extensions:

  - __double__ - This method returns the current `Number` in context but doubled.

  - __tripledouble__ - This method returns the current Number in context but tripled and then doubled.

  - __isDivisibleBy__ - This method must take a number as input and return true/false if the current `Number` in context is evenly divisible by our parameter number.

  - __submultitractivide__ - This method must take a number as input and perform 2 random Math operations to that number between: add, subtract, multiply, and divide.

  - __cubedSquared__ - This method returns the cubed then squared value of the invoking Number.