import { Navigate } from 'react-router-dom';
import { useAdminAuth } from '../../context/AdminAuthContext';

/* Route guard only — no buttons here; login UI is AdminLogin.jsx */

export default function RequireAdmin({ children }) {
  const { authed } = useAdminAuth();
  if (!authed) {
    return <Navigate to="/admin/login" replace />;
  }
  return children;
}
