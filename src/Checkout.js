import React from 'react'
import './Checkout.css';
import Subtotal from './Subtotal';
import CheckoutProduct from './CheckoutProduct';
import { useStateValue} from './StateProvider'



function Checkout() {
    

    const [{basket,user},]= useStateValue();

    return (
        <div className="checkout">
         <div className="checkout__left">
             <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Launches/ILM/Fuji_ILM_Ship_en_US._CB665226464_.png" alt="" className="checkout__ad" />

             <div className="checkout__title">
                 <h3>Hello, {user?.email}</h3>
                    <h2>Welcome to Your Amazon Cart</h2>
                    
                    {basket.map(item =>
                        <CheckoutProduct
                        id={item.id}
                        image={item.image}
                        title={item.title}
                        rating={item.rating}
                        price={item.price}>
                            
                        </CheckoutProduct>
                        )}
                    {/* <BasketItem/> */}
                    {/* <BasketItem/> */}
                    {/* <BasketItem/> */}
              </div>  

             </div>  

             <div className="checkout__right">
                 <Subtotal/>
                 
             </div>

                    
        </div>
    )
}

export default Checkout
