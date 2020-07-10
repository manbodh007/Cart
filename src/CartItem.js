import React from 'react';

class CartItem extends React.Component{
    
    IncreaseQuantity = ()=>{
        this.setState((prevState)=>{
             return {
                 qty : prevState.qty + 1,
                 price : prevState.price + 999
             }
        })
    }

    DecreaseQuantity = ()=>{
        this.setState((prevState)=>{
            if(prevState.qty===0)
                return;
            return {
                qty : prevState.qty - 1,
                price : prevState.price - 999
            }
        })
    }


    render(){
        
        const {title ,price, qty} = this.props.product;
        
        return (
            <div className="cart-item">
            <div className="left-block">
             <img style = {style.image}/>
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
                      onClick = {()=>{this.props.onIncreaseQuantity(this.props.product)}}
                    />
                  <img 
                     alt = "minus" 
                     className = "action-icons" 
                     src = "https://image.flaticon.com/icons/svg/992/992514.svg"
                     onClick = {()=>{this.props.onDecreaseQuantity(this.props.product)}}
                  />
                  <img 
                    alt = "delete" 
                    className="action-icons" 
                    src = "https://image.flaticon.com/icons/svg/833/833434.svg"
                    onClick = {()=>{this.props.onDeleteProduct(this.props.product.id)}}
                    />
              </div>
            </div>
          </div>
        );
    }
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