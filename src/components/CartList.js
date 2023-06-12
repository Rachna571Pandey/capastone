// import React from 'react';
// import './css/header.css';

// const CartList = ({cart}) => {
//   return (
//     <div>
//       {
//         cart.map((cartItem,cartIndex)=>{
//             return(
//                 <>
//                 <div>
//                     <img src={cartItem.url} width={90} alt=''/>
//                     <span>{cartItem.name}</span>
//                     <button>-</button>
      //               <span>{cartItem.quantity}</span>
      //               <button>+</button>
      //               <span> Rs. {cartItem.price}</span>
      //           </div>
      //           </>
      //       )
      //   })
      // }

//       <p>
//         {
//           cart.map(item=>item.price).reduce((total,value)=>total+value,0)
//         }
//       </p>
//     </div>
//   )
// }

// export default CartList


import { useEffect, useState } from 'react';
import './css/header.css';

function CartList({ cart }) {

    const [CART, setCART] = useState([])

    useEffect(() => {
        setCART(cart)
    }, [cart])

    return (
      <div>
          {
              CART?.map((cartItem, cartindex) => {
                  return (
                      <div>
                          <img src={cartItem.url} width={80} />
                          <span> {cartItem.name} </span>
                          <button
                          onClick={() => {
                            const _CART = CART.map((item, index) => {
                                return cartindex === index ? { ...item, quantity: item.quantity > 0 ? item.quantity - 1 : 0 } : item
                            })
                            setCART(_CART)
                        }}
                    >-</button>
                    <span> {cartItem.quantity} </span>
                    <button
                                onClick={() => {
                                    const _CART = CART.map((item, index) => {
                                        return cartindex === index ? { ...item, quantity: item.quantity + 1 } : item
                                    })
                                    setCART(_CART)
                                }}
                            >+</button>
                            <span> Rs. {cartItem.price * cartItem.quantity} </span>
                        </div>
                         )
                        })
                    }
        
                    <p> Total  <span></span>
                        {
                            CART.map(item => item.price * item.quantity).reduce((total, value) => total + value, 0)
                        }
                    </p>
                </div >
            )
        }
        
        export default CartList