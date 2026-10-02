import { describe, expect, test } from 'vitest';
import { add } from './math.helper';


describe('Test of operations', () => {
    test('Should add two positives numbers', () => {
        expect(
            typeof add(2, 7)
        ).toStrictEqual('number');
    });

    test('Return number 9', () => {
        expect(
            add(2, 7) 
        ).toEqual(9);
    });

    test('Not return number 5', () => {
        expect(
            add(2, 7) 
        ).not.toBe(5);
    });
});
