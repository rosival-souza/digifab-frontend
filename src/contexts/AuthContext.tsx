import { createContext, useContext, useState, ReactNode, useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface AuthContextType {
  user: string | null;
  token: string | null;
  login: (username: string, token?: string) => void;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const STORAGE_KEYS = {
  user: "authUser",
  token: "authToken",
  profile: "profile",
} as const;

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<string | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const navigate = useNavigate();

  // Inicializa estado a partir do localStorage
  useEffect(() => {
    const storedUser = localStorage.getItem(STORAGE_KEYS.user);
    const storedToken: any = localStorage.getItem(STORAGE_KEYS.token);
    if (storedUser) setUser(storedUser);
    if (storedToken) setToken(storedToken);
   
  }, []);

  const login = (username: string, tokenParam?: string) => {
    setUser(username);
    localStorage.setItem(STORAGE_KEYS.user, username);

    if (tokenParam) {
      setToken(tokenParam);
      localStorage.setItem(STORAGE_KEYS.token, tokenParam);
    }

    navigate("/dashboard"); // redireciona após login
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem(STORAGE_KEYS.user);
    localStorage.removeItem(STORAGE_KEYS.token);
    localStorage.removeItem(STORAGE_KEYS.profile);
    navigate("/authentication/login");
  };

  return (
    <AuthContext.Provider value={{ user, token, login, logout, isAuthenticated: !!(token || user) }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth precisa estar dentro de AuthProvider");
  return ctx;
};
