import { Link } from "react-router";

import { Button } from "@/components/ui/button";

export const ProfilePage = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <h1 className="text-4xl font-bold">Perfil de usuario</h1>
            <hr />

            <pre className="my-4">
                { JSON.stringify({}, null, 2) }
            </pre>

            <Link to="/about">
                <Button variant="destructive">
                    Salir
                </Button>
            </Link>
        </div>
    )
}
