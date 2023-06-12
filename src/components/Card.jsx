import React from 'react';
import pathsoffear from './images/pathsoffear.jpeg';
import bohinima from './images/bohinima.jpeg';
import girlwhoknow from './images/girlwhoknow.jpeg';
import growrich from './images/growrich.jpeg';
import heart from './images/heart.jpeg';
import powerofmind from './images/powerofmind.jpeg';
import secret from './images/secret.jpeg';
import story from './images/story.jpeg';
import thediary from './images/thediary.jpeg';
import vivekanand from './images/vivekanand.jpeg';
import './css/slider.css'

function Card(props) {
  return (
    <>
    <h2 className='heading'>{props.heading}</h2>
    <div className="cards">
        <div className='card'>
            <img src={pathsoffear} alt=''/>
            <h2 className='productname'>Book</h2>
            <h3 className='price'>Price: Rs. 200</h3>
            <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, delectus.</small>
        </div>
        <div className='card'>
            <img src={bohinima} alt=''/>
            <h2 className='productname'>Book</h2>
            <h3 className='price'>Price: Rs. 230</h3>
            <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, delectus.</small>
        </div>
        <div className='card'>
            <img src={girlwhoknow} alt=''/>
            <h2 className='productname'>Book</h2>
            <h3 className='price'>Price: Rs. 150</h3>
            <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, delectus.</small>
        </div>
        <div className='card'>
            <img src={growrich} alt=''/>
            <h2 className='productname'>Book</h2>
            <h3 className='price'>Price: Rs. 520</h3>
            <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, delectus.</small>
        </div>
        <div className='card'>
            <img src={heart} alt=''/>
            <h2 className='productname'>Book</h2>
            <h3 className='price'>Price: Rs. 200</h3>
            <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, delectus.</small>
        </div>
        <div className='card'>
            <img src={powerofmind} alt=''/>
            <h2 className='productname'>Book</h2>
            <h3 className='price'>Price: Rs. 160</h3>
            <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, delectus.</small>
        </div>
        <div className='card'>
            <img src={secret} alt=''/>
            <h2 className='productname'>Book</h2>
            <h3 className='price'>Price: Rs. 200</h3>
            <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, delectus.</small>
        </div>
        <div className='card'>
            <img src={story} alt=''/>
            <h2 className='productname'>Book</h2>
            <h3 className='price'>Price: Rs. 230</h3>
            <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, delectus.</small>
        </div>
        <div className='card'>
            <img src={thediary} alt=''/>
            <h2 className='productname'>Book</h2>
            <h3 className='price'>Price: Rs. 100</h3>
            <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, delectus.</small>
        </div>
        <div className='card'>
            <img src={vivekanand} alt=''/>
            <h2 className='productname'>Book</h2>
            <h3 className='price'>Price: Rs. 420</h3>
            <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, delectus.</small>
        </div>
    </div>
    </>
  )
}

export default Card
