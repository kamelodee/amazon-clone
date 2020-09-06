import React from 'react';

import { Link } from 'react-router-dom';

import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { useStateValue } from './StateProvider'
import { auth } from './Firebase';
import { Email } from '@material-ui/icons';
const Header = () => {
    const [{   basket,user }] = useStateValue()
    const login = () => {
        if (user) {
        auth.signOut()
    }
    }
    return (
        <nav className="header">
            <Link className="header__link" to="/">
           <img className="header__logo" src="https://www.pinclipart.com/picdir/big/358-3584545_amazon-web-services-logo-png-transparent-svg-vector.png" alt="" srcset=""/>
            </Link>
            
                <div className="header__search">
                <input className="header__searchInput" type="text" />
                <SearchIcon className="header__searchIcon"/>
              </div>
        
            <div className="header__nav">
                <Link className="header__link" to={!user && "login"}>
                   <div onClick={login} className="header__option">
                        <span className="header__optionLineOne">hello {user?.email} </span>
                        <span className="header__optionLineTwo">{user?"Log Out":"Login"}</span>
                   </div>
                </Link>
                <Link className="header__link" to="/">
                   <div className="header__option">
                   <span className="header__optionLineOne">Return</span>
                    <span className="header__optionLineTwo">&Orders</span>
                   </div>
                </Link>
                <Link className="header__link" to="/">
                   <div className="header__option">
                   <span className="header__optionLineOne">Your</span>
                    <span className="header__optionLineTwo">Prime</span>
                   </div>
                </Link>

                
            </div>
            <Link className="header__link" to="/checkout">
                <div className="header__optionBasket">
                    <ShoppingBasketIcon/>
                    <span className="header__optionLineTwo header__busketCount">{ basket?.length}</span>
            </div>
            </Link>
        </nav>
    );
}
 

 
export default Header;