
//Two Sum
//Given an array of integers, return indices of the two numbers such that they add up to a specific target.
//You may assume that each input would have exactly one solution, and you may not use the same element twice.
//Example Input = [2, 7, 11, 15], 9
//Example Output = [0,1]

var twoSum = function (nums, target) {
  var firstIndex = null;
  var secondIndex = null;
  for (var i = 0; i < nums.length; i++) {
    nums.reduce((acc, currentValue, index) => {
      if (acc + currentValue === target) {
        debugger;
        firstIndex = index;
        secondIndex = i;
      }
    }, nums[i])
    if (firstIndex !== null && secondIndex !== null) {
      return [firstIndex, secondIndex]
    }
  }
};

twoSum([2,7,11,15], 9);
