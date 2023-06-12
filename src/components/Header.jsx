import React from 'react';
import './css/header.css';

const Header = (props) => {
  return (
   <>
     <div className='flex shopping'>
      <div className='cart' onClick={()=>props.handleShow(false)}>Book Shopping Cart</div>
      <div className='cart' onClick={()=>props.handleShow(true)}>
       Cart 
       <sup className='cart'>{props.count}</sup>
      </div>
     </div>
   </>
      

   
  )
}

export default Header
