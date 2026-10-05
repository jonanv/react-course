import { render } from "@testing-library/react";
import { describe, expect, test } from "vitest";

import { FirstStepsApp } from "./FirstStepsApp";

describe('FirstStepsApp', () => {
    test('Shold match snaptchot', () => {
        const { container } = render(<FirstStepsApp />);

        expect(
            container
        ).toMatchSnapshot();
    });
});
