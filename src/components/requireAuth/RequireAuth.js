import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom'

export const RequireAuth = ({children}) => {
    const location = useLocation()

    const {admin} = useSelector(state => state.adminInfo)

    if (!admin?._id){
    //redirext to login page

    return  <Navigate to='/' replace  state={{from: location}}/>}
  return (
    children
  )
}
