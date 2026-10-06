import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';

import { MyAwesomeApp } from './MyAwesomeApp';

describe('MyAwesomeApp', () => {
    test('Should render firstname and lastname', () => {
        const { container } = render(<MyAwesomeApp />);

        // console.log(screen);
        // screen.debug();

        // console.log(container.innerHTML);

        const h1 = container.querySelector('h1');
        const h3 = container.querySelector('h3');

        expect(h1?.innerHTML).toStrictEqual('Johanny');
        expect(h3?.innerHTML).toStrictEqual('Vargas');
    });

    test('Should render firstname and lastname', () => {
        render(<MyAwesomeApp />);
        // screen.debug();

        // const h1 = screen.getAllByRole('heading', {
        //     level: 1
        // });

        const h1 = screen.getByTestId('first-name-title');
        expect(h1.innerHTML).toContain('Johanny');
    });

    test('Should match snapshot', () => {
        const { container } = render(<MyAwesomeApp />);
        expect(
            container
        ).toMatchSnapshot();
    });

    test('Should match snapshot', () => {
        render(<MyAwesomeApp />);
        expect(
            screen.getByTestId('div-app')
        ).toMatchSnapshot();
    });

    test('muestra "Activo" cuando isActive es true', () => {
        render(<MyAwesomeApp isActive={true} />);

        const [, , h1] = screen.getAllByRole('heading');
        expect(h1.innerHTML).toContain('Activo');
    });

    test('muestra "No activo" cuando isActive es false', () => {
        render(<MyAwesomeApp isActive={false} />);

        const [, , h1] = screen.getAllByRole('heading');
        expect(h1.innerHTML).toBe('No activo');
    });
    
});
