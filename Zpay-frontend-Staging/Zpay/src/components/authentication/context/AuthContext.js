import { createContext, useState, useEffect, useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  // Initial authentication check on mount only
  useEffect(() => {
    const checkAuthStatus = async () => {
      try {
        const token = localStorage.getItem("token");
        const storedUser = localStorage.getItem("user");

        if (token && storedUser) {
          // Set axios default header
          axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
          
          // Parse and set user data
          const userData = JSON.parse(storedUser);
          setUser(userData);
        }
      } catch (error) {
        console.error("Auth check failed:", error);
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    checkAuthStatus();
  }, []); // Run only on mount

  // Separate useEffect for handling route protection
  useEffect(() => {
    if (loading) return; // Don't handle redirects while checking auth status

    if (user && location.pathname === '/login') {
      navigate('/dashboard', { replace: true });
    } else if (!user && location.pathname !== '/login') {
      navigate('/login', { replace: true });
    }
  }, [user, loading, location.pathname, navigate]); // Only depend on auth state and location changes

  const login = async (email, password) => {
    try {
      setLoading(true);
      const response = await axios.post("http://localhost:4000/api/users/login", {
        email,
        password
      });

      const { token, username } = response.data;
      
      // Store auth data
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify({ email, username }));
      
      // Set axios default header
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      
      setUser({ email, username });
      
      // Use replace instead of push to prevent back button issues
      navigate('/dashboard', { replace: true });
    } catch (error) {
      const errorMessage = error.response?.data?.error || "Login failed. Please try again.";
      throw new Error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    delete axios.defaults.headers.common['Authorization'];
    setUser(null);
    navigate('/login', { replace: true });
  };

  return (
    <AuthContext.Provider value={{ 
      user, 
      login, 
      logout, 
      loading,
      isAuthenticated: !!user 
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};