import React from 'react';

export default class EditProduct extends React.Component {

  render() {
    return (
      <div>
      	<form action={`http://localhost:8081/${this.props.productState._id}/update`} method="POST"> 
      		<input className="InputEditName" type="text" name="name" defaultValue={this.props.productState.name}/>
      		<br/>
      		<input className="InputEditPrice" type="text" name="price" defaultValue={this.props.productState.price}/>
      		<input type="submit" style={{display: 'none'}}/>
      	</form> 
      </div>
    );
  }
}
