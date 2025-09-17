import { NavLink, useLocation } from 'react-router-dom';
import cn from 'classnames';

export const Navbar = () => {
  const { pathname } = useLocation();
  const isHomeActive = pathname === '/';
  const isPeopleActive = pathname.startsWith('/people');

  return (
    <nav
      data-cy="nav"
      className="navbar is-fixed-top has-shadow"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="container">
        <div className="navbar-brand">
          <NavLink
            className={cn('navbar-item', {
              'has-background-grey-lighter': isHomeActive,
            })}
            to="/"
          >
            Home
          </NavLink>

          <NavLink
            className={cn('navbar-item', {
              'has-background-grey-lighter': isPeopleActive,
            })}
            to="/people"
          >
            People
          </NavLink>
        </div>
      </div>
    </nav>
  );
};
