import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";

import { MyCounterApp } from "./MyCounterApp";
// import { useCounter } from "../hooks/useCounter";

// Mocks
const handleAddMock = vi.fn();
const handleSubtractMock = vi.fn();
const handleResetMock = vi.fn();

vi.mock('../hooks/useCounter', () => ({
    useCounter: () => ({
        counter: 20,
        handleAdd: handleAddMock,
        handleSubtract: handleSubtractMock,
        handleReset: handleResetMock
    })
}));


describe('MyCounterApp2', () => {
    test('Should render the component', () => {
        render(<MyCounterApp />);

        expect(
            screen.getByRole('heading', { level: 1 }).innerHTML
        ).toContain(`Counter: 20`);

        expect(
            screen.getByRole('button', { name: '+1' }).innerHTML
        ).toBeDefined();

        expect(
            screen.getByRole('button', { name: '-1' }).innerHTML
        ).toBeDefined();

        expect(
            screen.getByRole('button', { name: 'Reset' }).innerHTML
        ).toBeDefined();
    });
    
    test('Should increment de counter', () => {
        render(<MyCounterApp />);

        const buttonAdd = screen.getByRole('button', { name: '+1' });
        
        fireEvent.click(buttonAdd);

        expect(handleAddMock).toHaveBeenCalledTimes(1);
        expect(handleSubtractMock).not.toHaveBeenCalled();
        expect(handleResetMock).not.toHaveBeenCalled();
    });
});
