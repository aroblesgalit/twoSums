/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  for(var i = 0; i < nums.length; i++) {
      for(var j = i + 1; j < nums.length; j++) {
        if (nums[i] + nums[j] === target) {
            console.log(i, j);
            return [i, j];
        }
      }      
  }  
};

console.log(twoSum([3,2,4], 6));
console.log(i);