import React from 'react';

const FoodProperties = (props) => {
  console.log(props);
  const foodItems = props.food.map((item, index) => {
    console.log('food item', item);
    return(
      <li key={index} className="list-group -item">

      </li>
    );
  });
  return(
    <ul>{foodItems}</ul>
  )
}

export default FoodProperties;
