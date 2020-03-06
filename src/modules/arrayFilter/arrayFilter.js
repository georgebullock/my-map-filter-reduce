// @flow

export function arrayFilter(array: mixed[], callback: function) {
	const acc: mixed[] = [];

	for (let i = 0; i < array.length; i++) {
		if (callback(array[i])) {
			acc.push(array[i]);
		}
	}

	return acc;
}
