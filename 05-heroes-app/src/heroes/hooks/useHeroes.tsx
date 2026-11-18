// Imports
import { useQuery } from "@tanstack/react-query";
import { getHeroesByPageAction } from "../actions/get-heroes-by-page.action";

interface Props {
    page: string;
    limit: string;
}

export const useHeroes = ({ page, limit }: Props) => {
    return useQuery({
        queryKey: ['heroes', { page, limit }],
        queryFn: () => getHeroesByPageAction(+page, +limit),
        staleTime: 1000 * 60 * 5 // 5 minutos
    });
};
