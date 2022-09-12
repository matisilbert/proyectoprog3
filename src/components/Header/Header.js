import React from 'react'
import {Link} from 'react-router-dom'
import Home from '../../screens/Home/Home'
import Favoritos from '../../screens/Favorites/Favorites'
import './Header.css'


function Header (){
    return (


        <nav>
            <ul className='main-nav'>
                <Link to= "/">
                    <img src='/img/logo.png'  alt= 'logo'/>
                </Link>
                <Link to= "/"> Home </Link>
                <Link to=  "/favoritos"> Favoritos </Link>
            </ul>
        </nav>
      )
}

export default Header