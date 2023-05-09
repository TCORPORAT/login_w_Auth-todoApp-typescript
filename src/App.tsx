import React from "react";
import {
  Routes,
  Route,
  useLocation,
  Navigate,
} from "react-router-dom";
import Layout from "./assets/components/Layout";
import Dashboard from "./assets/components/Dashboard";
import LoginPage from "./assets/components/Login";
import { AuthProvider, AuthContext } from "./assets/context";
import "./App.css";



export default function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route element={<Layout />}>
        <Route path="/" element={<Welcome />} />
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/dashboard"
            element={
              <RequireAuth>
                <Dashboard />
              </RequireAuth>
            }
          />
        </Route>
      </Routes>
    </AuthProvider>
  );
}


function RequireAuth({ children }: { children: React.JSX.Element }) {
  const auth = React.useContext(AuthContext);
  const location = useLocation();

  console.log('auth=>', auth);

  if (!auth.user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}

function Welcome() {
  return (<p>Welcome to the Application!</p>)
}


