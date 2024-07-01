import { createContext } from "react";


export const AuthContext = createContext({
    user: null,
    login: () => {},
    signup: () => {},
    logout: () => {},
    resetPassword: () => {},
    updateEmail: () => {},
    updatePassword: () => {},
    });

export const AuthProvider = ({ children }) => {
    return (
        const [user, setUser] = useState(null);
        const [loading, setLoading] = useState(true);
        const [error, setError] = useState(null);
        
        <AuthContext.Provider value={{ user }}>
            {children}
        </AuthContext.Provider>
    ); 
}