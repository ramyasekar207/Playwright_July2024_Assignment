var nums = [2, 3, 4, 6,7];
var target = 10;
var result = new Map();
let count = 1;
function twoSum(target) {
    for (var i = 0; i < nums.length; i++) {
        // console.log(nums[i]);
        for (var j = 1; j < nums.length; j++) {
            // console.log(nums[j]);
            if (nums[i] + nums[j] === target) {
                result.set(`Match${count++}`,`${nums[i]}+${nums[j]}(${i},${j})`);
            }
           
        }
        
    }
    console.log(result);
}
twoSum(target);
