const { NotImplementedError } = require('../extensions/index.js');

//const { ListNode } = require('../extensions/l-nodeNew.js');

/**
 * Implement the Queue with a given interface via linked l (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */


class ListNode {
  constructor(i) {
    this.value = i;
    this.next = null;
  }
}
class Queue {
  constructor() {
    this.l = null;
  }

  getUnderlyingList() {
    return this.l;
  }

  enqueue(value) {
    let node = new ListNode(value);

    if (this.l === null) {
      this.l = node;
      return this.l;
    };

    this.c = this.l;
    do {
      if (this.c.next === null) {
        this.c.next = node;
        break;
      } else {
        this.c = this.c.next;
      };
    } while (true);

    return this.l;
  }

  dequeue() {
    if (this.l === null) return this.l;

    if (this.l.next === null) {
      this.head = this.l.value;
      this.l = null;
      return this.head;
    };

    this.head = this.l.value;
    this.l = this.l.next;

    return this.head;
  }
}
module.exports = {
  Queue
};