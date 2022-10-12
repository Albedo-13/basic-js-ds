const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.head = new ListNode();
  }

  getUnderlyingList() {
    return this.head;
  }

  enqueue(value) {
    if (!this.head.value) {
        this.head.value = value;
        return;
    }

    let current = this.head;
    while (current.value) {
        if (!current.next) {
            current.next = new ListNode();
            current.next.value = value;
            return;
        }

        current = current.next;
    }

}

  dequeue() {
    const first = this.head.value;
    this.head = this.head.next;
    return first;
}
}

module.exports = {
  Queue
};
