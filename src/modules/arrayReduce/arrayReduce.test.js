import { arrayReduce } from './arrayReduce';
import { villains } from './../../../public/data/villains';

const data: mixed[] = villains;
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

	// With an object as initial value
	test('It should return an array of objects that contain each villains name and bio', () => {
		expect(
			arrayReduce(
				data,
				(acc, curr) => {
					let obj = {};

					if (curr['name']) obj.name = curr['name'];
					if (curr['bio']) obj.bio = curr['bio'];

					acc.push(obj);
					return acc;
				},
				[]
			)
		).toEqual([
			{
				name: 'Hugo Drax',
				bio:
					"Plotted to poison Earth's atmosphere from space via a nerve agent."
			},
			{
				name: 'Alec Trevelyan',
				bio:
					"Mastermined a plot to use an EMP weapon to destroy London's economy"
			},
			{
				name: 'Auric Goldfinger',
				bio: 'Planned to irradiate the gold in Fort Knox with a nuclear weapon.'
			},
			{
				name: 'Ernst Stavro Blofeld',
				bio:
					'Sought to steal nuclear bombs and use them to extort money from world governments.'
			},
			{
				name: 'Max Zorin',
				bio:
					'Wanted to start a microchip monopoly by destroying Silicon Valley.'
			}
		]);
	});
});
