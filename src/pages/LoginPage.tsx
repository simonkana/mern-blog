import { Link } from "react-router-dom";

export default function LoginPage() {
  return (
    <>
      <h1 className="title">Login</h1>
      <form className="login">
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <Link to="/register">First time here?</Link>
        <button>Login</button>
      </form>
    </>
  );
}
