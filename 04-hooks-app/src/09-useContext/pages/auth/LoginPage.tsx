import { Link } from "react-router";

import { Button } from "@base-ui/react/button";
import { Input } from "@base-ui/react/input";

export const LoginPage = () => {
    return (
        <div className="flex flex-col items-center min-h-screen">
            <h1 className="text-4xl font-bold">Iniciar sesion</h1>
            <hr />

            <form className="flex flex-col gap-2 my-10">
                <Input type="number" placeholder="ID del usuario" />

                <Button type="submit"
                    className="bg-blue-500 px-4 py-2 gap-4 rounded">
                    Login
                </Button>
            </form>

            <Link to="/about">
                Volver a la página principal
            </Link>
        </div>
    )
}
