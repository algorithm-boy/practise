const assert = require('assert');

const leftNagetiveNumber = require('../src/leftNagetiveNumber.js');
describe('一个无序的数组，邀请正数排在右侧，负数排在左侧，但整体相对顺序不变', () => {
	it('test', () => {
		assert.deepEqual(leftNagetiveNumber([-2, 10, 5, 8, -4, 2, -3, 7, 12, -88, -23, 35]), [
			-2,
			-4,
			-3,
			-88,
			-23,
			10,
			5,
			8,
			2,
			7,
			12,
			35,
		]);
	});
});

const { run, optRun } = require('../src/squarSize');
describe('有序数组找出绝对值不同的个数', () => {
	it('test run', () => {
		assert.deepEqual(run([-1, 0, 1, 1]), 2);
	});
	it('test optRun', () => {
		assert.deepEqual(optRun([-1, 0, 1, 1]), 2);
	});
});
