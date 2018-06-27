/**
 * Проверяет состоят ли массивы arr1 и arr2 из одинакового
 * числа одних и тех же элементов
 *
 * @param {Number[]} arr1 - отсортированный по возрастанию
 *                          массив уникальных элементов
 * @param {Number[]} arr2 - массив произвольной длинны произвольных чисел
 * @returns {Boolean}
 */
function haveSameItems(arr1, arr2) {
	if (arr1.length !== arr2.length) {
		return false;
	}
	const sorted = arr2.slice().sort();

	for (let i = 0; i < arr1.length; i++) {
		if (sorted[i] !== arr1[i]) {
			return false;
		}
	}
	return true;
}

export default haveSameItems;
