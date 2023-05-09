import {useContext} from 'react'
import { useNavigate, useLocation } from "react-router-dom";
import { AuthContext } from "../context";

export default function LoginPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const auth = useContext(AuthContext);

  const from = location.state?.from?.pathname || "/";

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const username = formData.get("username") as string;
    // console.log(location);
    auth.signin(username, () => {
      navigate(from, { replace: true });
    });
  }

  return (
    <div className="form_section">
      {from === "/dashboard" && <p>You must log in to view this page!</p>}
      {auth.user !== "" ? (
        <p>You are already logged in!</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <label>
            Username: <input name="username" type="text" />
          </label>
          <button type="submit">Login</button>
        </form>
      )}
    </div>
  );
}
