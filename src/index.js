import React from 'react';
import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
// import { createStore, applyMiddleware } from 'redux';

//import FoodList from './components/food_list';
// import reducers from './reducers';

//const createStoreWithMiddleware = applyMiddleware()(createStore);

const App = () => {
  return(
    <div>
      <div className="recipeTitle">List of Recipes</div>

    </div>
  )
}

ReactDOM.render(<App />, document.querySelector('.container'));
