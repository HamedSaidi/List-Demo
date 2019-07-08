export const calculateDiameter = (array) => {
  // n + 2 => O(n)
	let min = array[0]
	let max = array[0]

	for(let i = 1; i < array.length; i++) {
		if (array[i] > max) max = array[i]
		else if (array[i] < min) min = array[i]
  }

	return max - min
}

export const isValideInput = (array) => {
  // n + 2 => O(n)
  return Array.isArray(array) && array.length > 0 && array.every(isFinite)
}

export const safelyCalculateDiameter = (array) => {
  // 2n + 4 => O(n)
  if (!isValideInput(array))
    return 0

  return calculateDiameter(array)
}
