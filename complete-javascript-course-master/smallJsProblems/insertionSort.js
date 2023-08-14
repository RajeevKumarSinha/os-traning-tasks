"use strict";
// insertion sort
// sorted part is the first
// second is the unsorted part
// from the unsorted and sorted end compare the elements
// if their is a mismatch then
// swap the elements
// then check if the last and second last are in right position inside
// sorted array if not than swap them and so on
let arr = [10, 38, 20, 5, 3, 2];
// [10,20, 38, 5, 3, 2];
// [10,20, 38, 5, 3, 2];
//

for (let i = 1; i < arr.length; i++) {
  if (arr[i] > arr[i - 1]) {
    continue;
  } else {
    for (let j = i; j > 0; j--) {
      if (arr[j] < arr[j - 1]) {
        let temp = arr[j];
        arr[j] = arr[j - 1];
        arr[j - 1] = temp;
      } else {
        break;
      }
    }
  }
  console.log(arr);
}
console.log(arr);
