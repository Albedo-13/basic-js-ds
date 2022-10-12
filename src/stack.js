const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
 class Stack {
  constructor() {
      this.array = [];
  }

  push(value) {
      this.array[this.array.length] = value;
  }

  pop() {
      const topElem = this.array[this.array.length - 1];
      if (this.array.length === 0) {
          return undefined;
      }
      --this.array.length;
      return topElem;
  }

  peek() {
      return this.array[this.array.length - 1];
  }
}

module.exports = {
  Stack
};
