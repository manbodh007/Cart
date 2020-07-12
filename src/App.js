import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';
import * as firebase from 'firebase';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [],
      loading:true
    }

    this.db = firebase.firestore();
  }

  componentDidMount(){
    // firebase
    //   .firestore()
    //   .collection('products')
    //   .get()
    //   .then((snapshot)=>{
    //        console.log(snapshot);
    //        snapshot.docs.map((doc)=>{
    //           console.log(doc.data);
    //           return '';
    //        });

    //        const products = snapshot.docs.map((doc)=>{
    //          const data = doc.data();
    //           data.id = doc.id;
    //          return data;
    //        });

    //        this.setState({
    //          products:products,
    //          loading : false
    //         });
    //   })

     // adding listner 
     this.db
     .collection('products')
    //  .where('price','==',1000)
     .orderBy('price','desc')  // order data in descending order
     .onSnapshot((snapshot)=>{
      console.log(snapshot);
      snapshot.docs.map((doc)=>{
         console.log(doc.data);
         return '';
      });

      const products = snapshot.docs.map((doc)=>{
        const data = doc.data();
         data.id = doc.id;
        return data;
      });

      this.setState({
        products:products,
        loading : false
       });
     });
}

  handleIncreaseQuantity = (item) => {
    const { products } = this.state;
    let index = products.indexOf(item);
    // products[index].qty += 1;
    // this.setState({
    //   products: products
    // })

    const docRef = this.db.collection('products').doc(products[index].id);
    
    docRef
      .update({
        qty:products[index].qty + 1
      }).then(()=>{
        console.log('update successfully');
      }).catch((error)=>{
          console.log('error in update value',error);
      })

  }

  handleDecreaseQuantity = (item) => {
    const { products } = this.state;
    let index = products.indexOf(item);

     if (products[index].qty <= 0)
         return;

    // this.setState({
    //   products: products,
    // });

    const docRef = this.db.collection('products').doc(products[index].id);
    
    docRef
      .update({
        qty:products[index].qty - 1
      }).then(()=>{
        console.log('update successfully');
      }).catch((error)=>{
          console.log('error in update value',error);
      })

  }

  handleDeleteProduct = (id) => {
    // const { products} = this.state;
    // let items = products.filter((item) => { return item.id !== id });

    // this.setState({
    //   products: items
    // });
    const docRef = this.db.collection('products').doc(id);
    docRef
      .delete()
      .then(()=>{
        console.log('deleted successfully');
      }).catch((error)=>{
          console.log('error in update value',error);
      })
      
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
        return '';
    })
    return cartTotal;
  }

  render() {

    const {products , loading} = this.state;
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
        {loading && <h1 style = {{textAlign:'center', fontFamily:'monospace'}}>loading...</h1>}
        <div style={{padding:10,fontSize:30}}>
          TOTAL:{this.getCartTotal()}
        </div>

      </div>
    )
  }
}

export default App;
