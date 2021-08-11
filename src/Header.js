import React from 'react'
import SearchIcon from '@material-ui/icons/Search'
import { ShoppingBasket } from '@material-ui/icons'
import './Header.css'

export default function Header() {
    return (
        <div className="header">
            <img className="header__logo" src='https://www.freepnglogos.com/uploads/amazon-png-logo-vector/world-brand-amazon-png-logo-vector-27.png' alt="logo"></img>
            <div className="header__search">
                <input className="header__searchInput" type="text"></input>
                <SearchIcon className="header__searchIcon"/>
            </div>
                <div className="header__nav">
                    <div className="header__option">
                        <span className="optionLineOne">Hello</span>
                        <span className="optionLineTwo">Sign in</span>
                    </div>
                    <div className="header__option">
                        <span className="optionLineOne">Return</span>
                        <span className="optionLineTwo">& Order</span>
                    </div>
                    <div className="header__option">
                        <span className="optionLineOne">Your</span>
                        <span className="optionLineTwo">Prime</span>
                    </div>
                    <div className="header__opionBasket">
                        <ShoppingBasket />
                        <span className="optionLineTwo header__basketCount">0</span>
                    </div>
                </div>
        </div>
    )
}
