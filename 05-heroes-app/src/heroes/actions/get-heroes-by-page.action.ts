// Imports
import { heroApi } from "../api/hero.api";

// Interfaces
import type { Hero } from "../interfaces/hero.interface";
import type { HeroesResponse } from "../interfaces/heroes.response";


const BASE_URL = import.meta.env.VITE_API_URL;

export const getHeroesByPageAction = async (page: number, limit: number = 6, category: string = 'all'): Promise<HeroesResponse> => {
    if (isNaN(page)) {
        page = 1;
    }

    if (isNaN(limit)) {
        limit = 6;
    }

    try {
        const { data } = await heroApi.get<HeroesResponse>('/', {
            params: {
                limit,
                offset: (page - 1) * limit,
                category
            }
        });
        
        const heroes = data.heroes.map((hero: Hero) => ({
            ...hero,
            image: `${ BASE_URL }/images/${ hero.image }` 
        }));
        
        return {
            ...data,
            heroes,
        };
    } catch (error) {
        console.log(error);
        return {
            total: 0,
            pages: 0,
            heroes: []
        };
    }
}