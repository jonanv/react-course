import { useParams } from "react-router";

// Imports
import { useQuery } from "@tanstack/react-query";
import { getHeroAction } from "@/heroes/actions/get-hero.action";

export const HeroPage = () => {

    const { idSlug } = useParams();

    const { data } = useQuery({
        queryKey: ['hero-information'],
        queryFn: () => getHeroAction(idSlug),
        staleTime: 1000 * 60 * 5 // 5 minutos
    });

    return (
        <div>HeroPage</div>
    );
};
