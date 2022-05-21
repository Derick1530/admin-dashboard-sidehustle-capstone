import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import SideBar from './app/layouts/SideBar/SideBar';
import getCurrentUser from './app/helper/currentuser';
import { isExpired } from './app/helper/expired';
import Login from './app/screens/auth'
import { TeamMember } from './app/screens/teamMember';
import { Clients } from './app/screens/clients';
import { Products } from './app/screens/products';
import DashBoard from './app/screens/dashboard';

function App() {
  const location = useLocation()

  console.log(location)
  return (
    <div className="flex">

      <header className={location.pathname === "/login" ? 'hidden' : 'block'}>
        <SideBar />
      </header>
      <main className='ml-10 text-xl w-full p-4 h-screen overflow-y-scroll'>
        <div className=' p-4  mt-8 max-w-sm z-10 rounded-lg text-center bg-gray-900 font-bold text-amber-200 text-4xl'>
          {location.pathname === '/'
            ? 'DASHBOARD'
            : location.pathname.toUpperCase().replace('/', '')}
        </div>

        <Routes>
          <Route path="/login" element={
            <CheckAuth>
              <Login />
            </CheckAuth>
          } />
          <Route path="/" element={
            <RequireAuth>
              <DashBoard />
            </RequireAuth>
          } />
          <Route path="/clients" element={
            <RequireAuth>
              <Clients />
            </RequireAuth>
          } />
          <Route path="/products" element={
            <RequireAuth>
              <Products />
            </RequireAuth>
          } />
          <Route path="/team-members" element={
            <RequireAuth>
              <TeamMember />
            </RequireAuth>
          } />
          <Route
            path="*"
            element={<Navigate to="/" replace />}
          />
        </Routes>
      </main>
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
