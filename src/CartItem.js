import React from 'react';

const CartItem = (props)=>{

        const {title ,price, qty,img} = props.product;
        
        return (
            <div className="cart-item">
            <div className="left-block">
             <img style = {style.image} src = {img} alt ="failed"/>
            </div>
            <div className="right-block">
               <div style = {{fontSize:25}}>{title}</div>
               <div style = {{color:'#777'}}>Rs {price}</div>
               <div  style = {{color:'#777'}}>Qty {qty}</div>
              <div className="cart-item-actions">
                  {/* {buttons} */}
                  <img 
                      alt = "plus" 
                      className ="action-icons" 
                      src = "https://image.flaticon.com/icons/svg/992/992482.svg"
                      onClick = {()=>{props.onIncreaseQuantity(props.product)}}
                    />
                  <img 
                     alt = "minus" 
                     className = "action-icons" 
                     src = "https://image.flaticon.com/icons/svg/992/992514.svg"
                     onClick = {()=>{props.onDecreaseQuantity(props.product)}}
                  />
                  <img 
                    alt = "delete" 
                    className="action-icons" 
                    src = "https://image.flaticon.com/icons/svg/833/833434.svg"
                    onClick = {()=>{props.onDeleteProduct(props.product.id)}}
                    />
              </div>
            </div>
          </div>
        );
    
}

const style = {
    image:{
        height:130,
        width:130,
        borderRadius:4,
        background:'#ccc'
    }
}

export default CartItem;