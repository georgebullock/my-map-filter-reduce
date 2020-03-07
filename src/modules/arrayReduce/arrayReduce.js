// @flow

export function arrayReduce(
	array: mixed[],
	callback: function,
	initialValue: any
) {
	let value: any = initialValue ? initialValue : array[0];

	for (let i = initialValue ? 0 : 1; i < array.length; i++) {
		value = callback(value, array[i], i, array);
	}

	return value;
}
