// function recursiveSearch(arr, target) {
//   for (const value of arr) {
//     if (value === target) {
//       return true
//     }
    
//   }
//   return false;
// }

function recursiveSearch(arr, target) {
  if ( arr.length === 0){
    return false;
  }

  if (arr[0] === target) {
    return true
  }

  return recursiveSearch(arr.slice(1), target)
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: true");
  console.log("=>", recursiveSearch([1, 2, 3], 2));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", recursiveSearch([3, 2, 1], 4));
}

module.exports = recursiveSearch;

// Please add your pseudocode to this file
// And a written explanation of your solution
// write a loop verison 
// translate this to a recursion function that calls itself:
// 1 add condition that stops it from continuing
//i think.... the target will only need to pass through one element of the array each time through. 

