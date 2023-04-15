// Write a JavaScript program to take 2 arrays from the user and check if the
// number 4 exists in any of the arrays, or both of the arrays.
// Sample Input 1:
// [ 1, 2, 3, 4, 5 ]
// [ 4, 6, 1, 8, 2 ]
// Output:

// 4 in both arrays
// Sample Input 2:
// [ 1, 2, 3, 6, 5 ]
// [ 4, 6, 1, 8, 2 ]
// Output:
// 4 in array 2

//Code

function checkForFour(arr1, arr2) {
  let foundInArray1 = false;
  let foundInArray2 = false;

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] === 4) {
      foundInArray1 = true;
      break;
    }
  }

  for (let i = 0; i < arr2.length; i++) {
    if (arr2[i] === 4) {
      foundInArray2 = true;
      break;
    }
  }

  if (foundInArray1 && foundInArray2) {
    console.log("4 in both arrays");
  } else if (foundInArray1) {
    console.log("4 in array 1");
  } else if (foundInArray2) {
    console.log("4 in array 2");
  } else {
    console.log("4 not found in either array");
  }
}

// Sample Input
let arr1 = [1, 2, 3, 6, 5];
let arr2 = [4, 6, 1, 8, 2];

checkForFour(arr1, arr2);
