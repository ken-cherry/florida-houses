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
  }
  .image-house {
    display: grid;
    place-items: center;
    margin-top: 1rem;
  }
  .image {
    height: 250px;
    width: 376px;
  }
`;
export default Wrapper;
