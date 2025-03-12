import { FaBars } from 'react-icons/fa';
import Logo from './Logo';
import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg ">
      <div className="container">
        {/* Brand/logo */}
        <Logo />

        {/* Toggler button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <FaBars color="white" />
        </button>

        {/* Navbar items */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to="/">
                Dashboard
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/new">
                New Expense
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/reports">
                Reports
              </NavLink>
            </li>
          </ul>

          {/* Login/Logout buttons */}
          <div className="d-flex" role="search">
            <NavLink className="btn btn-sm btn-outline-light" to="/login">
              Login
            </NavLink>
            <NavLink
              className="btn btn-sm btn-outline-light mx-1"
              to="/register"
            >
              Register
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
