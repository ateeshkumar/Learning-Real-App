import React from 'react'
import { Link,useNavigate } from 'react-router-dom';
import logo from '../assests/logo.png';
import {useSelector,useDispatch} from 'react-redux';
import { authAction } from '../redux/store';
const AdminNav = () => {
    const navigate = useNavigate();
    let isLogin = useSelector((state)=>state.isLogin);
    isLogin = isLogin || localStorage.getItem('adminId');
    const dispatch = useDispatch();

    
    const handleLogout = () =>{
        dispatch(authAction.login());
        localStorage.clear();
        navigate('/login');
       
    }

  return (
    <>
        <div className="admin-nav-con">
            <div className="admin-nav-left">
                <img src={logo} alt="logo"/>
            </div>
            <div className="admin-nav-mid">

            </div>
            <div className="admin-nav-right">
                {
                    isLogin && <Link onClick={handleLogout}>Logout</Link>
                }
                
            </div>
        </div>
    </>
  )
}

export default AdminNav