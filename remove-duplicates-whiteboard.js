let nums = [1,1,2]

function deDup(nums) {
	for(let i = 0; i < nums.length; i++) {
		if(nums[i] === nums[i+1]) {
			nums.splice(nums[i], 0)
		}
	}
}

console.log(deDup(nums));


