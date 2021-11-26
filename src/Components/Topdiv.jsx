import React from "react";

function Topdiv() {
    const weight={
        fontWeight:"bold"
    }
  return (
    <>
    <div className="centering-div">
      <h1>How can we help you?</h1>
      <h3 style={weight}>Choose the category to find the help you need</h3>
      </div>
    </>
  );
}

export default Topdiv;
