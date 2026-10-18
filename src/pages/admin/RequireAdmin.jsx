import { Navigate } from 'react-router-dom';
import { useAdminAuth } from '../../context/AdminAuthContext';
import { Button } from '../../components/ui/Button';

/* Route guard only: login UI is AdminLogin.jsx */

export default function RequireAdmin({ children }) {
  const { loading, session, isAdmin, logout, user } = useAdminAuth();
  if (loading) {
    return <div className="flex min-h-screen items-center justify-center text-slate-400">Checking your session…</div>;
  }
  if (!session) {
    return <Navigate to="/admin/login" replace />;
  }
  if (!isAdmin) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-slate-50 p-6 text-center">
        <h1 className="text-2xl font-bold text-primary-dark">No admin access</h1>
        <p className="max-w-md text-slate-600">
          {user?.email} is signed in but is not on the admin list. Ask an existing admin to add this email, then sign in again.
        </p>
        <Button onClick={logout}>Sign out</Button>
      </div>
    );
  }
  return children;
}
