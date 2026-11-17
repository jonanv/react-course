import { HeroesApi } from "../api/hero.api";

export const getHeroesByPage = async () => {
    try {
        const { data } = await HeroesApi('/heroes');
        return data;
    } catch (error) {
        console.log(error);
        return [];
    }
}