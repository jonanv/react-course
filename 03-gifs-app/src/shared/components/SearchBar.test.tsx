import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import { SearchBar } from "./SearchBar";


describe('SearchBar', () => {
    test('Should render searchbar correctly', () => {
        const { container } = render(<SearchBar onQuery={() => {}} />);
        expect(container).toMatchSnapshot();
        expect(screen.getByRole('textbox')).toBeDefined();
        expect(screen.getByRole('button')).toBeDefined();
    });
    
    test('Should call onQuery with the correct value after 700ms', async () => {
        const onQuery = vi.fn();
        render(<SearchBar onQuery={onQuery} />);

        const input = screen.getByRole('textbox');
        fireEvent.change(input, { target: { value: 'test' } });

        // No es la forma correcta de probar el debounce, funciona pero esta sujeta a cambios, la forma correcta es con el waitFor
        // await new Promise((resolve) => setTimeout(resolve, 700));
        await waitFor(() => {
            expect(onQuery).toHaveBeenCalled();
            expect(onQuery).toHaveBeenCalledWith('test');
        });
    });
    
    test('Should call only once with the last value (debounce)', () => {
        const onQuery = vi.fn();
        render(<SearchBar onQuery={onQuery} />);

        const input = screen.getByRole('textbox');
        fireEvent.change(input, { target: { value: 't' } });
        fireEvent.change(input, { target: { value: 'te' } });
        fireEvent.change(input, { target: { value: 'tes' } });
        fireEvent.change(input, { target: { value: 'test' } });

        waitFor(() => {
            expect(onQuery).toHaveBeenCalledTimes(1);
            expect(onQuery).toHaveBeenCalledWith('test');
        });
    });
    
    test('Should call onQuery on button clicked with the input value', () => {
        const onQuery = vi.fn();
        render(<SearchBar onQuery={onQuery} />);

        const input = screen.getByRole('textbox');
        fireEvent.change(input, { target: { value: 'test' } });
        
        const button = screen.getByRole('button');
        fireEvent.click(button);

        expect(onQuery).toHaveBeenCalledTimes(1);
        expect(onQuery).toHaveBeenCalledWith('test');
    });
    
    test('Should the input has the correct placeholder value', () => {
        const value = 'Buscar gif';
        render(<SearchBar onQuery={() => {}} placeholder={value} />);

        expect(screen.getByPlaceholderText(value)).toBeDefined();
    });
    
});
