// 4. Write a JavaScript program to take an array as input from the user and:
// a) Store all duplicate elements in a separate array
// b) Remove the duplicate elements from the original array
// Sample Input:
// [ 1, 2, 3, 2, 3, 4, 5 ]

function removeDuplicates(arr) {
  let duplicates = [];
  let unique = [];

  for (let i = 0; i < arr.length; i++) {
    if (unique.indexOf(arr[i]) === -1) {
      unique.push(arr[i]);
    } else if (duplicates.indexOf(arr[i]) === -1) {
      duplicates.push(arr[i]);
    }
  }

  console.log("Duplicate Elements = ", duplicates);
  console.log("Array without duplicate elements = ", unique);
}

// Sample Input
let arr = [1, 2, 3, 2, 3, 4, 5];

removeDuplicates(arr);
