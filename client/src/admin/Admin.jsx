import React, { useEffect } from 'react'
import AdminNav from './AdminNav'
import {useSelector,useDispatch} from 'react-redux';
import { redirect, useNavigate } from 'react-router-dom';
const Admin = () => {
  const navigate = useNavigate();
  let isLogin = useSelector((state)=>state.isLogin);
  isLogin = isLogin || localStorage.getItem('adminId');
  return( 
    <>
    {isLogin?<div>
        <AdminNav/>
    </div>:navigate('/login')}
    </>
  )
}

export default Admin