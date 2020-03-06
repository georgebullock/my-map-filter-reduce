// @flow
import { arrayMap } from './arrayMap';

describe('describe arrayMap', () => {
	test('it should return [2, 4, 6, 8, 10]', () => {
		expect(arrayMap([1, 2, 3, 4, 5], item => item * 2)).toEqual([
			2,
			4,
			6,
			8,
			10
		]);
	});
});
