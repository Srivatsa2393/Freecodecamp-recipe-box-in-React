import React from 'react';

const IngredientProperties = (props) => {
  const ingredients = props.showList.split(',').map((ingredient, index) => {
    return(
      <div key={index}>
        <li className="list-group-item">
          {ingredient}
        </li>
      </div>
    );
  });

  return <ul>{ingredients}</ul>
}

export default IngredientProperties;
