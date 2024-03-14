import React from "react";
import { orlando, poinciana, kissimmee } from "../data";

const RemoveComponent = (id) => {
  return (
    <button className="btn remove-btn" onClick={(id) => handleRemove(id)}>
      Remove
    </button>
  );
};

export default RemoveComponent;
