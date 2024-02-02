import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <Link to="/" className="logo">
        NFTaula.io Blog
      </Link>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/login">Sign In</Link>
        <Link to="/new-article">Write</Link>
      </nav>
    </header>
  );
}
