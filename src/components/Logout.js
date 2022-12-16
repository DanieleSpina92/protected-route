import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

const Logout = () => {

  const isLoggedUser = useSelector((state) => state.loggedInUser);
  const dispatch = useDispatch();
  console.log('isLoggedUser in logout; ' , isLoggedUser);

  


  return (
    <div>Logout</div>
  )
}

export default Logout