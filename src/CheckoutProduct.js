import React from 'react'
import './CheckoutProduct.css'
function CheckoutProduct( id, title, img, price, rating, ) {
    return (
        <div className="checkoutProduct">
            <img className="checkoutProduct__img" src={ img } alt=""></img>
            <div className="checkoutProduct__info">
                <p>{ title }</p>
                <p className="checkoutProduct__price">
                <small>$</small>
                <strong>{ price }</strong>
                </p>
                <div className="checkoutProduct__rating">
                    { Array(rating)
                    .fill()
                    .map((_, i) => (
                        <p>🌟</p>
                    ))}
                </div>         
            </div>
            {/* <button onClick={ removeFromBasket }>Remove from basket</button> */}
        </div>
    )
}

export default CheckoutProduct;
