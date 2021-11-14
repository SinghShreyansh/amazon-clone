import React from 'react'
import './CheckoutProduct.css'
import { useStateValue } from "./StateProvider";

function CheckoutProduct({id,image,title,price,rating,hideButton}) {
    const [{ basket }, dispatch] = useStateValue();

    const removeFromBasket = () => {
        // remove the item from the basket
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        })
    }
    return (
        <div className="checkoutProduct">
            <img src={image} alt="" className="checkoutProduct__image" />
            
            <div className="checkoutProduct__Info">
                <p className="checkoutProduct__title">{title}</p>
                <div className="checkoutProduct__Price">
                <small>$</small>
                <strong>{price}</strong>

                </div>
                <div className="checkoutProduct__Rating">
                {Array(rating).fill().map((_, i) => (
                    <p>⭐</p>
                    ))}
                  </div>
                  {!hideButton && <button className="REMOVE_FROM_BASKET" onClick={removeFromBasket}> Remove from Basket</button>}
                  
            </div>
        </div>
    )
}

export default CheckoutProduct
