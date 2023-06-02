/**
 * Import CSS Module Navbar.
 * Disimpan di object styles.
 */
import StyledNavabar from "./Navbar.styled";
// Import Link dari React Router
import { Link } from "react-router-dom";

function Navbar() {
  /**
   * Menggunakan styles yang sudah diimport.
   * Memanggilnya menggunakan expression.
   */
  return (
    <StyledNavabar>
      <nav>
        <div>
          <h1>Movie App</h1>
        </div>
        <div>
          {/*
           * Membuat Link/Navigasi.
           * Menggunakan Link Component dari React Router
           */}
          <ul>
            <li>
              <Link className="navbar__link" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="navbar__link" to="/movie/create">
                Add Movie
              </Link>
            </li>
            <li>
              <Link className="navbar__link" to="/movie/popular">
                Popular
              </Link>
            </li>
            <li>
              <Link className="navbar__link" to="/movie/now">
                Now Playing
              </Link>
            </li>
            <li>
              <Link className="navbar__link" to="/movie/top">
                Top Rated
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </StyledNavabar>
  );
}

export default Navbar;
