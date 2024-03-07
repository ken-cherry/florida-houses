import React from "react";
import Wrapper from "../assets/wrappers/LandingPage";
import house from "../assets/house.svg";

const LandingPage = () => {
  return (
    <>
      <Wrapper>
        <div className="section-center">
          <h2>Brenda and Larry's house search</h2>
        </div>
        <div className="image-center">
          <img src={house} alt="house" className="image-house" />
        </div>
      </Wrapper>
    </>
  );
};

export default LandingPage;
