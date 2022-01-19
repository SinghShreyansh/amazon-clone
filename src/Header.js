import React from 'react'
import './Header.css'
import { Link } from "react-router-dom"
import {useStateValue} from './StateProvider'
import { auth } from "./firebase"


function Header() {

    const [{basket,user},] = useStateValue();

    const handleAuthentication = () => {
        if (user){
            auth.signOut()

        }
    }
    return (
        <div className='header'>
            <div>
               <Link to="/">
                <img className="header__logo" src="https://d24v5oonnj2ncn.cloudfront.net/wp-content/uploads/2018/10/16030301/Amazon-Logo-Black.jpg" alt=""
                />
                </Link>
            </div>
            

            <div className="header__search">
                <input className="header__searchInput"
                type="text"/>
                
            
               <img className="header__searchIcon" src="https://img.icons8.com/ios/50/000000/search--v1.png" alt=""/>

            </div>
            
            <div className="header__nav">

            <Link to={!user && './login'}>
                <div className="header__option">
                    <span className="header__optionLineOne">
                       <small> Hello {!user?'Guest':user.email}</small>
                    </span>
                    <span className="header__optionLineTwo" onClick={handleAuthentication}>{user?'Sign Out':'Sign In'}</span>
                </div>
                </Link>

                <Link to='/orders'>
                <div className="header__option">
                <span className="header__optionLineOne">
                       <small> Returns</small>
                    </span>
                    <span className="header__optionLineTwo">Orders</span>
                </div>
                </Link>
              

                <div className="header__option">
                <span className="header__optionLineOne">
                       <small> Your</small>
                    </span>
                    <span className="header__optionLineTwo">Prime</span>

                </div>

                    <Link to="/checkout">
                <div className="optionBasket">
                    <img src="https://th.bing.com/th/id/R.60cbf64b7e91aad103319373e4aed277?rik=VkzUvR4GzOUzxg&riu=http%3a%2f%2fcdn.onlinewebfonts.com%2fsvg%2fimg_136006.png&ehk=6cIFKsoPCue9nG3umJhJhUemGHCuuVGIoCBzux4pcZw%3d&risl=&pid=ImgRaw&r=0" alt="" className="optionBasket__logo" />
                    <span className="header__optionLineTwo header__basketCount"> {basket?.length}</span>

                </div>
                    </Link>
            </div>
            
        </div>
    )
}

export default Header
