import { use } from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";

import { FavoriteHeroContext, FavoriteHeroContextProvider } from "./FavoriteHeroContext";

import type { Hero } from "../interfaces/hero.interface";


const mockHero = {
    id: '1',
    name: 'batman',
} as Hero;

const TestComponent = () => {
    const { favorites, favoritCount, isFavorite, toggleFavorite } = use(FavoriteHeroContext);

    return (
        <div>
            <div data-testid="favorite-count">{ favoritCount }</div>
            <div data-testid="favorite-list">
                { 
                    favorites.map((hero: Hero) => (
                        <div key={hero.id} data-testid={`hero-${ hero.id }`}>
                            { hero.name }
                        </div>
                    ))
                }
            </div>
            <button data-testid="toggle-favorite"
                onClick={() => toggleFavorite(mockHero)}>
                Toggle Favorite
            </button>
            <div data-testid="is-favorite">
                { isFavorite(mockHero).toString() }
            </div>
        </div>
    );
};

const renderContextTest = () => {
    return render(
        <FavoriteHeroContextProvider>
            <TestComponent />
        </FavoriteHeroContextProvider>
    );
}

describe('FavoriteHeroContext', () => {
    test('Should initialize with default values', () => {
        renderContextTest();

        // screen.debug();

        expect(screen.getByTestId('favorite-count').textContent).toBe('0');
        expect(screen.getByTestId('favorite-list').children).toHaveLength(0);
    });

    test('Should add hero to favorites when toggleFavorite is called with new Hero', () => {
        renderContextTest();

        const button = screen.getByTestId('toggle-favorite');
        fireEvent.click(button);

        // screen.debug();
        // console.log(localStorage.getItem('favorites'));

        expect(screen.getByTestId('is-favorite').textContent).toBe('true');
        expect(screen.getByTestId('hero-1').textContent).toBe('batman');
        expect(localStorage.getItem('favorites')).toBe('[{"id":"1","name":"batman"}]');
    });
    
});
