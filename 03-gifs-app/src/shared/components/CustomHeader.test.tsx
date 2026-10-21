import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";

import { CustomHeader } from "./CustomHeader";


describe('CustomHeader.tsx', () => {
    const title = 'Test title';
    const description = 'Test description';

    test('Should render the title correctly', () => {
        render(<CustomHeader title={title} />);

        const [h1] = screen.getAllByRole('heading');
        expect(h1.innerHTML).toContain(title);
    });

    test('Should render the description when provided', () => {
        render(<CustomHeader title={title} description={description} />);

        expect(screen.getByText(description)).toBeDefined();
        expect(screen.getByRole('paragraph')).toBeDefined();
        expect(screen.getByRole('paragraph').innerHTML).toBe(description);
    });

    test('Should not render description when not provided', () => {
        const { container } = render(<CustomHeader title={title} />);
        const divElement = container.querySelector('.content-center');

        const h1 = divElement?.querySelector('h1');
        expect(h1?.innerHTML).toBe(title);
        
        const p = divElement?.querySelector('p');
        expect(p).toBeNull();
    });
});
