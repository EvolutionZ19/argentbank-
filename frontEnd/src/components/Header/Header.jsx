import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import argentBankLogo from '../../assets/logo/argentBankLogo.png';


/**
 * Header Component
 * @returns {JSX.Element} Header Component
 */
export default function Header() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const isUserPage = location.pathname === '/profile';
  const isSignInPage = location.pathname === '/login';
  const isTransactionsPage = location.pathname === '/transactions';

  const getfirstName = useSelector((state) => state.user.firstName);

  return (
    <header>
      <nav className='main-nav'>
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
              <a className='main-nav-item' href='/'>
                <i className='fa fa-sign-out'></i>
                Sign Out
              </a>
            </div>
          </>
        ) : null}
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
