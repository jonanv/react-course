import { HeroesApi } from "../api/hero.api";

export const getHeroesByPageAction = async () => {
    try {
        const { data } = await HeroesApi('/heroes');
        console.log(data);
        return data;
    } catch (error) {
        console.log(error);
        return [];
    }
}