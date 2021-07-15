import React from 'react'
import { useDispatch } from 'react-redux'
import { logout } from '../actions/userActions'
const ProfileScreen = ({ history }) => {
  const dispatch = useDispatch()
  const disconnect = () => {
    dispatch(logout())
    history.push('/')
  }
  return (
    <div>
      <button onClick={disconnect}>logout</button>
    </div>
  )
}

export default ProfileScreen
