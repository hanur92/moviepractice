import React from "react";
import Food from "./FoodNOTUSE";
import PropTypes from "prop-types";

const FoodList = [
  { num: 1, name: "kimchi", korean: "김치", rating: 3 },
  { num: 2, name: "kimchi2", korean: "김치2", rating: 3.2 },
  { num: 3, name: "kimchi3", korean: "김치3", rating: 3.5 },
  { num: 4, name: "kimchi4", korean: "김치4", rating: 3.9 },
];

const renderFood = (List) => {
  // console.log(List);
  return (
    <Food
      key={List.num}
      propsname={List.name}
      propskorean={List.korean}
      ratings={List.rating}
    />
  );
};

Food.propTypes = {
  propsname: PropTypes.string.isRequired,
  propskorean: PropTypes.string.isRequired,
  ratings: PropTypes.number.isRequired,
};

function App() {
  return (
    <div className="App">
      {console.log(renderFood)}
      {FoodList.map(renderFood)}
    </div>
  );
}

export default App;
