import styled from "styled-components";

const Wrapper = styled.section`
  .section-center {
    display: grid;
    grid-template-columns: 1fr;
  }
  .house-listing {
    display: grid;
    place-items: center;
  }
  .image-house {
    display: grid;
    place-items: center;
    margin-top: 1rem;
  }
  .image {
    width: 90vw;
  }
`;
export default Wrapper;
