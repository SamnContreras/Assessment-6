const {shuffleArray} = require('./utils')

describe('shuffleArray should return an array', () => {
    test('returns random array', () => {
        expect(shuffleArray).toBe(shuffleArray)
    });

    test("array length to be same", () => {
        const array = [3, 1]
        expect(shuffleArray(array).toHaveLength(array)(2));
    });
})