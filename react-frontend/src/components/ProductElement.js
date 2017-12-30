import React from 'react';

export default class ProductElement extends React.Component {

  render() {
    return (
      <div id="ProductElement">
      	<h1>{this.props.textEdit(this.props.index)}</h1>
      	<form action={`http://localhost:8081/${this.props.productState._id}/delete`} method="POST"> 
      		<button className="ButtonDeleteItem" >Supprimer</button>
      	</form>   
		<button className="ButtonEditItem" onClick={() => this.props.setEdit(this.props.index)}>Editer</button>
      </div>
    );
  }
}
