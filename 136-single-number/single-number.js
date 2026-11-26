/**
 * @param {number[]} nums
 * @return {number}
 */

function singleNumber(nums) {
    let result = 0;

    for (let i = 0; i < nums.length; i++) {
        result = result ^ nums[i];
    }

    return result;
}

console.log(singleNumber([2, 2, 1])); 
console.log(singleNumber([4, 1, 2, 1, 2]));
console.log(singleNumber([1]));
