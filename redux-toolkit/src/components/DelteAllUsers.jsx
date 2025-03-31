import React from 'react'
import { useDispatch } from 'react-redux';
import { clearuser } from '../store/slices/UserSlice';


const DelteAllUsers = () => {
  const dispatch = useDispatch();

  const deleteAlluser = () => {
    dispatch(clearuser())
  }

  return (
    <div className='delete-btn' onClick={() => {deleteAlluser()}}>
      Delte All Users
    </div>
  )
}



export default DelteAllUsers
