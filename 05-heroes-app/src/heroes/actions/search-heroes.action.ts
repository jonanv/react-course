// Imports
import { heroApi } from "../api/hero.api";

// Interfaces
import type { Hero } from "../interfaces/hero.interface";


interface Options {
    name?: string;
    team?: string;
    category?: string;
    universe?: string;
    status?: string;
    strength?: string;
}

const BASE_URL = import.meta.env.VITE_API_URL;

export const searchHeroesAction = async (options: Options = {}): Promise<Hero[]> => {
    try {
        const { name, team, category, universe, status, strength } = options;

        if (!name && !team && !category && !universe && !status && !strength) {
            return [];
        }

        const { data } = await heroApi.get<Hero[]>('/search', {
            params: {
                name,
                team,
                category,
                universe,
                status,
                strength
            }
        });

        const heroes = data.map((hero: Hero) => ({
            ...hero,
            image: `${ BASE_URL }/images/${ hero.image }`
        }));

        return heroes;
    } catch (error) {
        throw(error);
    }
}