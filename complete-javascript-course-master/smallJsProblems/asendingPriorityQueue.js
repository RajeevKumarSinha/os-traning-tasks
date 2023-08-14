"use strict";

const { linkedList } = require("./doublyLinkedList");

const queue = function () {
  const ll = linkedList();
  return {
    enQueue(value, position = null) {
      if (position !== null) {
        ll.insertAtIndex(value, position);
      } else {
        ll.insertAtFront(value);
      }
    },
    deQueue() {
      return ll.pop();
    },
    viewQueue() {
      return ll.travelFromTail();
    },
  };
};

const qu = queue();
qu.enQueue(1); //insert
qu.enQueue(2);
qu.enQueue(3);
qu.enQueue(4);
qu.enQueue(5); //[5,4,3,2,1]
qu.enQueue(10, -1); //[]
qu.enQueue(55, 1); //[5,4,3,2,55,1]
qu.enQueue(50, 1); //[5,4,3,2,55,50,1]
qu.viewQueue(); //[5,4,3,2,55,50,1]
console.log("separator");
console.log(qu.deQueue());
console.log(qu.deQueue());
console.log(qu.deQueue(), "separator");
qu.viewQueue();
qu.enQueue(5, 0);
qu.viewQueue();
