// Custom Components
import { HeroGridCard } from "./HeroGridCard";

// Interfaces
import type { Hero } from "../interfaces/hero.interface";
interface Props {
    heroes: Hero[];
}

export const HeroGrid = ({ heroes }: Props) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {heroes.map((hero: Hero) => (
                <HeroGridCard key={hero.id} hero={hero} />
            ))}
        </div>
    )
}
