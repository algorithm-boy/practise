/**
 * eg. https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(str) {
	let size = 0;
	let loopSize = 0;
	let toArr = str.split('');
	let ns = new Set();
	let tmpArr = [];

	for (let i = 0; i < toArr.length; i++) {
		let tmpSize = ns.size;
		ns.add(toArr[i]);

		if (ns.size === tmpSize + 1) {
			// ok
			loopSize = ns.size;
			tmpArr.push(toArr[i]);
			if (loopSize > size) {
				size = loopSize;
			}
			debugger;
		} else {
			// 重复数据
			let pos = tmpArr.indexOf(toArr[i]);
			tmpArr = tmpArr.slice(pos + 1, tmpArr.length);
			tmpArr.push(toArr[i]);

			loopSize = tmpArr.length;
			ns.clear();
			ns = new Set(tmpArr);
			if (loopSize > size) {
				size = loopSize;
			}
		}
	}

	return size;
};

console.log(lengthOfLongestSubstring('dvdffe'));
