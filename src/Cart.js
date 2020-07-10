import  React from 'react';
import CartItem from './CartItem';

class Cart extends React.Component{

      constructor(){
        super();
        this.state = {
            products:[
                {
                  title:'Phone',
                  price : 10000,
                  qty : 1,
                  id : 1,
                },
                {
                  title:'Watch',
                  price : 999,
                  qty : 1 ,
                  id : 2, 
                },
                {
                  title:'Laptop',
                  price : 99999,
                  qty : 1,
                  id : 3,
                }
      
              ]
    
          }
      }

      handleIncreaseQuantity = (item)=>{
          const {products} = this.state;
          let index = products.indexOf(item);
          products[index].qty +=1;
          this.setState({
             products:products
          })
      }

      handleDecreaseQuantity = (item)=>{
          const {products} = this.state;
          let index = products.indexOf(item);

          if(products[index].qty>0)
          products[index].qty -=1;

          this.setState({
              products:products
          });
      }

      handleDeleteProduct = (id)=>{
          const {products} = this.state;
          let items = products.filter((item)=>{return item.id!==id});

          this.setState({
              products:items
          });
      }
      

    render(){
        return (
            <div className = 'cart'>
            {
              this.state.products.map((item)=>{
                  return <
                         CartItem 
                         product = {item} 
                         key = {item.id}
                         onIncreaseQuantity = {this.handleIncreaseQuantity}
                         onDecreaseQuantity = {this.handleDecreaseQuantity}
                         onDeleteProduct =  {this.handleDeleteProduct}
                        />
              })
            }
            </div>
        )
    }
}

export default Cart;