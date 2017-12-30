import React from 'react';

export default class InfoProduct extends React.Component {

  render() {
    return (
      <div>
      	<h2>{this.props.productState.name}</h2>
      	<h3>{this.props.productState.price}€</h3>  
      </div>
    );
  }
}
