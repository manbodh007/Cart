import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [
        {
          title: 'Mobile Phone',
          price: 10000,
          img:'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80',
          qty: 1,
          id: 1,
        },
        {
          title: 'Watch',
          price: 999,
          img:'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1059&q=80',
          qty: 1,
          id: 2,
        },
        {
          title: 'Laptop',
          price: 99999,
          img:'https://images.unsplash.com/photo-1542393545-10f5cde2c810?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=701&q=80',
          qty: 1,
          id: 3,
        }

      ]

    }
  }

  handleIncreaseQuantity = (item) => {
    const { products } = this.state;
    let index = products.indexOf(item);
    products[index].qty += 1;
    this.setState({
      products: products
    })
  }

  handleDecreaseQuantity = (item) => {
    const { products } = this.state;
    let index = products.indexOf(item);

    if (products[index].qty > 0)
      products[index].qty -= 1;

    this.setState({
      products: products
    });
  }

  handleDeleteProduct = (id) => {
    const { products } = this.state;
    let items = products.filter((item) => { return item.id !== id });

    this.setState({
      products: items
    });
  }
  getCount = ()=>{
    const {products} = this.state;
    let count = 0;
    products.forEach((it)=>{
      count += it.qty; 
    })
    return count;
  }
  getCartTotal(){
    const {products} = this.state;
    let cartTotal = 0;
    products.map((product)=>{
        cartTotal = cartTotal + product.qty * product.price;
    })
    return cartTotal;
  }

  render() {

    const {products} = this.state;
    return (
      <div>
        <Navbar 
          count = {this.getCount()}
        />

        < Cart
          products={products}
          onIncreaseQuantity={this.handleIncreaseQuantity}
          onDecreaseQuantity={this.handleDecreaseQuantity}
          onDeleteProduct={this.handleDeleteProduct}
        />
        <div style={{padding:10,fontSize:30}}>
          TOTAL:{this.getCartTotal()}
        </div>

      </div>
    )
  }
}

export default App;
