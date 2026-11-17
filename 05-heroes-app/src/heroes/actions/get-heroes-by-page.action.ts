import { HeroesApi } from "../api/hero.api";

// Interfaces
import type { Hero } from "../interfaces/hero.interface";
import type { HeroResponse } from "../interfaces/hero.response";

export const getHeroesByPageAction = async (): Promise<Hero[]> => {
    try {
        const { data } = await HeroesApi<HeroResponse>('/heroes');
        console.log(data.heroes);
        return data.heroes;
    } catch (error) {
        console.log(error);
        return [];
    }
}