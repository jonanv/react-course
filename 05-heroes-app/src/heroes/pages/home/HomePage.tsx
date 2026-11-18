// import { useEffect, useState } from "react";
import { useMemo } from "react";
import { useSearchParams } from "react-router";

// Imports
import { Heart } from "lucide-react";
import { useQuery } from "@tanstack/react-query";

// UI Components
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Custom Components
import { CustomJumbotron } from "@/components/custom/CustomJumbotron";
import { HeroStats } from "@/heroes/components/HeroStats";
import { HeroGrid } from "@/heroes/components/HeroGrid";
import { CustomPagination } from "@/components/custom/CustomPagination";
import { CustomBreadcrumbs } from "@/components/custom/CustomBreadcrumbs";

// Custom Hooks
import { useHeroSummary } from "@/heroes/hooks/useHeroSummary";
import { getHeroesByPageAction } from "@/heroes/actions/get-heroes-by-page.action";

// type ActiveTabType = 'all' |
//     'favorites' |
//     'heroes' |
//     'villains';

export const HomePage = () => {

    // const [activeTab, setActiveTab] = useState<ActiveTabType>('all');
    const [searchParams, setSearchParams] = useSearchParams();

    const activeTab = searchParams.get('tab') ?? 'all';
    const page = searchParams.get('page') ?? '1';
    const limit = searchParams.get('limit') ?? '6';

    const selectedTab = useMemo(() => {
        const validTabs = ['all', 'favorites', 'heroes', 'villains'];
        return validTabs.includes(activeTab) ? activeTab : 'all';
    }, [activeTab]);

    const { data: heroesResponse } = useQuery({
        queryKey: ['heroes', { page, limit }],
        queryFn: () => getHeroesByPageAction(+page, +limit),
        staleTime: 1000 * 60 * 5 // 5 minutos
    });

    const { data: summaryResponse } = useHeroSummary();

    // useEffect(() => {
    //     getHeroesByPage().then((heroes) => {
    //         console.log(heroes);
    //     })
    // }, []);

    return (
        <>
            <>
                {/* Header */}
                <CustomJumbotron
                    title="Universo de SuperHéroes"
                    description="Descubre, explora y administra super héroes y villanos"
                />

                {/* Breadcrumbs */}
                <CustomBreadcrumbs 
                    currentPage="Super héroes"
                    breadcrumbs={
                        [
                            { label: "Home1", to: "/" },
                            { label: "Home2", to: "/" },
                            { label: "Home3", to: "/" },
                        ]
                    }
                />

                {/* Stats Dashboard */}
                <HeroStats />

                {/* Tabs */}
                <Tabs value={selectedTab} className="mb-8">
                    <TabsList className="grid w-full grid-cols-4">
                        <TabsTrigger 
                            value="all" 
                            onClick={() => setSearchParams((prev) => {
                                prev.set('tab', 'all');
                                return prev;
                            })}>
                            All Characters ({ summaryResponse?.totalHeroes })
                        </TabsTrigger>
                        <TabsTrigger 
                            value="favorites" 
                            className="flex items-center gap-2"
                            onClick={() => setSearchParams((prev) => {
                                prev.set('tab', 'favorites');
                                return prev;
                            })}>
                            <Heart className="h-4 w-4" />
                            Favorites (3)
                        </TabsTrigger>
                        <TabsTrigger 
                            value="heroes" 
                            onClick={() => setSearchParams((prev) => {
                                prev.set('tab', 'heroes');
                                return prev;
                            })}>
                            Heroes ({ summaryResponse?.heroCount })
                        </TabsTrigger>
                        <TabsTrigger 
                            value="villains"
                            onClick={() => setSearchParams((prev) => {
                                prev.set('tab', 'villains');
                                return prev;
                            })}>
                            Villains ({ summaryResponse?.villainCount })
                        </TabsTrigger>
                    </TabsList>

                    <TabsContent value="all">
                        {/* Character Grid */}
                        <h1>Personajes</h1>
                        <HeroGrid heroes={heroesResponse?.heroes ?? []} />
                    </TabsContent>
                    <TabsContent value="favorites">
                        {/* Character Grid Favorites */}
                        <h1>Favoritos</h1>
                        <HeroGrid heroes={[]} />
                    </TabsContent>
                    <TabsContent value="heroes">
                        {/* Character Grid Heroes */}
                        <h1>Héroes</h1>
                        <HeroGrid heroes={[]} />
                    </TabsContent>
                    <TabsContent value="villains">
                        {/* Character Grid Villains */}
                        <h1>Villanos</h1>
                        <HeroGrid heroes={[]}/>
                    </TabsContent>
                </Tabs>

                {/* Pagination */}
                <CustomPagination totalPages={heroesResponse?.pages ?? 1} />
            </>
        </>
    );
};