import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import argentBankLogo from "../../assets/logo/argentBankLogo.png";

/**
 * Composant Header global avec logo cliquable uniquement (sans texte doublon)
 */
function Header() {
  const navigate = useNavigate();
  const token = localStorage.getItem("authToken");
  const firstName = useSelector((state) => state.user.firstName);

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/login");
  };

  return (
    <header>
      <nav className="main-nav">
        {/* ✅ Logo seul, cliquable */}
        <Link className="main-nav-logo" to="/">
          <img
            className="main-nav-logo-image"
            src={argentBankLogo}
            alt="Argent Bank Logo"
          />
          {/* Le h1 est masqué pour l'accessibilité, pas visible visuellement */}
          <h1 className="sr-only">Argent Bank</h1>
        </Link>

        <div>
          {token ? (
            <>
              <Link className="main-nav-item" to="/profile">
                <i className="fa fa-user-circle"></i>
                {firstName}
              </Link>
              <button className="main-nav-item" onClick={handleLogout}>
                <i className="fa fa-sign-out"></i>
                Sign Out
              </button>
            </>
          ) : (
            <Link className="main-nav-item" to="/login">
              <i className="fa fa-user-circle"></i>
              Sign In
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Header;
