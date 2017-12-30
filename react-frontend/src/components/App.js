import React, { Component } from 'react';

// Communication with backend 
import request from 'request';


// Components 
import AddProduct from './AddProduct';
import ProductElement from './ProductElement';
import EditProduct from './EditProduct';
import InfoProduct from './InfoProduct';
import ProductsList from './ProductsList';

  class App extends Component {
    constructor(props) {
      super(props);
      this.state = {
      products : []
      };
    }

   componentDidMount() {
    request('http://localhost:8081/', (error, response, body) => {
      if(error) {console.log(error)}
      console.log(body);
      if (body) {
        this.setState({
          products: JSON.parse(body)
        });
      }
    })
  } 

  setEdit = (index) => {
    const changed = {...this.state.products[index], editing : !this.state.products[index].editing};
    this.state.products.splice(index, 1, changed); 
    this.setState({
      products : [...this.state.products]
    })
  }

  textEdit= (index) => {
    if ( this.state.products[index].editing === false ) {
      return <InfoProduct index={index} productState={{...this.state.products[index]}}/>
    }
    else {
     return <EditProduct index={index} productState={{...this.state.products[index]}}/>
    }
  }


  render() {

    const products = this.state.products.map((key, index) => <ProductElement 
      productState={{...this.state.products[index]}} 
      setEdit={this.setEdit}
      key={index} 
      index={index}
      textEdit={this.textEdit}/>)

    return (
        <div className="container" id="MainPage">
            <h1 className="TitleApp">E-SHOP</h1>
            <div id="AddProduct">
                <AddProduct/>
            </div>
            <div className="row">
                <div className="col-md-4"></div>
                <div className="col-md-4">
                    <ProductsList productElement={products}/>
                </div>
                <div className="col-md-4"></div>
            </div>
        </div>
    );
  }
}

export default App;
