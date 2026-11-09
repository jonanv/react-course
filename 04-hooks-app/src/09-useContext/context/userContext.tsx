import { createContext, useEffect, useState, type PropsWithChildren } from "react";
import { users, type User } from "../data/user-mock.data";

// interface UserContextProps {
//     children: React.ReactNode;
// }

type AuthStatus = 'checking' | 'authenticated' | 'no-authenticated';

interface UserContextProps {
    // State
    authStatus: AuthStatus;
    user: User | null;

    // Methods
    login: (userId: number) => boolean;
    logout: () => void;
}

export const UserContext = createContext({} as UserContextProps);

export const UserContextProvider = ({ children }: PropsWithChildren) => {

    const [authStatus, setAuthStatus] = useState<AuthStatus>('checking');
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        const userState = localStorage.getItem('user-state');
        if (userState) {
            setUser(JSON.parse(userState));
        }
    }, [setUser]);

    const handleLogin = (userId: number) => {
        const user = users.find((user) => user.id === userId);
        if (!user) {
            console.log(`User not found ${ userId }`);
            setUser(null);
            setAuthStatus('no-authenticated');
            return false;
        }
        setUser(user);
        setAuthStatus('authenticated');
        localStorage.setItem('user-state', JSON.stringify(user));
        return true;
    };

    const handleLogout = () => {
        console.log('logout');
        setUser(null);
        setAuthStatus('no-authenticated');
    };

    return (
        <UserContext 
            value={{
                authStatus: authStatus,
                user: user,
                login: handleLogin,
                logout: handleLogout
            }}
        >
            { children }
        </UserContext>
    )
}
