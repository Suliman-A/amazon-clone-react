import React from 'react'
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from './StateProvider';
import './Subtotal.css'

function Subtotal() {
  const [{ basket }, dispatch] = useStateValue();

    // calculate total price
    let total = 0;
    basket.forEach(item => {
      total = total + item.price;
    });


    return (
        <div className="subtotal">
            <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              {/* homework done */}
              <p>Subtotal ({basket?.length} items) : <strong>{value}</strong></p>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={total} // homework done 
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
        <button>Proceed to checkout</button>
        </div>
    )
}

export default Subtotal
