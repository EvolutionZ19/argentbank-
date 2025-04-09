import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import argentBankLogo from '../../assets/logo/argentBankLogo.png';

/**
 * Composant Header : affichage du logo et de la navigation en fonction de la page active
 * Le contenu change selon l'URL actuelle (page accueil, login, profil ou transactions)
 */
export default function Header() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const isUserPage = location.pathname === '/profile';
  const isSignInPage = location.pathname === '/login';
  const isTransactionsPage = location.pathname === '/transactions';

  // Récupère le prénom de l'utilisateur depuis le store Redux
  const getfirstName = useSelector((state) => state.user.firstName);

  return (
    <header>
      <nav className='main-nav'>
        {/* Accueil ou login : logo + bouton "Sign In" */}
        {isHomePage || isSignInPage ? (
          <>
            <a className='main-nav-logo' href='/'>
              <img
                className='main-nav-logo-image'
                alt='Argent Bank Logo'
                src={argentBankLogo}
              />
              <h1 className='sr-only'>Argent Bank</h1>
            </a>
            <div>
              <a className='main-nav-item' href='/login'>
                <i className='fa fa-user-circle'></i>
                Sign In
              </a>
            </div>
          </>
        ) : null}

        {/* Page profil : logo + nom + déconnexion + lien vers transactions */}
        {isUserPage ? (
          <>
            <a className='main-nav-logo' href='/'>
              <img
                className='main-nav-logo-image'
                alt='Argent Bank Logo'
                src={argentBankLogo}
              />
              <h1 className='sr-only'>Argent Bank</h1>
            </a>
            <div>
              <a className='main-nav-item'>
                <i className='fa fa-user-circle'></i>
                {getfirstName}
              </a>
              <a className='main-nav-item' href='/transactions'>
                <i className='fa fa-file-text'></i>
                Transactions
              </a>
              <a className='main-nav-item' href='/'>
                <i className='fa fa-sign-out'></i>
                Sign Out
              </a>
            </div>
          </>
        ) : null}

        {/* Page transactions : logo uniquement */}
        {isTransactionsPage ? (
          <>
            <a className='main-nav-logo' href='/'>
              <img
                className='main-nav-logo-image'
                alt='Argent Bank Logo'
                src={argentBankLogo}
              />
              <h1 className='sr-only'>Argent Bank</h1>
            </a>
          </>
        ) : null}
      </nav>
    </header>
  );
}
