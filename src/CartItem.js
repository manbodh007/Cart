import React from 'react';

class CartItem extends React.Component{
    constructor(){
        super();
        this.state={
           title:'phone',
           price:1000,
           qty:1
        }
    }
    render(){

        const {title ,price, qty} = this.state;
        return (
            <div className="cart-item">
            <div className="left-block">
             <img style = {style.image}/>
            </div>
            <div className="right-block">
               <div style = {{fontSize:25}}>{title}</div>
               <div style = {{color:'#777'}}>Rs{price}</div>
               <div  style = {{color:'#777'}}>Qty:{qty}</div>
              <div className="cart-item-actions">
                  {/* {buttons} */}
                  <img alt = "plus" className ="action-icons" src = "https://image.flaticon.com/icons/svg/992/992482.svg"/>
                  <img alt = "minus" className = "action-icons" src = "https://image.flaticon.com/icons/svg/992/992514.svg"/>
                  <img alt = "delete" className="action-icons" src = "https://image.flaticon.com/icons/svg/833/833434.svg"/>
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