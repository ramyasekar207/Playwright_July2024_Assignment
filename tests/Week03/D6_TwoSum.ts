let nums:number[] = [2,5,5,7];
let target :number = 10;
let result = new Map()
let arr1:number[];
let arr2:number[];


function twoSum(target: number){

for (let i = 0; i < nums.length; i++) {
    console.log(nums[i]);
    for (let j = 0; j < nums.length; j++) {
        
        if(nums[i]+nums[j]===target)
        {
            arr1.push(nums[i],nums[j]);
            result.set("Value",arr1);
            arr2.push(i,j);
            result.set("Indices",arr2);

        }
        
    }
    
}

}

twoSum(target);