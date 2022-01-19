
import './App.css';
import Header from './Header';
import Home from './Home';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Checkout from "./Checkout";
import Login from './Login';
import { useStateValue } from './StateProvider'
import { auth } from './firebase'
import { useEffect } from "react"
import Payment from './Payment';
import { loadStripe } from "@stripe/stripe-js"
import { Elements } from "@stripe/react-stripe-js"
import Orders from './Orders'

const promise =loadStripe("pk_test_51Jv4HASC2WBqFweclOWhWnZN1VXKLnruvhLlK879NuCs47UP32rqcgzrnmeYC3Blki8Soh595J1Chb4NlmP97Zum00Mft1RtKU")
  

function App() {
  const[{},dispatch]=useStateValue()

   useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
    

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    <Router>
    <div className="app">
     
      <Header/>
    {/* <Elements stripe={promise} >
      <Payment/>
    </Elements> */}
    
    <Routes>
    
      <Route path='/login' element={<Login/>}>  </Route>
     <Route exact path='/payment' element={<Elements stripe={promise} >
      <Payment/>
    </Elements>}></Route>
    
     <Route exact path="/" element={<Home/>}   />
     <Route exact path='/orders' element={<Orders/>} />
    
        <Route path="/checkout" element={<Checkout/>} />
     
       
     </Routes>
    
    </div>
    </Router>
  );
}

export default App;
