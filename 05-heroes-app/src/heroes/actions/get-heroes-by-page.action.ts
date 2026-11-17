import { HeroesApi } from "../api/hero.api";

export const getHeroesByPage = async () => {
    const { data } = await HeroesApi('/heroes');
    return data;
}