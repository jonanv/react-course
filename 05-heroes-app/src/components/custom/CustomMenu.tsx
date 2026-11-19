import { Link, useLocation } from "react-router";

// Imports
import { cn } from "cn";

// UI Components
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from "../ui/navigation-menu";

export const CustomMenu = () => {
    const { pathname } = useLocation();

    const isActive = (path: string) => pathname === path;

    return (
        <NavigationMenu>
            <NavigationMenuList>

                {/* Home */}
                <NavigationMenuItem>
                    <NavigationMenuLink
                        render={<Link to="/" />}
                        active={isActive("/")}
                        className={cn(
                            "rounded-md p-2 m-1",
                            "data-active:bg-slate-200 data-active:hover:bg-slate-200 data-active:focus:bg-slate-200"
                        )}
                    >
                        Inicio
                    </NavigationMenuLink>
                </NavigationMenuItem>

                {/* Search */}
                <NavigationMenuItem>
                    <NavigationMenuLink
                        render={<Link to="/search" />}
                        active={isActive("/search")}
                        className={cn(
                            "rounded-md p-2 m-1",
                            "data-active:bg-slate-200 data-active:hover:bg-slate-200 data-active:focus:bg-slate-200"
                        )}
                    >
                        Buscar
                    </NavigationMenuLink>
                </NavigationMenuItem>

            </NavigationMenuList>
        </NavigationMenu>
    );
};