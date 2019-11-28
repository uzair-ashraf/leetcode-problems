
//Two Sum
//Given an array of integers, return indices of the two numbers such that they add up to a specific target.
//You may assume that each input would have exactly one solution, and you may not use the same element twice.
//Example Input = [2, 7, 11, 15], 9
//Example Output = [0,1]
 const twoSum = function (nums, target) {
  var firstIndex = null;
  var secondIndex = null;

  for (var i = 0; i < nums.length; i++) {
    nums.forEach((number, index) => {
      if (number + nums[i] === target && i !== index) {
        firstIndex = index;
        secondIndex = i;
      }
    })
    if (firstIndex !== null && secondIndex !== null) {
      return [secondIndex, firstIndex]
    }
  }
  nums.forEach((number, index) => {
    if (number + number === target) {
      return [index, index]
    }
  })
};

const defangIPaddr = function (address) {
  return address.split(".").join("[.]")
};
const balancedStringSplit = function (s) {
  let count = 0;
  const L = [];
  const R = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === 'L') L.push(s[i])
    if (s[i] === 'R') R.push(s[i])
    if (L.length === R.length) count++
  }
  return count
};

module.exports = {
  twoSum,
  defangIPaddr,
  balancedStringSplit
}
