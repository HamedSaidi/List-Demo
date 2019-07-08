import {
	safelyCalculateDiameter,
	isValideInput,
	calculateDiameter
} from './'

describe('#safelyCalculateDiameter', () => {
  it('should calculate the diameter correctly', () => {
    const items = [12, 0, 99]
    const result = 99

	expect(safelyCalculateDiameter([12, 0, 99])).toEqual(99)
	expect(safelyCalculateDiameter([120, 0, -99])).toEqual(219)
	expect(safelyCalculateDiameter([120])).toEqual(0)
	expect(safelyCalculateDiameter([55, 111, 99])).toEqual(56)
	expect(safelyCalculateDiameter([12, 0, null, 99, 99, 99, 99, 99, 99])).toEqual(99)
  })

  it('should return 0 when provided with the wrong input format', () => {
	expect(safelyCalculateDiameter([12, 'test', 99])).toEqual(0)
	expect(safelyCalculateDiameter([Infinity])).toEqual(0)
	expect(safelyCalculateDiameter('test')).toEqual(0)
	expect(safelyCalculateDiameter({})).toEqual(0)
	expect(safelyCalculateDiameter()).toEqual(0)
  })
})

describe('#isValideInput', () => {
  it('should return true when provided with an integers array', () => {
	expect(isValideInput([12, 0, 99])).toEqual(true)
	expect(isValideInput([null, 110, -99])).toEqual(true)
  })

  it('should return false when provided with an empty array', () => {
	expect(isValideInput([])).toEqual(false)
  })

  it('should return false when provided with the wrong input format', () => {
	expect(isValideInput([12, 'test', 99])).toEqual(false)
	expect(isValideInput([Infinity])).toEqual(false)
	expect(isValideInput('test')).toEqual(false)
	expect(isValideInput({})).toEqual(false)
	expect(isValideInput()).toEqual(false)
  })
})

describe('#calculateDiameter', () => {
  it('should calculate the diameter correctly', () => {
	expect(calculateDiameter([12, 0, 99])).toEqual(99)
	expect(calculateDiameter([null, 110, -99, -100])).toEqual(210)
	expect(calculateDiameter([110, 0, 100])).toEqual(110)
	expect(calculateDiameter([1, 120, 0])).toEqual(120)
	expect(calculateDiameter([100])).toEqual(0)
	expect(calculateDiameter([100, null])).toEqual(100)
  })
})
