import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from './context/AuthContext';

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();

  // Show loading state while checking auth
  if (loading) {
    return <div>Loading...</div>; // Or your loading component
  }

  // Redirect to login if not authenticated, but save the attempted URL
  if (!user) {
    // Use replace: true to prevent back button issues
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default PrivateRoute;