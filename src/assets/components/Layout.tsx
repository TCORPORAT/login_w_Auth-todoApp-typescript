import { useContext } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { AuthContext } from "../context";

export default function Layout() {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  const toggleBtn = () => {
    if (auth.user !== "") {
      auth.signout(() => navigate("/"));
    }
  };

  return (
    <>
      <header>
        {!auth.user ? <p>Hey There!</p> : <p> Welcome {auth.user}! </p>}
      </header>
      <nav className="layout">
        <ul className="layout_list">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/login" onClick={toggleBtn}>
              {auth.user !== "" ? "Logout" : "Login"}
            </Link>
          </li>
        </ul>
      </nav>

      <main>
        <Outlet />
      </main>
    </>
  );
}
