import  React from 'react';
import CartItem from './CartItem';

const Cart = (props)=>{

        return (
            <div className = 'cart'>
            {
              props.products.map((item)=>{
                  return <
                         CartItem 
                         product = {item} 
                         key = {item.id}
                         onIncreaseQuantity = {props.onIncreaseQuantity}
                         onDecreaseQuantity = {props.onDecreaseQuantity}
                         onDeleteProduct =    {props.onDeleteProduct}
                        />
              })
            }
            </div>
        )
    
}

export default Cart;