import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";

import { MyCounterApp } from "./MyCounterApp";


describe('MyCounterApp', () => {
    test('Should render the component', () => {
        render(<MyCounterApp />);

        expect(
            screen.getByRole('heading', { level: 1 }).innerHTML
        ).toContain(`Counter: 10`);

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

        const labelH1 = screen.getByRole('heading', { level: 1 });
        const buttonAdd = screen.getByRole('button', { name: '+1' });
        
        fireEvent.click(buttonAdd);

        expect(
            labelH1.innerHTML
        ).toContain(`Counter: 11`);
    });
    
});
