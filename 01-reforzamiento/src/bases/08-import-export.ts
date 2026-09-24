import { heroes, type Hero } from "../data/heros.data"


const getHeroById = (hero_id: number): Hero | undefined => {
    return heroes.find((hero: Hero) => hero.id === hero_id);
}

const hero = getHeroById(2);
console.log(hero);