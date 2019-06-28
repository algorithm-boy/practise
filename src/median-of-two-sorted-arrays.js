// https://leetcode-cn.com/problems/median-of-two-sorted-arrays/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
	let n = nums1.concat(nums2).sort((a, b) => {
		return a - b;
	});
	if (n.length % 2 === 0) {
		return (n[n.length / 2] + n[n.length / 2 - 1]) / 2;
	} else {
		return n[(n.length - 1) / 2];
	}
};
