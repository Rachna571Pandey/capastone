import React from 'react';
import './css/header.css';

const Productlists = ({product,addToCart}) => {
  return (
   <div className='flex'>
    {
        product.map((productItem,productIndex)=>{
            return<>
            <div style={{width:'50%'}}>
               <div className='product-item'>
                <img src={productItem.url} width={250} alt=''/>
                <p>{productItem.name}</p>
                <p>{productItem.category}</p>
                <p> Rs. {productItem.price}</p>
                <button 
                onClick={()=>addToCart(productItem)}>Add To Cart</button>
               </div>
            </div>
            </>
        })
    }
   </div>
  )
}

export default Productlists
