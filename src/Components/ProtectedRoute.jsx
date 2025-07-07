import { Navigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../Firebase/Firebase'; // Make sure this path is correct

function ProtectedRoute({ children }) {
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (user) 
  {
    return children;
  } else 
  {
    return <Navigate to="/" />;
  }
}

export default ProtectedRoute;

