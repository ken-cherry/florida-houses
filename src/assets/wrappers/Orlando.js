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
    margin-top: 2rem;
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
    height: 250px;
    width: 376px;
  }
  @media only screen and (min-width: 508px) {
    .section-center {
      grid-template-columns: repeat(2, 1fr);
      column-gap: 1rem;
    }
  }
`;
export default Wrapper;
