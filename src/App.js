import { useState } from 'react';
import './App.css';
import Banner from './components/Banner';

import Header from './components/Header';
import Productlists from './components/Productlists';
import CartList from './components/CartList';





function App() {

  const [product, setproduct]=useState([
    {
      url:'https://rukminim1.flixcart.com/image/612/612/jx9aefk0/book/1/1/5/paths-of-fear-original-imafg97hg8setggt.jpeg?q=70',
      name:'Paths of Fear',
      category:'English, Paperback, unknow',
      price:'280'
    },
    {
      url:'https://rukminim1.flixcart.com/image/612/612/xif0q/book/0/8/6/spoken-english-guru-practice-exercises-book-original-imagjz6gyxn64drg.jpeg?q=70',
      name:'Spoken English Guru',
      category:'Paperback, Pooja Rana, Bikrant Rana',
      price:'250'
    },
    {
      url:'https://rukminim1.flixcart.com/image/612/612/kngd0nk0/book/l/y/5/think-and-grow-rich-original-imag24q73kz3ezhm.jpeg?q=70',
      name:'Think and Grow Rich',
      category:'English, Paperback, Hill Napoleon',
      price:'340'

    },
    {
      url:'https://rukminim1.flixcart.com/image/612/612/kgqvlow0/book/6/6/5/great-expectations-original-imafwwgwzg7kb5yw.jpeg?q=70',
      name:'Great Expectations',
      category:'English, Paperback, Dickens Charles',
      price:'430'
    },
    {
      url:'https://rukminim1.flixcart.com/image/612/612/kgqvlow0/book/6/9/6/the-jungle-book-original-imafwwgwe8ga2uz3.jpeg?q=70',
      name:'The Jungle Book',
      category:'English, Paperback, RUDYARD KIPLING',
      price:'147'

    },
    {
      url:'https://rukminim1.flixcart.com/image/612/612/kgqvlow0/book/2/2/5/three-men-in-a-boat-original-imafwwgwxx9ygmqr.jpeg?q=70',

      name:'Three Men in a Boat',
      category:'English, Paperback, Jerome Jerome K',
      price:'169',

    },

    {
      url:'https://rukminim1.flixcart.com/image/612/612/kgqvlow0/book/2/1/8/the-time-machine-original-imafwwgwhfprahka.jpeg?q=70',
      name:'The Time Machine',
      category:'English, Paperback, Wells H.G.',
      price:'367',

    },
    {
      url:'https://rukminim1.flixcart.com/image/612/612/kgqvlow0/book/6/8/9/pride-and-prejudice-original-imafwwgwyqjdru3z.jpeg?q=70',
      name:'Pride and Prejudice',
      category:'English, Paperback, Austen Jane',
      price:'146'
    }
   

  ])

const [cart,setCart]=useState([])
const [showCart,setShowCart]=useState(false)

const addToCart=(data)=>{
   setCart([...cart,{...data,quantity:1}])
}

const handleShow=(value)=>{
  setShowCart(value)
}

  return (
    <>
    <Header count={cart.length} handleShow={handleShow}/>
    

    {
      showCart? <CartList cart={cart}/>: <> <Banner/> 
      <Productlists  product={product} addToCart={addToCart}/>
      </>
    }
   
    
    
    
    </>
  );
}

export default App;
