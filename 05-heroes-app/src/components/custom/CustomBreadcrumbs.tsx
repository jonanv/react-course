import { Link } from "react-router";
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
                    breadcrumbs.map((crumb) => (
                        <>
                            <BreadcrumbSeparator>
                                <SlashIcon />
                            </BreadcrumbSeparator>

                            <BreadcrumbItem className="text-black">
                                <BreadcrumbLink 
                                    render={<Link to={crumb.to}>{ crumb.label }</Link>} 
                                />
                            </BreadcrumbItem>
                        </>
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
