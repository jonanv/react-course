import { heroes, Owner, type Hero } from "../data/heros.data"


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
export const getHeroesByOwner = (owner: Owner): Hero[] => {
    return heroes.filter((hero: Hero) => hero.owner === owner);
}

const heroesByOwner = getHeroesByOwner(Owner.Marvel);
console.log(heroesByOwner);