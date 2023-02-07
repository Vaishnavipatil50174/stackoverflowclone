import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'

import { useSelector, useDispatch } from 'react-redux'

import logo from '../../assets/logo.png'
import search from '../../assets/search-solid.svg'
import Avatar from '../../components/Avatar/Avatar'
//import Avatar from '../Avatar/Avatar'
import { setCurrentUser } from '../../actions/currentUser'
import './Navbar.css'

const Navbar = () => {

  const dispatch = useDispatch()
  var User = useSelector((state) => (state.currentUserReducer))  

  useEffect(() => {
    
    dispatch(setCurrentUser( JSON.parse(localStorage.getItem('Profile'))))
},[dispatch])


  return (
    <nav className='main-nav'>
        <div className='navbar'>
            <Link to='/' className='nav-item nav-logo'>
                <img src={logo} alt= 'logo' />
            </Link>
            <Link to='/' className='nav-item nav-btn'>About</Link>
            <Link to='/' className='nav-item nav-btn'>Product</Link>
            <Link to='/' className='nav-item nav-btn'>For Teams</Link>
            <form>
                <input type="text" placeholder='Search...'/>
                <img src={search} alt="search" width="18" className='search-icon'/>
            </form>
            { User === null ? 
                <Link to='/Auth' className='nav-item nav-links'>Lon in</Link> :
                <>
                    <Avatar backgroundColor='#009dff' px="10px" py="7px" borderRadius="50%" color='white'><Link to='/User' style={{color:"white", textDecoration:'none'}}>{User.result.name.charAt(0).toUpperCase()}</Link></Avatar>
                    <button className='nav-item nav-links'>Log Out</button>
                </>
            
            }


            
        </div>
    </nav>
  )
}

export default Navbar
