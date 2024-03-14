import styled from "styled-components";

const Wrapper = styled.section`
  .section-center {
    display: grid;
    grid-template-columns: 1fr;
  }
  .house-listing {
    max-width: 500px;
    display: grid;
    place-items: center;
    margin: 2rem auto;
    border: 2px solid black;
    background-color: var(--primary-200);
    border-radius: var(--borderRadius);
  }
  .image-house {
    display: grid;
    place-items: center;
    /* margin-top: 1rem; */
  }
  .image {
    height: 150px;
    width: 276px;
  }
  .buttons {
    /* display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 0.5rem; */
    margin-bottom: 0.5rem;
  }
  /* @media only screen and (min-width: 768px) {
    .section-center {
      grid-template-columns: repeat(2, 1fr);
      column-gap: 1rem;
    }
  } */
`;
export default Wrapper;
