import React from 'react'
import './Checkout.css'
import CheckoutProduct from './CheckoutProduct'
import { useStateValue } from './StateProvider';
import Subtotal from './Subtotal'

function Checkout() {
    const [{ basket }, dispatch] = useStateValue();

    return (
        <div className="chekout">
            <div className="checkout__left">
                <div>
                    <h1 className="checkout__title">
                        Your Shopping Baket
                    </h1>
                { basket.map(item => (
                      <CheckoutProduct 
                      id={item.id}
                      title={item.title}
                      img={item.img}
                      price={item.price}
                      rating={item.rating}
                      />  
                    ))}
                </div>
            </div>
            <div className="checkout__right">
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout

