import { useLocation, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import argentBankLogo from "../../assets/logo/argentBankLogo.png";

/**
 * Composant Header : affiche la navigation selon la page active
 * Utilise React Router pour la navigation sans rechargement
 */
export default function Header() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const isUserPage = location.pathname === "/profile";
  const isSignInPage = location.pathname === "/login";
  const isTransactionsPage = location.pathname === "/transactions";

  const getfirstName = useSelector((state) => state.user.firstName);

  return (
    <header>
      <nav className="main-nav">
        {(isHomePage || isSignInPage) && (
          <>
            <Link className="main-nav-logo" to="/">
              <img
                className="main-nav-logo-image"
                alt="Argent Bank Logo"
                src={argentBankLogo}
              />
              <h1 className="sr-only">Argent Bank</h1>
            </Link>
            <div>
              <Link className="main-nav-item" to="/login">
                <i className="fa fa-user-circle"></i>
                Sign In
              </Link>
            </div>
          </>
        )}

        {isUserPage && (
          <>
            <Link className="main-nav-logo" to="/">
              <img
                className="main-nav-logo-image"
                alt="Argent Bank Logo"
                src={argentBankLogo}
              />
              <h1 className="sr-only">Argent Bank</h1>
            </Link>
            <div>
              <Link className="main-nav-item" to="/profile">
                <i className="fa fa-user-circle"></i>
                {getfirstName}
              </Link>
              <Link className="main-nav-item" to="/transactions">
                <i className="fa fa-file-text"></i>
                Transactions
              </Link>
              <Link className="main-nav-item" to="/login" onClick={() => localStorage.removeItem("authToken")}>
                <i className="fa fa-sign-out"></i>
                Sign Out
              </Link>
            </div>
          </>
        )}

        {isTransactionsPage && (
          <>
            <Link className="main-nav-logo" to="/">
              <img
                className="main-nav-logo-image"
                alt="Argent Bank Logo"
                src={argentBankLogo}
              />
              <h1 className="sr-only">Argent Bank</h1>
            </Link>
          </>
        )}
      </nav>
    </header>
  );
}
