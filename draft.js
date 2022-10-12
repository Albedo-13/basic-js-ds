// Draft to test custom test cases

class ListNode {
    constructor(x) {
        this.value = x;
        this.next = null;
    }
}

function convertArrayToList(arr) {
    return arr.reverse().reduce((acc, cur) => {
        if (acc) {
            const node = new ListNode(cur);
            node.next = acc;
            return node;
        }

        return new ListNode(cur);
    }, null);
}


function removeKFromList(l, k) {
    let head = l;
    if (l.value === k) {
        l = l.next;
        head = l;
        return removeKFromList(l, k);
    }

    let current = l;
    while (current.next) {
        if (current.next.value === k) {
            current.next = current.next.next;
        }
        current = current.next;
    }

    return head;

    // let firstNode = new ListNode(firstNonKValue);
    // let currentNode = firstNode;

    // // console.log(firstNonKValue, firstNonKValueIndex);
    // for (let i = firstNonKValueIndex + 1; i < l.length; i++) {
    //     if (l[i] === k) {
    //         continue;
    //     }
    //     currentNode.next = new ListNode(l[i]);
    //     currentNode = currentNode.next;
    // }
    // return firstNode;
}

console.log(removeKFromList(convertArrayToList([3, 1, 2, 3, 4, 5]), 3));


