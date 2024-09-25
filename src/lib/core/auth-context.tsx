import React, { createContext, ReactNode, useEffect, useState } from 'react';
import axios from 'axios';

export const protectedRoutes = ['/dashboard'];

interface AuthContextType {
    isAuthenticated: boolean;
    loading: boolean;
    login: (email: string, password: string) => Promise<void>;
    logout: () => void;
    token: string | null;
    getMe: () => Promise<any>;
    userData: any;
}

export const AuthContext = createContext<AuthContextType | undefined>(
    undefined,
);

interface Props {
    children: ReactNode;
}

export const AuthProvider = ({ children }: Props) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [token, setToken] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);
    const [userData, setUserData] = useState<any>(null);

    useEffect(() => {
        const validateToken = async () => {
            const storedToken = localStorage.getItem('token');
            if (storedToken) {
                try {
                    await axios.post(
                        '/auth/validate',
                        {},
                        {
                            headers: { Authorization: `Bearer ${storedToken}` },
                        },
                    );
                    setIsAuthenticated(true);
                    setToken(storedToken);
                } catch {
                    console.log('Token is invalid');
                    setIsAuthenticated(false);
                    setToken(null);
                    localStorage.removeItem('token');
                }
            } else {
                setIsAuthenticated(false);
                setToken(null);
            }
            setLoading(false);
        };

        validateToken();
    }, []);

    const login = async (email: string, password: string) => {
        try {
            const response = await axios.post('/auth/login', {
                email,
                password,
            });
            const token = response.data.token;

            console.log(token);

            localStorage.setItem('token', token);
            setToken(token);
            setIsAuthenticated(true);
            window.location.href = '/dashboard';
        } catch (error) {
            console.error('Login failed:', error);
            throw new Error('Login failed');
        }
    };

    const logout = () => {
        localStorage.removeItem('token');
        setToken(null);
        setIsAuthenticated(false);
        window.location.href = '/sign-in';
    };

    const getMe = async () => {
        if (userData) return userData;

        try {
            const response = await axios.get('/api/users/me', {
                headers: { Authorization: `Bearer ${token}` },
            });
            setUserData(response.data);
            return response.data;
        } catch (error) {
            console.error('Failed to get user object:', error);
            throw new Error('Failed to get user object');
        }
    };

    return (
        <AuthContext.Provider
            value={{
                isAuthenticated,
                login,
                logout,
                token,
                loading,
                getMe,
                userData,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = React.useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
