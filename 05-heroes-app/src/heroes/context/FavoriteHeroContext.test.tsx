import { use } from "react";
import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";

import { FavoriteHeroContext, FavoriteHeroContextProvider } from "./FavoriteHeroContext";

import type { Hero } from "../interfaces/hero.interface";


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

        screen.debug();

        expect(screen.getByTestId('favorite-count').textContent).toBe('0');
        expect(screen.getByTestId('favorite-list').children).toHaveLength(0);
    });
    
});
