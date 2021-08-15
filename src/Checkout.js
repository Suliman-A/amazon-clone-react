import React from 'react'
import './Checkout.css'
import Subtotal from './Subtotal'

function Checkout() {
    return (
        <div className="chekout">
            <div className="checkout__left">
                <h1 className="checkout__title">
                    Your Shopping Baket
                </h1>
                <div className="checkout__items">
                    {/* items */}
                    {/* items */}
                    {/* items */}
                    {/* items */}
                </div>
            </div>
            <div className="checkout__right">
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout

