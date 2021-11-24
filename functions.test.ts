const {shuffleArray} = require('./utils')
let ex = [3, 7, 6, 1, 4];


describe('shuffleArray should return an array', () => {
    test('shuffleArray returns random array', () => { 
        expect(Array.isArray(shuffleArray(ex))).toBe(true);
    });

    test("array has the same length as one passed in", () => {
        const result = shuffleArray(ex);
        expect(result.length).toBe(ex.length);
    });

    test("both arrays have same values", () => {
        const result = shuffleArray(ex);
        expect(ex).toEqual(expect.arrayContaining(ex));
    });

    test("items have been shuffled", () => {
        let result = shuffleArray(ex);
        expect(result.join()).not.toEqual(ex.join());
    })
});