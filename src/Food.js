import React from "react";
import PropTypes from "prop-types";

function Food({ propsname, propskorean, ratings }) {
  return (
    <div>
      {/* <div type="hidden"> {key}</div> */}
      <h1> {propsname}</h1>
      <h2>{propskorean}</h2>
      <h3>{ratings}/5</h3>
    </div>
  );
}

Food.potato = "hel";

export default Food;
