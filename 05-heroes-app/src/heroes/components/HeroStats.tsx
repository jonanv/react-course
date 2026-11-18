import { useQuery } from "@tanstack/react-query";

import { Heart, Trophy, Users, Zap } from "lucide-react";

// UI Components
import { Badge } from "@/components/ui/badge";
import { HeroStatCard } from "./HeroStatCard";

import { getSummaryAction } from "../actions/get-summary.action";

export const HeroStats = () => {

    const { data: summaryResponse } = useQuery({
        queryKey: ['summary-information'],
        queryFn: getSummaryAction,
        staleTime: 1000 * 60 * 5 // 5 minutos
    });

    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <HeroStatCard
                title="Total de personajes"
                icon={<Users className="h-4 w-4 text-muted-foreground" />}
            >
                <div className="text-2xl font-bold">
                    { summaryResponse?.totalHeroes }
                </div>
                <div className="flex gap-1 mt-2">
                    <Badge variant="secondary" className="text-xs">
                        { summaryResponse?.heroCount } Heroes
                    </Badge>
                    <Badge variant="destructive" className="text-xs">
                        { summaryResponse?.villainCount } Villanos
                    </Badge>
                </div>
            </HeroStatCard>

            <HeroStatCard 
                title="Favoritos"
                icon={<Heart className="h-4 w-4 text-muted-foreground" />}
            >
                <div className="text-2xl font-bold text-red-600">3</div>
                <p className="text-xs text-muted-foreground">18.8% del total</p>
            </HeroStatCard>

            <HeroStatCard 
                title="El más fuerte"
                icon={<Zap className="h-4 w-4 text-muted-foreground" />}
            >
                <div className="text-lg font-bold">{ summaryResponse?.strongestHero.alias }</div>
                <p className="text-xs text-muted-foreground">
                    Fuerza: { summaryResponse?.strongestHero.strength }/10
                </p>
            </HeroStatCard>

            <HeroStatCard 
                title="El más inteligente"
                icon={<Trophy className="h-4 w-4 text-muted-foreground" />}
            >
                <div className="text-lg font-bold">{ summaryResponse?.smartestHero.alias }</div>
                <p className="text-xs text-muted-foreground">
                    Inteligencia: { summaryResponse?.smartestHero.strength }/10
                </p>
            </HeroStatCard>
        </div>
    )
}
