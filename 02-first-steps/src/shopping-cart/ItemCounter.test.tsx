import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";

import { ItemCounter } from "./ItemCounter";


describe('ItemCounter', () => {
    test('Should render with default values', () => {
        const name = 'Test item';
        
        render(<ItemCounter name={name} />);
        // screen.debug();

        expect(screen.getByText(name)).toBeDefined();
        expect(screen.getByText(name)).not.toBeNull();
    });

    test('Should render with custom quantity', () => {
        const name = 'Nintendo Switch 2';
        const quantity = 10;

        render(<ItemCounter name={name} quantity={quantity} />);
        // screen.debug();

        expect(screen.getByText(quantity)).toBeDefined();
        expect(screen.getByText(quantity)).not.toBeNull();
    });
});
