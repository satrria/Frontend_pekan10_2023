// import styled from "styled-components";

// // Membuat Styled Component Movie
// const StyledHero = styled.div`
//   margin: 5rem auto;
//   padding: 1rem;
//  c
//   section {
//     display: flex;
//     flex-direction: column;
//     text-align: center;
//   }
//     /* Medium Screen */
//     @media (min-width: 768px) {
  
//     }
//     /* Large Screen */
//     @media (min-width: 992px){
//         max-width: 1200px;
//         section {
//             flex-direction: row;
//             justify-content: space-between;
//             align-items: center;
//             text-align: left;
//         }
//     }
// `;

// const StyledHeroLeft = styled.div`
//     margin-bottom: 1rem;
//     h2 {
//         color: #4361ee;
//         margin-bottom: 1rem;
//         font-size: 2.44rem;
//     }
//     h3 {
//         color: #b5179e;
//         margin-bottom: 1rem;
//         font-size: 1.59rem;
//     }
//     p {
//         color: #64748b;
//         margin-bottom: 1rem;
//     }
//     /* Medium Screen */
//     @media (min-width: 768px) {
  
//     }
//     /* Large Screen */
//     @media (min-width: 992px){
//         flex-basis: 40%;
//     }

// `;

// const StyledHeroRight = styled.div`
//     img {
//         max-width: 100%;
//         height: auto;
//         border-radius: 25px;
//     }

//     @media (min-width: 992px){
//         flex-basis: 60%;
//     }
// `;

// export default { StyledHero, StyledHeroLeft, StyledHeroRight };

import styled from "styled-components";

// Membuat Styled Component Hero
const StyledHero = styled.div`
  margin: 5rem auto;
  padding: 1rem;
  .hero {
    display: flex;
    flex-direction: column;
    text-align: center;
  }

  .hero__left {
    margin-bottom: 1rem;
  }

  .hero__title {
    color: #4361ee;
    margin-bottom: 1rem;
    font-size: 2.44rem;
  }

  .hero__genre {
    color: #b5179e;
    margin-bottom: 1rem;
    font-size: 1.59rem;
  }

  .hero__description {
    color: #64748b;
    margin-bottom: 1rem;
  }

  .hero__image {
    max-width: 100%;
    height: auto;
    border-radius: 25px;
  }
  /* Medium Screen */
@media (min-width: 768px) {
  /*
   * Nothing TODO Here.
   * We dont change style Hero. 
   */
}

/* Large Screen */
@media (min-width: 992px) {
    max-width: 1200px;

  .hero {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    text-align: left;
  }

  .hero__left {
    flex-basis: 60%;
  }

  .hero__right {
    flex-basis: 40%;
  }
}
`;

export default StyledHero;

