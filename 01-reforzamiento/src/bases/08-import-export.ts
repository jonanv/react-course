import { heroes, type Hero, type Owner } from "../data/heros.data"


const getHeroById = (hero_id: number): Hero | undefined => {
    return heroes.find((hero: Hero) => hero.id === hero_id);
}

const hero = getHeroById(7);
console.log(hero);

// TODO
/**
 * getHeroesByOwner => Hero[]
 * @param owner - El propietario por cual filtra (DC o Marvel)
 * @returns Array de heroes que pertenece al propietario
 */
const getHeroesByOwner = (owner: Owner): Hero[] => {
    return heroes.filter((hero: Hero) => hero.owner === owner);
}

const heroesByOwner = getHeroesByOwner('Marvel');
console.log(heroesByOwner);