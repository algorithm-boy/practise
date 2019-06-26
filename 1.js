/**
 * 问题：有一个整形数组，包含正数和负数，然后要求把数组内的所有负数移至正数的左边，且保证相对位置不变，要求时间复杂度为O(n), 空间复杂度为O(1)。例如，{10, -2, 5, 8, -4, 2, -3, 7, 12, -88, -23, 35}变化后是{-2, -4，-3, -88, -23,5, 8 ,10, 2, 7, 12, 35}。
 * 解答思路：遍历，正负分别存储到一个数组中，最后整合下
 * */

function leftNagetiveNumber(arr) {
	let nagetiveNumber = [];
	let positiveNumber = [];

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] < 0) {
			nagetiveNumber.push(arr[i]);
		} else {
			positiveNumber.push(arr[i]);
		}
	}
	return nagetiveNumber.concat(positiveNumber);
}

console.log(leftNagetiveNumber([-2, 10, 5, 8, -4, 2, -3, 7, 12, -88, -23, 35]));
