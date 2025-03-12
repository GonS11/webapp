import { Link } from 'react-router-dom';

function Logo() {
  return (
    <Link className="navbar-brand" to="/">
      <img
        src="../../public/images/Logo.png"
        alt="Logo"
        width={48}
        height={48}
      />
    </Link>
  );
}

export default Logo;
