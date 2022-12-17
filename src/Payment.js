import React, { useState ,useEffect } from 'react'
import CheckoutProduct from './CheckoutProduct'
import './Payment.css'
import { useStateValue } from './StateProvider'
import {useNavigate} from "react-router-dom"
import {Link} from "react-router-dom"
import { CardElement ,useElements, useStripe } from '@stripe/react-stripe-js'
import CurrencyFormat from "react-currency-format"
import {getBasketTotal} from "./reducer"
import axios from './axios'
import { db } from './firebase'

function Payment() {

    const navigate= useNavigate()
    const [{basket,user},dispatch]=useStateValue()

    const stripe=useStripe()
    const elements= useElements()

    const [succeeded, setSucceeded] = useState(false)
    const [processing, setProcessing] = useState("")
   

    const [error,setError] = useState(null)
    const [disabled, setDisabled] = useState(true)
    const [clientSecret, setClientSecret] = useState(true)

  
  


    const handleChange=event => {
        // Listen for changes in the CardElement
        // and display any errors as the customer types their card details
         setDisabled(event.empty)
         setError(event.error ? event.error.message : "")
    }
    
    const loadScript = (src) => {
       return new Promise((resolve)=>{
       const script = document.createElement('script')
       script.src = src
       
       script.onload = () => {
       resolve(true)
       }
       
       script.onerror = () => {
        resolve(false)
        }
        
        document.body.appendChild(script)
        })
    }
    
    const displayRazorpay = async (amount) => {
      const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js')
      
      if(!res){
        alert("You are offline... Failed to load Razorpay SDK")
        return;
      }
      
      const options = {
          key: "rzp_test_8q4HUG7HQkYDGJ",
          currency: "USD",
          amount: amount * 100,
          name: "Shreyansh Singh",
          "description": "Thanks for purchasing",
          image: "https://d24v5oonnj2ncn.cloudfront.net/wp-content/uploads/2018/10/16030301/Amazon-Logo-Black.jpg",
          
          handler: function(response){
            alert("Payment is successful with payment id: "+response.razorpay_payment_id)
            // storing buy data to firebase cloud database
            db.collection('users').doc(user?.uid).collection('orders').doc(paymentIntent.id)
              .set({
                  basket : basket,
                  amount : amount,
                  created: response.razorpay_payment_id
              })
              
              dispatch({
                type : 'EMPTY_BASKET'
            })

            navigate('/orders',{replace: true})
             
            },
            
           prefill: {
             name: "Shreyansh Singh"
           }
           
            
          };
          
          const paymentObject = new window.Razorpay(options)
          paymentObject.open();
          
          
      }
    
    return (
        <div className="payment">
            <div className="payment__container">
                <h1>Checkout 👉 {<Link to='/checkout'> {basket?.length} items</Link>} </h1>

                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Delivery Address :</h3>
                    </div>
                    <div className="payment__address">
                        <p>{user?.email}</p>
                        <p>123 React Lane</p>
                        <p>Los Angeles, CA</p>

                    </div>
                </div>

                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Review items and delivery :</h3>
                    </div>
                    <div className="payment__items">
                        {basket.map(item =>
                        <CheckoutProduct
                        id={item.id}  
                        title={item.title}  
                        image={item.image}  
                        price={item.price}  
                        rating={item.rating} 
                        /> 
                            )}
                    </div>



                </div>
                <div className="payment__section">
                        <div className="payment__title">
                            <h3>Payment Method :</h3>
                        </div>
                        <div className="payment__details">
                            {/* Stripe magic will go*/}

                            <form onSubmit={handleSubmit}>
                                <CardElement onChange={handleChange}/>

                             <div className="payment__priceContainer">

                                 <CurrencyFormat
                                 renderText={(value)=>(<h3>Order Total: {value}</h3>)}
                                 decimalScale={2}
                                 value={getBasketTotal(basket)}
                                 displayType={"text"}
                                 thousandSeparator={true}
                                 prefix={"$"}

                                 />

                                 <button >
                                     <span onClick={(event)=>{event.preventDefault();
                                      displayRazorpay(getBasketTotal(basket))}}>
                                      :"Buy Now"</span>
                                 </button>
                             </div>

                               {/* Errors */}
                               {error && <div>{error}</div>}

                            </form>
                        </div>



                </div>

            </div>
            
        </div>
    )
}

export default Payment
