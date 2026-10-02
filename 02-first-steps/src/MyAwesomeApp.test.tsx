import { describe, test } from 'vitest';
import { render, screen } from '@testing-library/react';

import { MyAwesomeApp } from './MyAwesomeApp';

describe('MyAwesomeApp', () => {
    test('Should render firstname and lastname', () => {
        render(<MyAwesomeApp />);

        // console.log(screen);
        screen.debug();

        // console.log(container.innerHTML);
    });
});
