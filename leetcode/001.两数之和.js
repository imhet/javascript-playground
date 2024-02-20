// 两数之和：在给定数组 nums 中找到两个数，使它们的和等于给定的目标值 target

// 方法 1：使用双指针，时间复杂度 O(nlogn)
let twoSum1 = function(nums, target) {
    // 先将数组排序
    nums.sort((a, b) => a - b);
  
    let left = 0;
    let right = nums.length - 1;
    while (left < right) {
      let currentSum = nums[left] + nums[right];
      if (currentSum === target) {
        // 找到符合条件的两个数，返回它们的索引
        return [left, right];
      } else if (currentSum < target) {
        left++;
      } else {
        right--;
      }
    }
    // 没有找到符合条件的两个数
    return [];
  };

// 方法 2：使用 hash 表存储
let twoSum2 = function (nums, target) {
    const map = {};
  
    for (let i = 0; i < nums.length; i++) {
      let findNum = target - nums[i];
      if (map[findNum] !== undefined){
        return [i, map[findNum]]
      }
      map[nums[i]] = i;
    }
  
    return []
  };

// 测试例子
let nums = [2, 7, 11, 15];
let target = 9;
console.log(twoSum1(nums, target)); // 输出 [0, 1]
console.log(twoSum2(nums, target)); // 输出 [1, 0]