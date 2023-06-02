/**
 * Import CSS Module Footer.
 * Disimpan di object styles.
 */
import StyledFooter from "./Footer.styled";

function Footer() {
  /**
   * Menggunakan styles yang sudah diimport.
   * Memanggilnya menggunakan expression.
   */
  return (
    <StyledFooter>
      <footer>
        <h2>Movie App</h2>
        <p>Created by aufaroot18</p>
      </footer>
    </StyledFooter>
  );
}

export default Footer;
