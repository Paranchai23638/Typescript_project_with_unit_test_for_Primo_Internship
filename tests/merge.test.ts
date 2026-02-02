import { merge } from '../src/merge';

describe('merge function', () => {
    
    test('should merge three sorted arrays correctly', () => {
        const c1 = [1, 4, 7];
        const c2 = [2, 5, 8];
        const c3 = [9, 6, 3]; 

        const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        expect(merge(c1, c2, c3)).toEqual(expected);
    });

    test('should handle empty arrays', () => {
        const c1: number[] = [];
        const c2: number[] = [];
        const c3: number[] = [];
        
        expect(merge(c1, c2, c3)).toEqual([]);
    });

    test('should handle arrays with different sizes', () => {
        const c1 = [1, 10];
        const c2 = [2, 3, 4, 5];
        const c3 = [0];

        const expected = [0, 1, 2, 3, 4, 5, 10];
        expect(merge(c1, c2, c3)).toEqual(expected);
    });

    test('should handle negative numbers', () => {
        const c1 = [-10, -5];
        const c2 = [-8, 0];
        const c3 = [5, -2]; 

        const expected = [-10, -8, -5, -2, 0, 5];
        expect(merge(c1, c2, c3)).toEqual(expected);
    });
});