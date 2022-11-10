import React from 'react'
import FadeLoader from "react-spinners/FadeLoader";

const override = {
  display: "block",
  margin: "0 auto",
  position: "absolute",
  top: "60%",
  left: "45%",
  zIndex: "20"
};

const Spinner = () => {
  return (
    <FadeLoader
        color={"#36d7b7"}
        loading={true}
        cssOverride={override}
        size={100}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
  )
}

export default Spinner