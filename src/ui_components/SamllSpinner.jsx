import React from 'react'

import ClipLoader from "react-spinners/ClipLoader";

const override =  {
    display: "block",
    borderColor: "white",
  };

const SamllSpinner = () => {
  return (
    <ClipLoader
        cssOverride={override}
        size={30}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
  )
}

export default SamllSpinner