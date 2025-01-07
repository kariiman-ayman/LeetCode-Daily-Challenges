var waysToSplitArray = function(nums) {
    let leftSum = 0;
    let rightSum = nums.reduce((acc, num) => acc + num, 0);
    let validSplits = 0;
    for (let i = 0; i < nums.length - 1; i++) {
        leftSum += nums[i];
        rightSum -= nums[i];
        if (leftSum >= rightSum)
            validSplits++;
    }
    return validSplits;
};