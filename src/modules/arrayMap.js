// @flow

export function arrayMap(array: mixed[], callback: function) {
	const acc: mixed[] = [];

	for (let i = 0; i < array.length; i++) {
		acc.push(callback(array[i]));
	}

	return acc;
}
