import { render, screen } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";

import { FirstStepsApp } from "./FirstStepsApp";


vi.mock('./shopping-cart/ItemCounter', () => ({
    ItemCounter: (props: unknown) => (
        <div 
            data-testid="ItemCounter"
            name={props.name}
            quantity={props.quantity}
        />
    )
}));

describe('FirstStepsApp', () => {
    test('Shold match snaptchot', () => {
        const { container } = render(<FirstStepsApp />);

        expect(
            container
        ).toMatchSnapshot();
    });

    test('Should rende the correct number of ItemCounter components', () => {
        render(<FirstStepsApp />);

        const itemCounters = screen.getAllByTestId('ItemCounter');
        expect(itemCounters.length).toStrictEqual(4);
        screen.debug();
    });
    
});
