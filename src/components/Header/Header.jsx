import React from 'react'
import './Header.css'
import { Link } from "react-router-dom"


const Header = ({type}) => {
  

  return (
    <div className='header'>
        <div className="headerLeft">
            <Link to='/'><img className='header-icon' src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png" /></Link>
            <Link to='/movies/popular' style={{textDecoration: "none"}}><span className={type === "popular" ? "active" : ""} >Popular</span></Link>
            <Link to='/movies/top_rated' style={{textDecoration: "none"}}><span className={type === "top_rated" ? "active" : ""}>Top-Rated</span></Link>
            <Link to='/movies/upcoming' style={{textDecoration: "none"}}><span className={type === "upcoming" ? "active" : ""}>Upcoming</span></Link>

        </div>
    </div>
  )
}

export default Header