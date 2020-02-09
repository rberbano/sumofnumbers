const test = [1, 2, 3, 4];

function sumFor(nums) {
  let total = 0;
  for (const num of nums) {
    total += num;
  }
  return total;
}
console.log(sumFor(test));

function sumWhile(nums) {
  let total = 0;
  let num = 0;
  while (num < nums.length) {
    total += nums[num];
    num++;
  }
  return total;
}
console.log(sumWhile(test));

function sumRecursion(nums) {
  if (nums.length === 0) {
    return 0;
  }
  return nums[0] + sumRecursion(nums.slice(1, nums.length));
}
console.log(sumRecursion(test));

function sumTheSimpleWay(nums) {
  return _.reduce(nums, (memo, num) => memo + num, 0);
}
console.log(sumTheSimpleWay(test));
