import React from 'react'
import {Link} from 'react-router-dom'
import Home from '../../screens/Home/Home'
import Favoritos from '../../screens/Favorites/Favorites'


function Header (){
    return (
        <div>
            <Link to= "/"> Home </Link>
            <Link to=  "/favoritos"> Favoritos </Link>

        </div>
      )
}

export default Header