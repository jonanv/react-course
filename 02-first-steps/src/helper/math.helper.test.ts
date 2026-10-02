import { describe, expect, test } from 'vitest';
import { add, divide, multiply, subtract } from './math.helper';


describe('Test of operation Add', () => {
    test('Return of typeof number', () => {
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

describe('Test of operation Subtract', () => {
    test('Return of typeof number', () => {
        expect(
            typeof subtract(5, 2)
        ).toStrictEqual('number');
    });
    
    test('Return number 2', () => {
        expect(
            subtract(5, 2)
        ).toStrictEqual(3);
    });
    
    test('Not return number 4', () => {
        expect(
            subtract(5, 2)
        ).not.toBe(4);
    });
});

describe('Test of operation Multiply', () => {
    test('Return of typeof number', () => {
        expect(
            typeof multiply(5, 2)
        ).toStrictEqual('number');
    });
    
    test('Return number 10', () => {
        expect(
            multiply(5, 2)
        ).toStrictEqual(10);
    });
    
    test('Not return number 5', () => {
        expect(
            multiply(5, 2)
        ).not.toBe(5);
    });
});

describe('Test of operation Divide', () => {
    test('Return of typeof number', () => {
        expect(
            typeof divide(10, 2)
        ).toStrictEqual('number');
    });
    
    test('Return number 5', () => {
        expect(
            divide(10, 2)
        ).toStrictEqual(5);
    });
    
    test('Not return number 3', () => {
        expect(
            divide(10, 2)
        ).not.toBe(3);
    });
});
