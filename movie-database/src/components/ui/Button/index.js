// import styled components
import styled, { css } from "styled-components";

// Buat component button
const Button = styled.button`
  font-size: 1rem;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 10px;
  color: #fff;
  cursor: pointer;

  // Akses Props Variant
  background-color: ${(props) =>
    props.theme.colors[props.variant] || props.theme.colors["primary"]};

  // Jika ada props full, tambahkan css baru
  ${(props) =>
    props.full &&
    css`
      display: block;
      width: 100%;
    `} // PROPS SIZE, PADDING, MARGIN, BORDER RADIUS
`;

export default Button;
