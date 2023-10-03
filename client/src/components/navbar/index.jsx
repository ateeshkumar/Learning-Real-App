import React from 'react'
import './index.css';
import toast from 'react-hot-toast';
import logo from '../../assests/logo.png';
import { Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { authAction } from '../../redux/store';
import {useSelector,useDispatch} from 'react-redux';
const Navbar = () => {

  let isLogin = useSelector((state)=>state.isLogin);
  isLogin = isLogin || localStorage.getItem('userId');
  const dispatch = useDispatch();
  const handleLogout = () =>{
    try {
        dispatch(authAction.login());
        toast.success('Logout Successfully');
        window.location.reload(false);
        localStorage.clear();
    } catch (error) {
        console.log(error)
    }
}  
  return (
    <div className="nav-container">
      <div className="left-nav">
        <img src={logo} alt="Logo"/>
      </div>
      <div className="nav-middle">
        <ul className='nav-list'>
          <li><Link to="/">Home</Link></li>
          <li className='dropdown'>
            <button className='dropbtn'>Engineering 
            <FontAwesomeIcon icon={faCaretDown}/></button>
            <div className="dropdown-content">
              <Link to='/html/1'>HTML</Link>
              <Link to='/css/1'>CSS</Link>
              <Link to='/javascript'>JavaScript</Link>
              <Link to='/javascript'>Node Js</Link>
              <Link to='/javascript'>React</Link>
              <Link to='/javascript'>React Native</Link>
            </div>

          </li>
          <li className='dropdown'>
            <button className='dropbtn'>Finance 
            <FontAwesomeIcon icon={faCaretDown}/></button>
            <div className="dropdown-content">
              <Link to='/html/1'>Marketing</Link>
              <Link to='/css/1'>Accountent</Link>
              <Link to='/javascript'>Digital Marketing</Link>
              <Link to='/javascript'>HR</Link>
            </div></li>
          <li className='dropdown'> 
            <button className='dropbtn'>Competative
            <FontAwesomeIcon icon={faCaretDown}/></button>
            <div className="dropdown-content">
              <Link to='/jeemain/1'>Jee Main Question Paper</Link>
            </div>
          </li>
          <li> <Link to="/courses">All Courses</Link></li>
        </ul>
      </div>
      <div className="nav-last">
        {
          !isLogin &&
          <Link to='/login' className='login-link'>Sign In/Sign Up</Link>
        }
        

        
        
         {isLogin && 
        <Link onClick={handleLogout} className='login-link'>Logout</Link>
         }
        
        
      </div>
    </div>
  )
}

export default Navbar;