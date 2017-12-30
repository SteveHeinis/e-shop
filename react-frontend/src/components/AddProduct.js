import React from 'react';

export default class AddProduct extends React.Component {

  render() {
    return (
      <div>
      	<form action="http://localhost:8081/addproduct" method="POST">
      		<input type="text" className="InputAddName" name="name" placeholder="Nom du produit"/>
      		<input type="text" className="InputAddPrice" name="price" placeholder="Prix"/>
      		<button>Ajouter</button>
      	</form>
      </div>
    );
  }
}
