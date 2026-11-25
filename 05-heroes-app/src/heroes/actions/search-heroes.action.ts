// Imports
import { heroApi } from "../api/hero.api";

// Interfaces
import type { Hero } from "../interfaces/hero.interface";


export const searchHeroesAction = async (name: string, strength: string): Promise<Hero[]> => {
    try {
        const { data } = await heroApi.get<Hero[]>('/search', {
            params: {
                name,
                strength
            }
        });
        return data;
    } catch (error) {
        throw(error);
    }
}