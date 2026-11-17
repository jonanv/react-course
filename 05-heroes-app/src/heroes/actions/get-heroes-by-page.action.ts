import { HeroesApi } from "../api/hero.api";

// Interfaces
import type { Hero } from "../interfaces/hero.interface";
import type { HeroesResponse } from "../interfaces/heroes.response";


const BASE_URL = import.meta.env.VITE_API_URL;

export const getHeroesByPageAction = async (): Promise<HeroesResponse> => {
    try {
        const { data } = await HeroesApi<HeroesResponse>('/heroes');
        
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