"use strict";

const linkedList = function () {
  let head = null;
  let tail = null;
  let length = 0;
  const Node = function (data) {
    length++;
    return { data, prev: null, next: null };
  };

  return {
    insertAtFront(value) {
      const node = Node(value);
      if (head === null) {
        head = node;
        tail = node;
      } else {
        head.prev = node;
        let temp = head;
        head = node;
        head.next = temp;
      }
    },
    peekHead() {
      return head;
    },
    peekTail() {
      return tail;
    },
    travelFromHead() {
      let curr = head;
      while (curr !== null) {
        console.log(curr.data);
        curr = curr.next;
      }
    },
    travelFromTail() {
      let curr = tail;
      while (curr !== null) {
        console.log(curr.data);
        curr = curr.prev;
      }
    },
    insertAtIndex(data, position) {
      if (position > length || position < 0) {
        console.error("Invalid Position");
        return;
      } else {
        const node = Node(data);
        let curr = tail;
        if (position !== 0) {
          for (let i = 0; i < position - 1; i++) {
            curr = curr.prev;
          }
          // console.log(curr.data);
          let temp = curr.prev;
          node.prev = temp;
          curr.prev = node;
          node.next = curr;
          temp.next = node;
        } else {
          node.prev = tail;
          tail = node;
        }
      }
    },
    size() {
      return length;
    },
    pop() {
      //remove from tail;
      const popped = tail.data;
      tail = tail.prev;
      length--;
      return popped;
    },
  };
};

// module.exports = { linkedList };

const ll = linkedList();
ll.insertAtFront("Om");
ll.insertAtFront("Han");
ll.insertAtFront("Hanumate");
// ll.travelFromHead();
// ll.travelFromTail();
console.log(ll.size());
ll.insertAtIndex("x", 1);
console.log(ll.size());
// ll.travelFromHead();
// ll.pop();
console.log(ll.size());
ll.travelFromTail();
console.log(ll.peekTail());
