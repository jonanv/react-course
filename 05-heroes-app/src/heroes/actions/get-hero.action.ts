// Imports
import { heroApi } from "../api/hero.api"

// Interfaces
import type { Hero } from "../interfaces/hero.interface";


const BASE_URL = import.meta.env.VITE_API_URL;

export const getHeroAction = async (idSlug: string): Promise<Hero> => {
    try {
        const { data } = await heroApi.get<Hero>(`/${ idSlug }`);
        return {
            ...data,
            image: `${ BASE_URL }/images/${ data.image }`
        };
    } catch (error) {
        throw(error);
    }
}
