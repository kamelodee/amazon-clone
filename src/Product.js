import React from 'react';
import {useStateValue} from './StateProvider'
 import './Product.css'
const Product = ({ id, title, price, rating, image }) => {
    const [{ },dispatch] = useStateValue()
    const addToBasket = () => {
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                id,
                title,
                price,
                rating,
                image
            }
        })
    }
    return (
        <div key={id} className="product"> 
            <div className="product__info">
            <p>{title}</p>
            <p className="product__price">
                <small>Ghc</small>
                <strong>{price}</strong>
            </p>
            <div  className="product_rating">
                {Array(rating).fill().map((_)=>(<p>⭐️</p>))}
            </div>
            </div>
           
           
                <img src={image} alt=""/>
           <button onClick={addToBasket}>add to busket</button>
        </div>
    );
}
 

 
export default Product;