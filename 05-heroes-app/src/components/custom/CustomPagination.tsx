import { useEffect } from "react";

// Imports
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react";

// UI Components
import { Button } from "../ui/button";
import { useSearchParams } from "react-router";


interface Props {
    totalPages: number;
    limit?: number;
}

export const CustomPagination = ({ totalPages }: Props) => {

    const [searchParams, setSearchParams] = useSearchParams();

    const queryPage = searchParams.get('page') ?? '1';
    const parsedPage = Number(queryPage);

    // Válida si es entero, >= 1 y no supera el total de páginas
    const isValidPage =
        Number.isInteger(parsedPage) &&
        parsedPage >= 1 &&
        (totalPages === 0 || parsedPage <= totalPages);

    const page = isValidPage ? parsedPage : 1;
    
    const handleChangePage = (newPage: number) => {
        if (newPage < 1 || newPage > totalPages) return;

        setSearchParams((prev) => {
            const params = new URLSearchParams(prev);
            params.set('page', newPage.toString());
            return params;
        });
    };

    useEffect(() => {
        if (queryPage === null || isValidPage) return;

        setSearchParams((prev) => {
            const params = new URLSearchParams(prev);
            params.set('page', '1');
            return params;
        }, { replace: true });
    }, [queryPage, isValidPage, setSearchParams]);

    return (
        <div className="flex items-center justify-center space-x-2">
            <Button variant="outline" size="sm" 
                disabled={ page === 1 }
                onClick={() => handleChangePage(page - 1)}>
                <ChevronLeft className="h-4 w-4" />
                Anterior
            </Button>

            {
                Array.from({ length: totalPages }).map((_, index) => (
                    <Button 
                        variant={ index + 1 === page ? "default" : "outline" }
                        size="sm" 
                        key={index}
                        onClick={() => handleChangePage(index + 1)}
                    >
                        { index + 1 }
                    </Button>
                ))
            }

            <Button variant="ghost" size="sm" disabled>
                <MoreHorizontal className="h-4 w-4" />
            </Button>

            <Button variant="outline" size="sm"
                disabled={ page === totalPages }
                onClick={() => handleChangePage(page + 1)}>
                Siguiente
                <ChevronRight className="h-4 w-4" />
            </Button>
        </div>
    );
};
