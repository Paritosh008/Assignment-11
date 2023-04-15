// 1. Write a JavaScript program to take an array as input from the user and calculate
// the sum of numbers in odd places and the sum of numbers at even places.
// a) Print the difference between the two sums
// b) Print the number of elements in odd places
// c) Print the number of elements in even places
// d) Print the average of all elements in the array
// e) Print GCD of Sum of Numbers at Odd Places and Sum of Numbers at Even
// Places
// Sample Input:
// [ 1, 2, 3, 4, 5 ]
// Explanation:
// Sum of Numbers at Odd Places = 1 + 3 + 5 = 9
// Sum of Numbers at Even Places = 2 + 4 = 6
// Difference = 9 - 6 = 3
// Sample Output:
// Difference = 3
// Odd Elements = 3
// Even Elements = 2
// Average = 3
// GCD = 3

//Code

let evensum=0;
const a = [1,2,3,4,5]
let oddsum=0;
let difference=0;
let oddelement=0;
let evenelement=0;
let avg = 0;
let gcd = 0;
for(i=0;i<a.length;i++)
{
if(i%2==0){
oddsum = oddsum + a[i];
oddelement++;


}
else{
evensum = evensum + a[i]
evenelement++;
  }
}
difference = oddsum - evensum;
avg = (oddsum + evensum)/a.length;
gcd = getGcd(oddsum, evensum);

function getGcd(a, b) {
  if (b === 0) {
    return a;
  } else {
    return getGcd(b, a % b);
  }
}
//oddelement = oddsum;
//evenelement = evensum;
console.log("difference=",difference);
console.log("Odd Element=",oddelement);
console.log("Even Element=",evenelement);
console.log("Average=",avg);
console.log("GCD=",gcd);

//console.log(oddelement);
//console.log(evenelement);
