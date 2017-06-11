import React from 'react';

class Example extends React.Component{
  constructor(this.props){
    super(props);
    const { food, ingredients } = props.item;
    this.state = {
      food,
      ingredients
    };
  }

  handleClick({ food, ingredients }){
    alert(food + ': \n' + ingredients);
  }

  render() {
    return(
      <div className="container">
        <button
          type="button"
          className="btn btn-info"
          onClick={() => this.handleClick(this.props.item)}>
          {this.props.item.food}
        </button>
      </div>
    );
  }
}
