import { useState } from "react";

import { Heart } from "lucide-react";

// UI Components
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Custom Components
import { CustomJumbotron } from "@/components/custom/CustomJumbotron";
import { HeroStats } from "@/heroes/components/HeroStats";
import { HeroGrid } from "@/heroes/components/HeroGrid";
import { CustomPagination } from "@/components/custom/CustomPagination";
import { CustomBreadcrumbs } from "@/components/custom/CustomBreadcrumbs";

type ActiveTabType = 'all' |
    'favorites' |
    'heroes' |
    'villains';

export const HomePage = () => {

    const [activeTab, setActiveTab] = useState<ActiveTabType>('all');

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
                <Tabs value={activeTab} className="mb-8">
                    <TabsList className="grid w-full grid-cols-4">
                        <TabsTrigger 
                            value="all" 
                            onClick={() => setActiveTab('all')}>
                            All Characters (16)
                        </TabsTrigger>
                        <TabsTrigger 
                            value="favorites" 
                            className="flex items-center gap-2"
                            onClick={() => setActiveTab('favorites')}>
                            <Heart className="h-4 w-4" />
                            Favorites (3)
                        </TabsTrigger>
                        <TabsTrigger 
                            value="heroes" 
                            onClick={() => setActiveTab('heroes')}>
                            Heroes (12)
                        </TabsTrigger>
                        <TabsTrigger 
                            value="villains"
                            onClick={() => setActiveTab('villains')}>
                            Villains (2)
                        </TabsTrigger>
                    </TabsList>

                    <TabsContent value="all">
                        {/* Character Grid */}
                        <h1>Personajes</h1>
                        <HeroGrid />
                    </TabsContent>
                    <TabsContent value="favorites">
                        {/* Character Grid Favorites */}
                        <h1>Favoritos</h1>
                        <HeroGrid />
                    </TabsContent>
                    <TabsContent value="heroes">
                        {/* Character Grid Heroes */}
                        <h1>Héroes</h1>
                        <HeroGrid />
                    </TabsContent>
                    <TabsContent value="villains">
                        {/* Character Grid Villains */}
                        <h1>Villanos</h1>
                        <HeroGrid />
                    </TabsContent>
                </Tabs>

                {/* Pagination */}
                <CustomPagination totalPages={8} />
            </>
        </>
    );
};