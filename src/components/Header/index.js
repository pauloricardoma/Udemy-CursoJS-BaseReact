import { Link } from 'react-router-dom';
import { Nav } from './styled';
import { FaHome, FaUserAlt, FaSignInAlt } from 'react-icons/fa';

export default function Header() {
  return (
    <Nav>
      <Link to="/">
        <FaHome size={24} />
      </Link>
      <Link to="/login">
        <FaUserAlt size={24} />
      </Link>
      <Link to="/ashdas">
        <FaSignInAlt size={24} />
      </Link>
    </Nav>
  );
}
