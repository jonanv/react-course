import { createContext, useState, type PropsWithChildren } from "react";

// Interfaces
import type { Hero } from "../interfaces/hero.interface";


interface FavoriteHeroContextProps {
    // State
    favorites: Hero[],
    favoritCount: number,

    // Methods
    isFavorite: (hero: Hero) => boolean,
    toggleFavorite: (hero: Hero) => void,
}

export const FavoriteHeroContext = createContext({} as FavoriteHeroContextProps);

export const FavoriteHeroContextProvider = ({ children }: PropsWithChildren) => {

    const [favorites, setFavorites] = useState<Hero[]>([]);

    const handleToggleFavorite = (hero: Hero): void => {
        const heroExist = favorites.find((favorite: Hero) => favorite.id === hero.id);

        if (heroExist) {
            const newFavorites = favorites.filter((favorite: Hero) => favorite.id === hero.id);
            setFavorites(newFavorites);
            return;
        }

        setFavorites((prev) => [...prev, hero]);
    }

    const handleIsFavorite = (hero: Hero): boolean => {
        return true;
    }

    return (
        <FavoriteHeroContext value={{
            favorites: favorites,
            favoritCount: favorites.length,
            isFavorite: handleIsFavorite,
            toggleFavorite: handleToggleFavorite,
        }}>
            { children }
        </FavoriteHeroContext>
    );
};
