import { Link } from "react-router";

// Imports
import { SlashIcon } from "lucide-react";

// UI Components
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

interface Breadcrumb {
    label: string;
    to: string;
}

interface Props {
    currentPage: string;
    breadcrumbs?: Breadcrumb[]
}

export function CustomBreadcrumbs({ currentPage, breadcrumbs = [] }: Props) {
    return (
        <Breadcrumb className="my-5">
            <BreadcrumbList>

                <BreadcrumbItem>
                    <BreadcrumbLink render={<Link to="/">Inicio</Link>} />
                </BreadcrumbItem>

                {
                    breadcrumbs.map((crumb, index) => (
                        <div className="flex items-center" key={index}>
                            <BreadcrumbSeparator>
                                <SlashIcon />
                            </BreadcrumbSeparator>

                            <BreadcrumbItem className="text-black ml-2">
                                <BreadcrumbLink 
                                    render={<Link to={crumb.to}>{ crumb.label }</Link>} 
                                />
                            </BreadcrumbItem>
                        </div>
                    ))
                }

                <BreadcrumbSeparator>
                    <SlashIcon />
                </BreadcrumbSeparator>

                <BreadcrumbItem>
                    <BreadcrumbLink render={<Link to="/">{ currentPage }</Link>} />
                </BreadcrumbItem>

            </BreadcrumbList>
        </Breadcrumb>
    )
}
