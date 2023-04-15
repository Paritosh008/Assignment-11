// Write a JavaScript program to flatten the array, ie, turns a deep array into a plain
// array.
// Note: Do not use array.flat();
// Sample Input:
// [ 1, 2, [ 3, 4, [ 5 ] ] ]
// Output:
// [ 1, 2, 3, 4, 5 ]

//code
function flattenArray(arr) {
  let result = [];

  function traverseArray(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        traverseArray(arr[i]);
      } else {
        result.push(arr[i]);
      }
    }
  }

  traverseArray(arr);
  return result;
}

// Sample usage
const arr = [ 1, 2, [ 3, 4, [ 5 ] ] ];
const flattenedArr = flattenArray(arr);
console.log(flattenedArr); // Output: [ 1, 2, 3, 4, 5 ]
       
