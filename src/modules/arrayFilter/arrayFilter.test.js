// @flow
import { arrayFilter } from './../arrayFilter/arrayFilter';

test('It should return [0, 2, 4, 6, 8 10]', () => {
	expect(
		arrayFilter([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], item => {
			return item % 2 === 0;
		})
	).toEqual([0, 2, 4, 6, 8, 10]);
});
