//https://zhuanlan.zhihu.com/p/46730212

function run(arr) {
	let set = new Set();
	for (let i = 0; i < arr.length; i++) {
		set.add(Math.pow(arr[i]), 2);
	}
	return set.size;
}

function optRun(arr) {
	let s = 0;
	let e = arr.length - 1;
	let size = 0;

	// 都是整数或者负数
	if (arr[s] >= 0 || arr[e] <= 0) {
		return new Set(arr).size;
	}

	// 有正数有负数 [-2,-1,0,1,1,2,3]
	while (s !== e) {
		let snumber = Math.abs(arr[s]);
		let enumber = Math.abs(arr[e]);

		if (snumber < enumber) {
			size++;
			e--;
		} else if (snumber > enumber) {
			size++;
			s++;
		} else {
			size++;
			while (s <= e && arr[e] == arr[e - 1]) {
				e--;
			}
			while (s <= e && arr[s] == arr[s + 1]) {
				s++;
			}
			e--;
		}
	}
	return size;
}
