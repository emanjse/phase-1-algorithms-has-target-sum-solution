function hasTargetSum(array, target) {
  let complementMap = {};

  for (let i = 0; i < array.length; i++) {
    const num = array[i];
    const complement = target - num;

    if (complementMap[complement]) {
      return true;
    }

    complementMap[num] = true;
  }

  return false;
}

/*
  Write the Big O time complexity of your function here:
  Time complexity: O(n), where n is the length of the array. The function iterates through the array once.
*/

/*
  Add your pseudocode here:
  1. Create an empty object to store complements.
  2. Iterate through the array.
  3. For each element, calculate its complement by subtracting it from the target sum.
  4. Check if the complement exists in the complementMap.
  5. If it exists, return true.
  6. If not, store the current element in the complementMap.
  7. If the loop completes without finding a pair, return false.
*/

/*
  Add written explanation of your solution here:
  The function iterates through the given array. For each element, it calculates the complement required to reach the target sum. It then checks if this complement exists in the complementMap. If it does, it means that there is a pair of elements in the array whose sum equals the target, so it returns true. If not, it stores the current element in the complementMap and continues the iteration. If the loop completes without finding a pair, it means no such pair exists, so it returns false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
