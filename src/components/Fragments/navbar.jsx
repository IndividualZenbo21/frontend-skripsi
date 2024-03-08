import './styles/navbar.css';

const Navbar = () => {
  return (
      <nav>
        <ul className="nav-links">
          <li><a href="#">User</a></li>
          <li><a href="#">Role</a></li>
        </ul>
        <div className="burger">Burger</div>
      </nav>
  );
};

export default Navbar;
