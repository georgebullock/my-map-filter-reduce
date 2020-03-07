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
});
