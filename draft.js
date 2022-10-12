// Draft to test custom test cases

class ListNode {
    constructor(x) {
        this.value = x;
        this.next = null;
    }
}

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

const queue = new Queue();
queue.enqueue(5);
queue.enqueue(6);
queue.enqueue(7);
console.log(queue.head);
// console.log(queue.dequeue()); // 5
// console.log(queue.dequeue()); // 6