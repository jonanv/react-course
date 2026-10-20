import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";

import { CustomHeader } from "./CustomHeader";


describe('CustomHeader.tsx', () => {
    test('Should render the title correctly', () => {
        const title = 'Buscador de Gifs';
        render(<CustomHeader title={title} />);

        const [h1] = screen.getAllByRole('heading');
        expect(h1.innerHTML).toContain(title);
    });

    test('Should render the description when provided', () => {
        const title = 'Buscador de Gifs';
        const description = 'Descubre y comparte el gif perfecto';
        render(<CustomHeader title={title} description={description} />);

        const [p] = screen.getAllByRole('paragraph');
        // console.log(p.innerHTML);
        expect(p.innerHTML).toContain(description);
    });

    test('Should not render description when not provided', () => {
        const title = 'Buscador de Gifs';
        render(<CustomHeader title={title} />);

        const p = screen.queryByRole('paragraph');
        expect(p).toBeNull();
    });
});
