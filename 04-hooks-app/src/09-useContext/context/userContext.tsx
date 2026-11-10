import { createContext, useEffect, useState, type PropsWithChildren } from "react";
import { users, type User } from "../data/user-mock.data";

// interface UserContextProps {
//     children: React.ReactNode;
// }

type AuthStatus = 'checking' | 'authenticated' | 'no-authenticated';

interface UserContextProps {
    // State
    authStatus: AuthStatus;
    isAuthenticated: boolean;
    user: User | null;

    // Methods
    login: (userId: number) => boolean;
    logout: () => void;
}

export const UserContext = createContext({} as UserContextProps);

export const UserContextProvider = ({ children }: PropsWithChildren) => {

    const [authStatus, setAuthStatus] = useState<AuthStatus>('checking');
    const [user, setUser] = useState<User | null>(null);

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
        localStorage.setItem('userId', JSON.stringify(user.id));
        return true;
    };

    const handleLogout = () => {
        console.log('logout');
        setUser(null);
        setAuthStatus('no-authenticated');
        localStorage.removeItem('userId');
    };

    useEffect(() => {
        const userIdState = localStorage.getItem('userId');
        if (userIdState) {
            handleLogin(+userIdState);
            return;
        }
        handleLogout();
    }, []);

    return (
        <UserContext 
            value={{
                authStatus: authStatus,
                isAuthenticated: authStatus === 'authenticated',
                user: user,
                login: handleLogin,
                logout: handleLogout
            }}
        >
            { children }
        </UserContext>
    )
}
