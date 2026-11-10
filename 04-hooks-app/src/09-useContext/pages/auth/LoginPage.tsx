import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router";

import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { UserContext } from "@/09-useContext/context/userContext";

export const LoginPage = () => {

    const { login } = useContext(UserContext);
    const [userId, setUserId] = useState('');

    const navigate = useNavigate();

    const handleSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
        event.preventDefault();
        const result = login(+userId);

        if (!result) {
            toast.error('Usuario no encontrado');
            return;
        }

        toast.success('Login exitoso');
        navigate('/profile');
    }

    return (
        <div className="flex flex-col items-center min-h-screen">
            <h1 className="text-4xl font-bold">Iniciar sesion</h1>
            <hr />

            <form className="flex flex-col gap-2 my-10"
                onSubmit={handleSubmit}>
                <Input type="number" placeholder="ID del usuario"
                    value={userId}
                    onChange={(event) => setUserId(event.target.value)}
                />

                <Button type="submit"
                    className="bg-blue-500 px-4 py-2 gap-4 rounded">
                    Login
                </Button>
            </form>

            <Link to="/about">
                <Button variant="ghost">
                    Volver a la página principal
                </Button>
            </Link>
        </div>
    )
}
