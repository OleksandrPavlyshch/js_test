/**
 * Создает матрицу размером n * n и заполняет ее по спирали
 *
 * @param {Number} n - размерность матрицы
 * @returns {Number[n][n]} - n * n - матрица, заполненная по спирали
 */
function fillSpiralMatrix(n) {
	const result = [];

		for (let i = 0; i < n; i++) {
		result.push(new Array(n));
	}

	let cntRounds = Math.ceil(n / 2);
	let value = 1;

	function fillOneRound(fromCol, toCol, fromRow, toRow){
		if (fromRow === toRow && fromCol === toCol) {
			result[fromRow][fromCol] = value;
		} else {
			let col = fromCol;
			let row = fromRow;

			while (col < toCol) result[row][col++] = value++;

			while (row < toRow) result[row++][col] = value++;

			while (col > fromCol) result[row][col--] = value++;

			while (row > fromRow) result[row--][col] = value++;
		}
	}

	for (let r = 0; r < cntRounds; r++) {
		let roundNumber = r;
		let fromCol = roundNumber, toCol = n - 1 - roundNumber;
		let fromRow = roundNumber, toRow = n - 1 - roundNumber;
		fillOneRound(fromCol, toCol, fromRow, toRow);
	}

	return result;
}

export default fillSpiralMatrix;
