// import { useEffect, useState } from "react";
import { useMemo } from "react";
import { useSearchParams } from "react-router";

import { Heart } from "lucide-react";

// UI Components
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Custom Components
import { CustomJumbotron } from "@/components/custom/CustomJumbotron";
import { HeroStats } from "@/heroes/components/HeroStats";
import { HeroGrid } from "@/heroes/components/HeroGrid";
import { CustomPagination } from "@/components/custom/CustomPagination";
import { CustomBreadcrumbs } from "@/components/custom/CustomBreadcrumbs";

import { getHeroesByPageAction } from "@/heroes/actions/get-heroes-by-page.action";
import { useQuery } from "@tanstack/react-query";

// type ActiveTabType = 'all' |
//     'favorites' |
//     'heroes' |
//     'villains';

export const HomePage = () => {

    // const [activeTab, setActiveTab] = useState<ActiveTabType>('all');
    const [searchParams, setSearchParams] = useSearchParams();

    const activeTab = searchParams.get('tab') ?? 'all';

    const selectedTab = useMemo(() => {
        const validTabs = ['all', 'favorites', 'heroes', 'villains'];
        return validTabs.includes(activeTab) ? activeTab : 'all';
    }, [activeTab]);

    const { data: heroesResponse } = useQuery({
        queryKey: ['heroes'],
        queryFn: () => getHeroesByPageAction(),
        staleTime: 1000 * 60 * 5 // 5 minutos
    });

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
                            All Characters (16)
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
                            Heroes (12)
                        </TabsTrigger>
                        <TabsTrigger 
                            value="villains"
                            onClick={() => setSearchParams((prev) => {
                                prev.set('tab', 'villains');
                                return prev;
                            })}>
                            Villains (2)
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
                <CustomPagination totalPages={8} />
            </>
        </>
    );
};