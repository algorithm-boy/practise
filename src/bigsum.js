var bigsum = function(a, b) {
	a = String(a).split('');
	b = String(b).split('');

	let isCarry = 0;
	let res = [];

	while (a.length || b.length) {
		let i = a.pop() || 0;
		let j = b.pop() || 0;

		let tmp = Number(i) + Number(j) + isCarry;

		res.push(tmp % 10);

		isCarry = tmp > 9 ? 1 : 0;
	}

	let resStr = res.reverse().join('');

	if (a.length === 0) {
		return Number(b.join('') + resStr);
	} else {
		return Number(a.join('') + resStr);
	}
};
