


function mean(nums){
let sum = 0
for (let i = 0; i < nums.length; i++) {
      sum += Number(nums[i]);
    
}
let mean= sum / nums.length


return mean

}

function median(nums){
    nums = nums.sort()

    
    if(nums.length % 2 !==0){
        let middle =  nums.length/2
        middle = Math.ceil(middle)
        return nums[middle]
    }
    let middle =  (nums.length/2)-1
    let median =  (Number(nums[middle]) + Number(nums[middle+1])) / 2
    return median
}

function mode(nums) {


    let target = 0;
    let count = 0;
    for (let i = 0; i < nums.length; i++  ){
         let amount = countOccurences(nums,nums[i])
         if (amount > count ){
             count = amount
             target = nums[i]
         }
    }
         return target
    }




function countOccurences(numsArr, target){
    let count = 0;
    for (let i = 0; i < numsArr.length; i++  ){

        if (numsArr[i] == target) count++
    }
    return count;
}



// export an object
module.exports = {
    mode: mode,
    median: median,
    mean: mean
  };
