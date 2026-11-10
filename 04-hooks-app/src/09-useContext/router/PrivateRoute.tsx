import { use, type JSX } from "react";

import { UserContext } from "../context/userContext";
import { Navigate } from "react-router";

interface Props {
    element: JSX.Element // React.ReactNode
    // element: React.ReactNode // React.ReactNode ----> Otra forma
}

export const PrivateRoute = ({ element }: Props) => {

    const { authStatus } = use(UserContext);

    if (authStatus === 'checking') {
        return (
            <div className="text-4xl font-bold">
                Loading...
            </div>
        )
    }

    if (authStatus === 'authenticated') {
        return element;
    }

    return <Navigate to='/login' replace />;
}
