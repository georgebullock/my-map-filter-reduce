import { arrayReduce } from './arrayReduce';

const numbers: mixed[] = [0, 1, 2, 3, 4, 5];

describe('Describe arrayReduce', () => {
	// No ititial value
	test('It should return 15', () => {
		expect(
			arrayReduce(numbers, (acc, curr) => {
				acc += curr;
				return acc;
			})
		).toBe(15);
	});

	// With ititial value
	test('It should return 30', () => {
		expect(
			arrayReduce(
				numbers,
				(acc, curr) => {
					acc += curr;
					return acc;
				},
				10
			)
		).toBe(25);
	});

	// Array.map with arrayReduce
	test('It should return [0, 2, 4, 6, 8, 10]', () => {
		expect(
			arrayReduce(
				numbers,
				(acc, curr) => {
					acc.push(curr * 2);
					return acc;
				},
				[]
			)
		).toEqual([0, 2, 4, 6, 8, 10]);
	});

	// Array.filter with arrayReduce
	test('It should return [0, 2, 4]', () => {
		expect(
			arrayReduce(
				numbers,
				(acc, curr) => {
					if (curr % 2 === 0) acc.push(curr);
					return acc;
				},
				[]
			)
		).toEqual([0, 2, 4]);
	});
});
