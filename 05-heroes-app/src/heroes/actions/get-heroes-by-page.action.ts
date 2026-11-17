import { HeroesApi } from "../api/hero.api";

// Interfaces
import type { Hero } from "../interfaces/hero.interface";
import type { HeroesResponse } from "../interfaces/hero.response";

export const getHeroesByPageAction = async (): Promise<Hero[]> => {
    try {
        const { data } = await HeroesApi<HeroesResponse>('/heroes');
        console.log(data.heroes);
        return data.heroes;
    } catch (error) {
        console.log(error);
        return [];
    }
}