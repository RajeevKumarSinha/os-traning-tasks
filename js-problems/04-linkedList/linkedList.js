"use strict";
// linked list
// start
// node
// add node in the beginnign
// add node at position
// add node at the end
// function linkedLL() {
//   let head = null;

//   class Node {
//     constructor(data, next) {
//       this.data = data;
//       this.next = null;
//     }
//   }

//   // add at the beginning of a node
//   // set start  = node & node.next = start

//   this.front = function (data) {
//     let node = new Node(data);
//     node.next = head;
//     head = node;
//     // console.log(head);
//   };

//   // add at given position
//   // check if previous node is null then return;
//   // else set new node.next = prevNode.next & prevNode.next = node;

//   this.insertAt = function (prevNode, newData) {
//     if (prevNode === null) {
//       console.log("Previous node cannot be null");
//       return;
//     }
//     let node = new Node(newData);
//     node.next = prevNode.next;
//     prevNode.next = node;
//     // console.log(head);
//   };

//   // add at last position
//   // check if head is null then create a new node and set head = node ;
//   // else find the last node and set lastNode's next to new node;
//   this.insertAtLast = function (newData) {
//     let node = new Node(newData);
//     if (head === null) {
//       head = node;
//     }
//     let last = head;
//     while (last.next !== null) {
//       console.log(last);
//       last = last.next;
//     }
//     last.next = node;
//   };
//   // console.log(head);
// }

// const ll = new linkedLL();
// ll.front(100);
// ll.front(200);
// ll.insertAtLast(300);
// ll.insertAtLast(300);
// ll.insertAtLast(300);

const linkedList = function () {
  let head = null;
  let lLength = 0;
  const Node = function (data, next = null) {
    return { data, next };
  };
  return {
    insertAtFront: function (data) {
      const node = Node(data);
      if (head === null) {
        head = node;
        lLength++;
      } else {
        node.next = head;
        head = node;
        lLength++;
      }
    },
    removeFromFront: function () {
      if (head !== null) {
        const temp = head.data;
        head = head.next;
        --lLength;
        return temp;
      }
    },
    insertAtPosition: function (position, data) {
      let index = 0;
      let temp = head;
      while (index < position - 1) {
        if (temp.next !== null) {
          // console.log(temp.data + "+++++++++++");
          temp = temp.next;
        } else {
          console.log("Invalid position");
          return;
        }
        index++; //this index was missing last time
      }
      // console.log(temp.data, 404);
      const node = Node(data);
      node.next = temp.next;
      temp.next = node;
      lLength++;
    },
    insertAtLast: function (data) {
      let last = head;
      while (last.next !== null) {
        last = last.next;
      }
      const node = Node(data);
      last.next = node;
      lLength++;
    },

    view: function () {
      let last = head;
      while (last.next !== null) {
        console.log(last);
        last = last.next;
      }
    },
    size: function () {
      return lLength;
    },
    clear: function () {
      head = null;
      lLength = 0;
    },
    peek: function () {
      if (head !== null) return head.data;
      return;
    },
  };
};

// const ll = linkedList();
// ll.insertAtFront("hi");
// ll.insertAtFront("how");
// ll.insertAtFront("are");
// ll.insertAtFront("you");
// ll.insertAtFront("?");
// ll.insertAtPosition(3, "God");
// ll.insertAtLast("Thank you");
// ll.insertAtPosition(5, "wish");
// ll.insertAtLast("welcome");
// console.log(ll.size());
// // ll.removeFromFront();
// ll.view();
// console.log(ll.peek());
// console.log(ll.size());

// fix this linkedList
// module.exports learn it
// what we say to the function have access to its parent
// scope vaiable even after parent function is executed.
// binaray tree
// binary search tree ?

module.exports = { linkedList };
