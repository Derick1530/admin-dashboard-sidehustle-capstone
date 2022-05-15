import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import getCurrentUser from './app/helper/currentuser';
import { isExpired } from './app/helper/expired';
import Admin from './app/screens/admin';
import Login from './app/screens/auth'

function App() {


  return (
    <div className="">
      <header className="">
        <Routes>
          <Route path="/login" element={
            <CheckAuth>
              <Login />
            </CheckAuth>
          } />
          <Route path="/" element={
            <RequireAuth>
              <Admin />
            </RequireAuth>
          } />

        </Routes>
      </header>
    </div>
  )
}

const RequireAuth = ({ children }) => {
  let location = useLocation();
  if (isExpired()) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
};

const CheckAuth = ({ children }) => {
  let auth = getCurrentUser();
  let location = useLocation();
  if (auth) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }
  return children;
};

export default App
