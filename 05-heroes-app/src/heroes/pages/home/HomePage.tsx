import { use } from "react";

// Imports
import { Heart } from "lucide-react";

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
import { usePaginatedHero } from "@/heroes/hooks/usePaginatedHero";
import { useHomePage } from "@/heroes/hooks/useHomePage";
import { FavoriteHeroContext } from "@/heroes/context/FavoriteHeroContext";


export const HomePage = () => {

    const { favoritCount, favorites } = use(FavoriteHeroContext);
    const { page, limit, category, selectedTab, setSearchParams } = useHomePage();
    
    const { data: heroesResponse } = usePaginatedHero(+page, +limit, category);
    const { data: summaryResponse } = useHeroSummary();

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
                    // breadcrumbs={
                    //     [
                    //         { label: "Home1", to: "/" },
                    //         { label: "Home2", to: "/" },
                    //         { label: "Home3", to: "/" },
                    //     ]
                    // }
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
                                prev.set('category', 'all');
                                prev.set('page', '1');
                                return prev;
                            })}>
                            All Characters ({ summaryResponse?.totalHeroes })
                        </TabsTrigger>
                        <TabsTrigger 
                            value="favorites" 
                            className="flex items-center gap-2"
                            onClick={() => setSearchParams((prev) => {
                                prev.set('tab', 'favorites');
                                prev.set('category', 'favorite');
                                prev.set('page', '1');
                                return prev;
                            })}>
                            <Heart className="h-4 w-4" />
                            Favorites ({ favoritCount })
                        </TabsTrigger>
                        <TabsTrigger 
                            value="heroes" 
                            onClick={() => setSearchParams((prev) => {
                                prev.set('tab', 'heroes');
                                prev.set('category', 'hero');
                                prev.set('page', '1');
                                return prev;
                            })}>
                            Heroes ({ summaryResponse?.heroCount })
                        </TabsTrigger>
                        <TabsTrigger 
                            value="villains"
                            onClick={() => setSearchParams((prev) => {
                                prev.set('tab', 'villains');
                                prev.set('category', 'villain');
                                prev.set('page', '1');
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
                        <HeroGrid heroes={favorites} />
                    </TabsContent>
                    <TabsContent value="heroes">
                        {/* Character Grid Heroes */}
                        <h1>Héroes</h1>
                        <HeroGrid heroes={heroesResponse?.heroes ?? []} />
                    </TabsContent>
                    <TabsContent value="villains">
                        {/* Character Grid Villains */}
                        <h1>Villanos</h1>
                        <HeroGrid heroes={heroesResponse?.heroes ?? []}/>
                    </TabsContent>
                </Tabs>

                {/* Pagination */}
                <CustomPagination totalPages={heroesResponse?.pages ?? 1} />
            </>
        </>
    );
};