
import 'bootstrap/dist/css/bootstrap.css'
import './Navi.css';
import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>



function Navi (){

    const [toggleMenu, setToggleMenu] = useState(false)
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)
  
  
    const toggleNav = () => {
      setToggleMenu(!toggleMenu)
    }
  
    useEffect(() => {
  
      const changeWidth = () => {
        setScreenWidth(window.innerWidth);
      }
  
      window.addEventListener('resize', changeWidth)
  
      return () => {
          window.removeEventListener('resize', changeWidth)
      }
  
    }, [])
  
    return (
        <div class = "navbar-links">
      <nav>
        {(toggleMenu || screenWidth > 500) && (

        <ul className="list">
        <li className="items"> <Link to ='/'> Home </Link></li>
        <li className="items"> <Link to ='/blog'> Blog</Link> </li>
        </ul>
      
    
        )}

        <button onClick={toggleNav} className="btn"><div class ="lineone"></div><div class ="linetwo"></div><div class ="linethree"></div></button>
  
    

      </nav>
      </div>
    )
  }


export default Navi;