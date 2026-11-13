import { Filter, Grid, Plus, Search, SortAsc } from "lucide-react";

// UI Components
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const SearchControls = () => {
    return (
        <div className="flex flex-col lg:flex-row gap-4 mb-8">
            {/* Search */}
            <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input placeholder="Search heroes, villains, powers, teams..." className="pl-12 h-12 text-lg" />
            </div>

            {/* Action buttons */}
            <div className="flex gap-2">
                <Button variant="outline" className="h-12 bg-transparent">
                    <Filter className="h-4 w-4 mr-2" />
                    Filtros
                </Button>

                <Button variant="outline" className="h-12 bg-transparent">
                    <SortAsc className="h-4 w-4 mr-2" />
                    Buscar por nombre
                </Button>

                <Button variant="outline" className="h-12 bg-transparent">
                    <Grid className="h-4 w-4" />
                </Button>

                <Button className="h-12">
                    <Plus className="h-4 w-4 mr-2" />
                    Agregar personaje
                </Button>
            </div>
        </div>
    );
};
