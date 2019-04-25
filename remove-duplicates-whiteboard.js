// Create a function that removes duplicate elements within a sorted array of numbers:

function deDup(nums) {
	// iterate backwards through the array:
	for(let i = nums.length; i >= 0; i--) {
		// check if it's the first time the number at position 'i' appears in the array. if not, splice position 'i':
		if( nums.indexOf(nums[i]) !== i ) nums.splice(i, 1);
	}
	return nums;
}

// some stuff for testing:
let nums = [1,1,2]
let numsAlso = [1,2,2,3,3,3,3,3,3,3,3]
let lotsOfNums = [];
for(let i = 0; i < 100; i++) {
	lotsOfNums.push(i);
	lotsOfNums.push(i);
	lotsOfNums.push(i);
	lotsOfNums.push(i);
	lotsOfNums.push(i);
}
console.log(deDup(nums));
console.log(deDup(numsAlso));
console.log(lotsOfNums);
console.log(deDup(lotsOfNums));