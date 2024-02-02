import { Link } from "react-router-dom";

export default function RegisterPage() {
  return (
    <>
      <h1 className="title">Register</h1>
      <form className="register">
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <Link to="/login">Already registered?</Link>
        <button>Register</button>
      </form>
    </>
  );
}
